# --- STAGE 1: Base ---
FROM node:22-alpine AS base
WORKDIR /app

# Ensure npm 24.11.1 is installed globally
RUN npm install -g npm@10.9.8

# --- STAGE 2: Dependencies ---
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/main#nodealpine for libc6-compat info
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json* ./
RUN npm ci

# --- STAGE 3: Builder ---
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set memory limit for the build process (4 GB = 4096 MB)
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN npm run build

# --- STAGE 4: Runner ---
FROM base AS runner
ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from builder (assumes 'standalone' output is enabled)
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
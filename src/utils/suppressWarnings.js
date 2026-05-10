// src/utils/suppressWarnings.js
if (typeof window !== 'undefined') {
  const originalError = console.error;
  console.error = (...args) => {
    const msg = args[0] || '';
    if (typeof msg === 'string') {
      const patterns = [
        'alignItems',
        'does not recognize',
        'non-boolean attribute',
        'InputLabelProps',
        'InputProps',
        'primaryTypographyProps'
      ];
      if (patterns.some(p => msg.includes(p))) {
        return;
      }
    }
    originalError(...args);
  };
}
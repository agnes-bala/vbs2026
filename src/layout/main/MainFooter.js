'use client';

// @mui
import {
  Box,
  Container,
  Grid,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import NextLink from "next/link";
// components
import Logo from "@/components/Logo";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Box
        sx={{
          py: 4,
          px: 2,
          backgroundColor: "#07075b",
          display: "flex",
          marginTop: -6,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={4}>
            {/* Logo Section */}
            <Grid item xs={12} sm={4} md={4}>
              <Logo />
            </Grid>

            {/* Quick Links Section */}
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ color: "white" }} variant="h6" gutterBottom>
                Quick Links
              </Typography>
              <NextLink href="/about" passHref legacyBehavior>
                <MuiLink
                  sx={{
                    color: "white",
                    "&:hover": {
                      color: "primary.main",
                      textDecoration: "none",
                    },
                  }}
                  underline="none"
                  display="block"
                >
                  About Us
                </MuiLink>
              </NextLink>
              <NextLink href="/contact" passHref legacyBehavior>
                <MuiLink
                  sx={{
                    color: "white",
                    "&:hover": {
                      color: "primary.main",
                      textDecoration: "none",
                    },
                  }}
                  underline="none"
                  display="block"
                >
                  Contact
                </MuiLink>
              </NextLink>
            </Grid>

            {/* Social Links Section */}
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ color: "white" }} variant="h6" gutterBottom>
                Social Links
              </Typography>
              <MuiLink
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "primary.main",
                    textDecoration: "none",
                  },
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 0.5,
                }}
                href="https://www.youtube.com/@JollyKidsprograms"
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon />
                Youtube
              </MuiLink>
              <MuiLink
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "primary.main",
                    textDecoration: "none",
                  },
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 0.5,
                }}
                href="https://www.facebook.com/JesusRedeemsMinistries/"
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookOutlinedIcon />
                Facebook
              </MuiLink>
              <MuiLink
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "primary.main",
                    textDecoration: "none",
                  },
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 0.5,
                }}
                href="https://www.instagram.com/jesusredeems_ministries/"
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
                Instagram
              </MuiLink>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box textAlign="center">
        <Typography sx={{ padding: 2 }} variant="body2" color="text.secondary">
          Copyright © Jesus Redeems Ministries. All Rights Reserved {new Date().getFullYear()} | Designed and Powered by Jesus Redeems IT.
        </Typography>
      </Box>
    </RootStyle>
  );
}
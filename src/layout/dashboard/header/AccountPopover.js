'use client';

import * as React from "react";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
// @mui
import {
  Box,
  Button,
  Divider,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { toast } from "react-toastify";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// hooks
import { AppAuthContext } from "../auth/AppAuthContext";
import { getAuthInfo, removeAuthInfo } from "../auth/AppAuthStorage";
// components
import MenuPopover from "./MenuPopover";
import MyAvatar from "./MyAvatar";
import { IconButtonAnimate } from "./animate";
// services
import { logoutPartner } from "../services/JRMPartnerAuthService";

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  { label: "Home", linkTo: "/dashboard/myapp" },
  { label: "Profile", linkTo: "/dashboard/user/profile" },
];

export default function AccountPopover() {
  const router = useRouter();
  const { user, setUser } = useContext(AppAuthContext);
  const [useremail, setUserEmail] = useState(null);
  const [open, setOpen] = useState(null);
  const [open1, setOpen1] = useState(false);

  // Get email from localStorage after mount
  React.useEffect(() => {
    const email = localStorage.getItem("emailAddress");
    setUserEmail(email);
  }, []);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClickOpen = () => {
    setOpen1(true);
  };
  const handleClickClose = () => {
    setOpen1(false);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogout = async () => {
    try {
      setUser(null);
      const authInfo = await getAuthInfo();
      console.log("authInfo", authInfo);
      const result = await logoutPartner(authInfo);
      console.log("logout result", result);

      if (!result) {
        console.log("Logout FAILED", result?.data);
        return alert(`Unable to logout ${result?.data?.message}`);
      }
      console.log("Logout successful", result);
      toast.info("Logout successful");
      // Remove all of auth info
      await removeAuthInfo();
      // Delete the items added in the local storage to logout user
      localStorage.clear();
      router.push("/");
    } catch (error) {
      console.error(error);
      toast.error("Unable to logout!", { variant: "error" });
    }
  };

  return (
    <>
      <IconButtonAnimate
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <MyAvatar />
      </IconButtonAnimate>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          "& .MuiMenuItem-root": {
            typography: "body2",
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {useremail}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem
              key={option.label}
              component={Link}
              href={option.linkTo}
              onClick={handleClose}
            >
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem onClick={handleClickOpen} sx={{ m: 1 }}>
          Logout
        </MenuItem>
        <Dialog open={open1} onClose={handleClickClose}>
          <DialogTitle>Confirm</DialogTitle>
          <DialogContent>
            <DialogContentText>Are you sure to logout ?</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleLogout}>Logout</Button>
            <Button onClick={handleClickClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </MenuPopover>
    </>
  );
}
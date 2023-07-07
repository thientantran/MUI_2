import {
  DarkModeOutlined,
  LightModeOutlined,
  Search,
} from "@mui/icons-material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import React, { useContext } from "react";

import { ColorModeContext, tokens } from "../../theme";

export default function Topbar() {
  const theme = useTheme();
  // lấy thêm từ themeprovider
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Search bar */}
      <Box display="flex" borderRadius="3px" bgcolor={colors.primary[400]}>
        <InputBase sx={{ ml: 2 }} placeholder="Search..." />
        <IconButton type="button" sx={{ p: 1 }}>
          {/* // icon button để tạo button có hình icon */}
          <Search />
        </IconButton>
      </Box>

      {/* Icons bar */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

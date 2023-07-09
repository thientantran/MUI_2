import { Box, useTheme } from "@mui/material";
import React from "react";

import { tokens } from "../theme";

// eslint-disable-next-line react/prop-types
export default function ProgressCircle({ progress = "0.40", size = "200" }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%), conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg), ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: `${size}px`,
          height: `${size}px`,
          lineHeight: `${size}px`,
          textAlign: "center",
          fontSize: `${size / 5}px`,
        }}
      >
        {progress * 100}%
      </Box>
    </Box>
  );
}

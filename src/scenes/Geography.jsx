import { Box, useTheme } from "@mui/material";
import React from "react";

import GeoChart from "../components/GeoChart";
import Header from "../components/Header";
import { tokens } from "../theme";

export default function Geography() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Bar chart" subtitle="Simple Bar Chart" />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeoChart />
      </Box>
    </Box>
  );
}

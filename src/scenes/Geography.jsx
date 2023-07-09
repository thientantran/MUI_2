import { Box } from "@mui/material";
import React from "react";

import GeoChart from "../components/GeoChart";
import Header from "../components/Header";

export default function Geography() {
  return (
    <Box m="20px">
      <Header title="Bar chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <GeoChart />
      </Box>
    </Box>
  );
}

import { Box } from "@mui/material";
import React from "react";

import BarChart from "../components/BarChart";
import Header from "../components/Header";

export default function Bar() {
  return (
    <Box m="20px">
      <Header title="Bar chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
}

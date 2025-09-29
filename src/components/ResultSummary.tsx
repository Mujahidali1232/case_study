// src/components/ResultSummary.tsx
import React from "react";
import { Box, Stack, Typography, Divider } from "@mui/material";
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded";

const BANNER_GREEN = "#243A2F";
const TEXT_DARK = "#0B0B0C";

export default function ResultSummary() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        bgcolor: "#FFFFFF",          // full white background
        py: 6,                       // vertical breathing room
      }}
    >
      {/* Rectangular banner: 1546 x 270, angle:0, opacity:1 */}
      <Box
        sx={{
          width: 1546,
          height: 270,
          mx: "auto",                // centered horizontally
          bgcolor: BANNER_GREEN,
          borderRadius: 0,           // rectangular (no rounding)
          transform: "rotate(0deg)", // angle: 0
          opacity: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 4,
          // Optional: keep it from overflowing small screens
          maxWidth: "100%",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={3}>
          <ComputerRoundedIcon sx={{ color: "#FFFFFF", fontSize: 36 }} />
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: "rgba(255,255,255,0.9)", borderRightWidth: 1 }}
          />
          <Typography sx={{ color: "#FFFFFF", fontWeight: 600, fontSize: 20 }}>
            Fully Functional &amp; Responsive Website
          </Typography>
        </Stack>
      </Box>

      {/* Paragraph under banner */}
      <Box sx={{ mt: 4, display: "flex", justifyContent: "center", px: 2 }}>
        <Typography
          sx={{
            color: TEXT_DARK,
            textAlign: "center",
            maxWidth: 780,
            fontSize: 14,
            lineHeight: 1.6,
          }}
        >
          <b>
            The final website delivers a sleek, modern look that highlights
            KitchenDesign premium services. It boosted user engagement, increased
            inquiries, and positioned the brand as a trusted kitchen design
            expert in the UAE.
          </b>
        </Typography>
      </Box>
    </Box>
  );
}

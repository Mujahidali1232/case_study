// src/components/Hero.tsx
import React from "react";
import { Box } from "@mui/material";
import heroImg from "../assets/newhero.png"; // ✅ use relative path

const Hero: React.FC = () => {
  return (
    <Box
      component="section"
      id="kitchens"
      sx={{
        width: "100%",
        bgcolor: "#FFFFFF",                 // full white background
        m: 0,
        p: 0,
      }}
    >
      <Box
        component="img"
        src={heroImg}
        alt="Hero"
        loading="lazy"
        sx={{
          display: "block",
          width: "100%",                    // span full width
          height: { xs: 360, sm: 460, md: 560, lg: 640 },
          objectFit: "contain",             // adjust image without cropping
          backgroundColor: "#FFFFFF",       // ensures any letterboxing is white
          margin: 0,
        }}
      />
    </Box>
  );
};

export default Hero;

// src/components/ResultsShowcase.tsx
import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import tabletImg from "../assets/design (1).png";  // will show on tablet
import laptopImg from "../assets/design (2).png";  // will show on laptop

const AMBER = "#D9A244";
const BG = "#FFFFFF"; // force white

export default function ResultsShowcase() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: BG,              // ✅ white background
        py: { xs: 6, md: 10 },
        // Hard-ensure a white floor beneath everything:
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          bgcolor: BG,           // ✅ white cover
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Heading */}
        <Stack alignItems="center" sx={{ mb: { xs: 4, md: 6 } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Box sx={{ width: 72, height: 3, bgcolor: AMBER, borderRadius: 1 }} />
            <Typography sx={{ fontWeight: 800, fontSize: { xs: 22, md: 32 }, color: "#111" }}>
              The Results
            </Typography>
            <Box sx={{ width: 72, height: 3, bgcolor: AMBER, borderRadius: 1 }} />
          </Box>
        </Stack>

        {/* Laptop mockup */}
        <Box sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
          {/* Bezel (light grey) */}
          <Box
            sx={{
              width: { xs: "100%", sm: 700, md: 880 },
              borderRadius: 2,
              p: { xs: 1, sm: 1.25 },
              background: "linear-gradient(180deg, #e9edf2 0%, #dfe4ea 60%, #d6dbe3 100%)",
              boxShadow: "0 30px 60px rgba(0,0,0,.18)",
              zIndex: 2,
            }}
          >
            {/* Screen */}
            <Box
              sx={{
                borderRadius: 1.25,
                overflow: "hidden",
                height: { xs: 300, sm: 360, md: 420 },
                position: "relative",
              }}
            >
              <Box
                component="img"
                src={laptopImg}
                alt="Laptop result"
                sx={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Camera dot */}
            <Box sx={{ width: 6, height: 6, bgcolor: "#b8bec6", borderRadius: "50%", mx: "auto", mt: 1 }} />
          </Box>

          {/* Laptop base */}
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              bottom: -18,
              left: "50%",
              transform: "translateX(-50%)",
              width: { xs: "70%", sm: 520, md: 640 },
              height: 18,
              borderRadius: "0 0 24px 24px",
              background: "linear-gradient(180deg, #ffffffff 0%, #ffffff 60%, #ffffff 100%)",
              boxShadow: "0 8px 20px rgba(0,0,0,.14)",
              zIndex: 1,
            }}
          />
        </Box>

        {/* Tablet (overlapping left) */}
        <Box
          sx={{
            position: "absolute",
            left: { xs: 40, sm: 84, md: 104 },
            top: { xs: "calc(50% - 70px)", sm: "calc(50% - 110px)", md: "calc(50% - 120px)" },
            zIndex: 3,
          }}
        >
          <Box
            sx={{
              width: { xs: 180, sm: 240, md: 300 },
              borderRadius: 2,
              p: 1.25,
              background: "linear-gradient(180deg, #1b1c1f 0%, #212327 100%)",
              boxShadow: "0 20px 40px rgba(0,0,0,.20)",
              border: "2px solid #2a2d31",
            }}
          >
            <Box
              sx={{
                borderRadius: 1.25,
                overflow: "hidden",
                height: { xs: 240, sm: 300, md: 360 },
                position: "relative",
              }}
            >
              <Box
                component="img"
                src={tabletImg}
                alt="Tablet result"
                sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  bottom: 8,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 46,
                  height: 4,
                  borderRadius: 2,
                  bgcolor: "#e5e7eb",
                  opacity: 0.85,
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* Right amber decorative lines */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            right: { xs: -80, md: -20 },
            top: { xs: 40, md: -10 },
            width: 260,
            height: 260,
            opacity: 0.45,
            zIndex: 1,
          }}
        >
          {[0, 18, 36, 54].map((offset) => (
            <Box
              key={offset}
              sx={{
                position: "absolute",
                top: offset,
                right: offset,
                bottom: offset,
                left: "50%",
                borderTop: `3px solid ${AMBER}`,
                borderRight: `3px solid ${AMBER}`,
                borderRadius: "0 140px 140px 0",
                backgroundColor: "transparent",
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

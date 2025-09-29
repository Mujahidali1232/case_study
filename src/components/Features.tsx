// src/components/Features.tsx
import * as React from "react";
import { Box, Container, Typography, Paper, Stack } from "@mui/material";

// 🔸 Images (make sure these files exist in src/assets/)
import imgCustom from "../assets/custom (1).png";
import imgModular from "../assets/modular.png";
import imgPreviews from "../assets/preves.png";
import imgRenovation from "../assets/renovaton.png";

const AMBER = "#EDA735";

type Feature = {
  title: string;
  desc: string;
  img: string;
};

const FEATURES: Feature[] = [
  {
    title: "Custom Designs",
    desc: "Personalized kitchen styles tailored to client needs and space.",
    img: imgCustom,
  },
  {
    title: "Modular Setup",
    desc: "High-quality modular fittings with smart storage solutions.",
    img: imgModular,
  },
  {
    title: "3D Previews",
    desc: "Interactive 3D visuals to preview designs before execution.",
    img: imgPreviews,
  },
  {
    title: "Full Renovation",
    desc: "End-to-end kitchen remodeling from concept to completion.",
    img: imgRenovation,
  },
];

export default function Features() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Stack
          spacing={1.5}
          sx={{
            textAlign: { xs: "left", sm: "center" },
            mb: { xs: 3.5, md: 6 },
            px: { xs: 1, sm: 0 },
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontWeight: 800,
              lineHeight: 1.1,
              fontSize: { xs: 24, sm: 28, md: 32 },
            }}
          >
            Kitchen Design{" "}
            <Box component="span" sx={{ color: AMBER }}>
              Features
            </Box>
          </Typography>

          <Typography
            align="center"
            sx={{
              color: "black",
              maxWidth: 820,
              mx: "auto",
              px: { xs: 0, sm: 2, md: 4 },
              fontSize: { xs: 14.5, sm: 15, md: 16 },
              lineHeight: 1.55,
            }}
          >
            A modern, user-focused website designed for a Dubai-based kitchen design company with
            an emphasis on customization, visual experience, and streamlined user interaction.
          </Typography>
        </Stack>

        {/* Cards grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: { xs: 2.25, sm: 3, md: 4 },
          }}
        >
          {FEATURES.map((f) => (
            <Paper
              key={f.title}
              elevation={0}
              sx={{
                p: { xs: 2.25, md: 3 },
                borderRadius: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                background: {
                  xs: "linear-gradient(180deg, #ffffff 0%, #ffffff 60%, #fff7e7 100%)",
                  md: "linear-gradient(180deg, #ffffff 0%, #ffffff 60%, #fff7e7 100%)",
                },
                boxShadow: {
                  xs: "0 10px 20px rgba(0,0,0,0.06)",
                  md: "0 14px 28px rgba(0,0,0,0.06)",
                },
                border: "1px solid rgba(0,0,0,0.05)",
                transition: "transform .25s ease, box-shadow .25s ease",
                // hover only on devices that support hover
                "@media (hover: hover)": {
                  "&:hover": {
                    transform: { md: "translateY(-4px)" },
                    boxShadow: { md: "0 18px 36px rgba(0,0,0,0.10)" },
                  },
                },
              }}
            >
              <Stack
                spacing={1.5}
                alignItems={{ xs: "center", sm: "flex-start" }}
                textAlign={{ xs: "center", sm: "left" }}
                sx={{ flex: 1 }}
              >
                {/* Icon / image area with fixed box for consistent alignment */}
                <Box sx={{ width: { xs: 96, sm: 112, md: 128 }, height: { xs: 48, sm: 56, md: 64 } }}>
                  <Box
                    component="img"
                    src={f.img}
                    alt={f.title}
                    loading="lazy"
                    width={128}
                    height={64}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </Box>

                <Typography component="h3" sx={{ fontWeight: 700, fontSize: { xs: 16, sm: 17, md: 18 } }}>
                  {f.title}
                </Typography>

                <Typography sx={{ color: "text.secondary", fontSize: { xs: 14, md: 15 } }}>
                  {f.desc}
                </Typography>
              </Stack>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

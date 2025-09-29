import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

// 👉 use your real assets from src/assets
import rightHero from "../assets/r.jpg"; // right (big circle)
import imgA from "../assets/new.jpg"; // left collage 1
import imgB from "../assets/new1.png"; // left collage 2
import imgC from "../assets/new2.jpg"; // left collage 3

const AMBER = "#D9A244";
const LEAF = "#2D5A3D";
const RADIUS = 14;

const ProblemSolution: React.FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, position: "relative" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 5, md: 8 },
            alignItems: "center",
          }}
        >
          {/* LEFT: Problems + 3-image collage */}
          <Box>
            <Stack spacing={2.5} sx={{ mb: { xs: 2, md: 3 } }}>
              <Typography
                component="h2"
                sx={{ fontWeight: 800, fontSize: { xs: 22, sm: 26, md: 30 }, lineHeight: 1.15 }}
              >
                Problems statement
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: { xs: 14.5, sm: 15.5 } }}>
                The client needed a modern, luxurious website that would reflect the premium quality of their custom
                kitchen design services in Dubai. The main challenges included presenting a diverse range of kitchen
                styles, explaining complex services, and generating leads through an elegant, user-friendly interface.
              </Typography>
            </Stack>

            {/* Collage */}
            <Box
              sx={{
                position: "relative",
                height: { xs: 280, sm: 320, md: 360 },
                mt: 2,
                // Keep content from touching edges on tiny screens
                mx: { xs: 0.5, sm: 0 },
              }}
            >
              {/* amber blob behind */}
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  left: { xs: 20, md: 32 },
                  top: { xs: 30, md: 44 },
                  width: { xs: 190, sm: 230, md: 280 },
                  height: { xs: 140, sm: 170, md: 210 },
                  bgcolor: AMBER,
                  borderRadius: "52% 48% 55% 45% / 58% 42% 58% 42%",
                  transform: "rotate(-8deg)",
                  filter: "drop-shadow(0 14px 28px rgba(0,0,0,.12))",
                }}
              />

              {/* dotted accent */}
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  left: { xs: 40, md: 56 },
                  top: { xs: 16, md: 24 },
                  width: { xs: 100, md: 120 },
                  height: { xs: 66, md: 80 },
                  backgroundImage: "radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px)",
                  backgroundSize: "10px 10px",
                  opacity: 0.7,
                }}
              />

              {/* pill label */}
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 14, md: 28 },
                  top: { xs: 92, md: 120 },
                  bgcolor: "#fff",
                  color: "text.primary",
                  px: 2,
                  py: 0.75,
                  borderRadius: 999,
                  boxShadow: "0 8px 18px rgba(0,0,0,.12)",
                  fontSize: { xs: 12, sm: 13 },
                  fontWeight: 600,
                  zIndex: 2,
                  maxWidth: { xs: 220, sm: 260 },
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Premium Kitchen Design Experience
              </Box>

              {/* A — top/left wide */}
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 44, sm: 64, md: 84 },
                  top: { xs: 56, sm: 66, md: 84 },
                  width: { xs: 150, sm: 176, md: 200 },
                  height: { xs: 96, sm: 108, md: 120 },
                  borderRadius: RADIUS,
                  overflow: "hidden",
                  boxShadow: "0 16px 32px rgba(0,0,0,.18)",
                  transform: "rotate(-3deg)",
                  zIndex: 3,
                }}
              >
                <Box
                  component="img"
                  src={imgA}
                  alt="Modern kitchen gallery 1"
                  width={200}
                  height={120}
                  sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </Box>

              {/* B — small card on top/right */}
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 208, sm: 238, md: 286 },
                  top: { xs: 32, sm: 40, md: 50 },
                  width: { xs: 112, sm: 126, md: 140 },
                  height: { xs: 80, sm: 90, md: 98 },
                  borderRadius: RADIUS,
                  overflow: "hidden",
                  boxShadow: "0 14px 28px rgba(0,0,0,.16)",
                  transform: "rotate(6deg)",
                  zIndex: 4,
                }}
              >
                <Box
                  component="img"
                  src={imgB}
                  alt="Modern kitchen gallery 2"
                  width={140}
                  height={98}
                  sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </Box>

              {/* C — bottom wide card */}
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 96, sm: 118, md: 144 },
                  bottom: { xs: 14, sm: 20, md: 28 },
                  width: { xs: 196, sm: 228, md: 250 },
                  height: { xs: 112, sm: 126, md: 140 },
                  borderRadius: RADIUS,
                  overflow: "hidden",
                  boxShadow: "0 16px 32px rgba(0,0,0,.18)",
                  transform: "rotate(1deg)",
                  zIndex: 3,
                }}
              >
                <Box
                  component="img"
                  src={imgC}
                  alt="Modern kitchen gallery 3"
                  width={250}
                  height={140}
                  sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </Box>
            </Box>
          </Box>

          {/* RIGHT: Solutions + single hero circle image */}
          <Box>
            <Box sx={{ position: "relative", height: { xs: 260, sm: 300, md: 340 }, mb: { xs: 3, md: 4 } }}>
              {/* green blobs */}
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  right: { xs: 36, md: 28 },
                  top: { xs: 8, md: -6 },
                  width: { xs: 70, sm: 85, md: 100 },
                  height: { xs: 70, sm: 85, md: 100 },
                  bgcolor: LEAF,
                  borderRadius: "48% 52% 40% 60% / 52% 40% 60% 48%",
                  zIndex: 0,
                }}
              />
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  right: { xs: 10, md: -10 },
                  bottom: { xs: -6, md: -10 },
                  width: { xs: 110, sm: 130, md: 160 },
                  height: { xs: 70, sm: 90, md: 110 },
                  bgcolor: LEAF,
                  borderRadius: "58% 42% 58% 42% / 48% 52% 42% 58%",
                  zIndex: 0,
                }}
              />

              {/* hero circle */}
              <Box
                sx={{
                  position: "absolute",
                  right: { xs: 28, md: 24 },
                  top: { xs: 6, md: -8 },
                  width: { xs: 210, sm: 250, md: 300 },
                  height: { xs: 210, sm: 250, md: 300 },
                  borderRadius: "50%",
                  overflow: "hidden",
                  boxShadow: "0 22px 44px rgba(0,0,0,.18)",
                  zIndex: 1,
                }}
              >
                <Box
                  component="img"
                  src={rightHero}
                  alt="Kitchen solution showcase"
                  width={300}
                  height={300}
                  sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </Box>

              {/* dashed ring */}
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  right: { xs: 24, md: 20 },
                  top: { xs: 2, md: -12 },
                  width: { xs: 220, sm: 262, md: 316 },
                  height: { xs: 220, sm: 262, md: 316 },
                  borderRadius: "50%",
                  border: "2px dashed rgba(0,0,0,.15)",
                }}
              />
            </Box>

            <Stack spacing={2.5}>
              <Typography
                component="h2"
                sx={{ fontWeight: 800, fontSize: { xs: 22, sm: 26, md: 30 }, lineHeight: 1.15 }}
              >
                Solutions statement
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: { xs: 14.5, sm: 15.5 } }}>
                We designed a clean, visually rich website that balances aesthetics with clarity. The homepage highlights
                key services using modular sections and high-res visuals. Clear CTAs enable quick consultation bookings,
                and the structure guides visitors smoothly from discovery to contact.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProblemSolution;

// src/components/ProcessFlow.tsx
import * as React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

const AMBER = "#EDA735";
const FOREST = "#2D5A3D";
const INK = "#2F3B57";
const PAPER = "#FBF4E8";

type Step = {
  num: string;
  title: string;
  desc: string;
  mode: "amberOnly" | "forestInner";
};

const STEPS: Step[] = [
  {
    num: "01",
    title: "Discovery & Planning",
    desc: "Understood project goals, target users, and brand direction.",
    mode: "amberOnly",
  },
  {
    num: "02",
    title: "Design & Wireframing",
    desc: "Created clean UI/UX layouts focused on usability and aesthetics.",
    mode: "forestInner",
  },
  {
    num: "03",
    title: "Development",
    desc: "Built features, integrated content, and ensured accessibility.",
    mode: "amberOnly",
  },
  {
    num: "04",
    title: "Launch & Feedback",
    desc: "Deployed the site, gathered feedback, and ensured performance.",
    mode: "forestInner",
  },
];

function Badge({ num, mode }: { num: string; mode: Step["mode"] }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: 132, sm: 148, md: 164 },
        height: { xs: 132, sm: 148, md: 164 },
        mx: "auto",
      }}
    >
      {/* thin outer border */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          boxShadow: `inset 0 0 0 3px rgba(15,23,42,.18)`,
        }}
      />

      {/* main ring */}
      <Box
        sx={{
          position: "absolute",
          inset: 10,
          borderRadius: "50%",
          boxShadow: `inset 0 0 0 14px ${
            mode === "amberOnly" ? AMBER : FOREST
          }`,
          bgcolor: "#fff",
        }}
      />

      {/* center plate */}
      <Stack
        sx={{
          position: "absolute",
          inset: 38,
          borderRadius: "50%",
          bgcolor: "#fff",
        }}
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          component="span"
          sx={{
            fontWeight: 800,
            lineHeight: 1,
            fontSize: { xs: 28, sm: 30, md: 32 },
            color: INK,
            letterSpacing: 0.5,
          }}
        >
          {num}
        </Typography>
        <Typography
          component="span"
          sx={{
            mt: 0.5,
            fontSize: { xs: 11, sm: 12 },
            letterSpacing: 2,
            color: INK,
            opacity: 0.75,
          }}
        >
          STEP
        </Typography>
      </Stack>
    </Box>
  );
}

export default function ProcessFlow() {
  return (
    <Box component="section" sx={{ bgcolor: PAPER, py: { xs: 6, md: 10 } }}>
      <Container maxWidth="xl">
        {/* Heading */}
        <Stack alignItems="center" spacing={2.5} sx={{ mb: { xs: 4, md: 6 } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box sx={{ width: 70, height: 3, bgcolor: AMBER, borderRadius: 999 }} />
            <Typography
              component="h2"
              sx={{
                fontWeight: 800,
                color: INK,
                fontSize: { xs: 24, sm: 28, md: 32 },
              }}
            >
              Process Flow
            </Typography>
            <Box sx={{ width: 70, height: 3, bgcolor: AMBER, borderRadius: 999 }} />
          </Box>
        </Stack>

        {/* Steps */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
            gap: { xs: 3.5, md: 4 },
          }}
        >
          {STEPS.map((s) => (
            <Stack key={s.num} spacing={2.25} alignItems="center" sx={{ textAlign: "center" }}>
              <Badge num={s.num} mode={s.mode} />
              <Typography
                component="h3"
                sx={{ fontWeight: 700, color: INK, fontSize: { xs: 16, sm: 17, md: 18 } }}
              >
                {s.title}
              </Typography>
              <Typography
                sx={{
                  color: INK,
                  opacity: 0.72,
                  fontSize: { xs: 13.5, sm: 14, md: 14 },
                  maxWidth: 260,
                  lineHeight: 1.6,
                }}
              >
                {s.desc}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

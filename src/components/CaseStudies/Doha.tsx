import React from 'react';
import { Box } from "@mui/material";
import { 
  Dohasectionbg, Dohasectioninner, Dohasection1inner, Dohasection2bg, Dohasection2inner, 
  Dohasection3bg, Dohasection3inner, Dohasection4inner, Dohasection5inner, Dohasection5bg, 
  Dohasection6inner, Dohasection7inner 
} from "../../assets/CaseStudies";

export default function Doha() {
  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ width: '100%', background: `url(${Dohasectionbg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3 }}>
          <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
            <img
              src={Dohasectioninner}
              width={"100%"}
              height={"auto"}
              alt={"kitchen Hero"}
            />
          </Box>
        </Box>

        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
          <img
            src={Dohasection1inner}
            width={"100%"}
            alt={"kitchen Hero"}
          />
        </Box>

        <Box sx={{ width: '100%', background: `url(${Dohasection2bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3 }}>
          <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
            <img
              src={Dohasection2inner}
              width={"100%"}
              height={"auto"}
              alt={"kitchen Hero"}
            />
          </Box>
        </Box>

        <Box sx={{ width: '100%', background: `url(${Dohasection3bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3 }}>
          <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
            <img
              src={Dohasection3inner}
              width={"100%"}
              alt={"kitchen Hero"}
            />
          </Box>
        </Box>

        <Box sx={{ width: '100%', bgcolor: '#00D0721A', py: { xs: 4, md: 6 }, px: 3 }}>
          <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
            <img
              src={Dohasection4inner}
              width={"100%"}
              height={"auto"}
              alt={"kitchen Hero"}
            />
          </Box>
        </Box>

        <Box sx={{ width: '100%', background: `url(${Dohasection5bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3 }}>
          <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
            <img
              src={Dohasection5inner}
              width={"100%"}
              height={"auto"}
              alt={"kitchen Hero"}
            />
          </Box>
        </Box>

        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
          <img
            src={Dohasection6inner}
            width={"100%"}
            alt={"kitchen Hero"}
          />
        </Box>

        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
          <img
            src={Dohasection7inner}
            width={"100%"}
            alt={"kitchen Hero"}
          />
        </Box>
      </Box>
    </div>
  );
}

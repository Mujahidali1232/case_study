import React from 'react';
import { Box } from "@mui/material";
import { MetcsectionBg, Metcsectioninner, Metcsection1inner, Metcsection2Bg, Metcsection2inner,Metcsection3Bg, Metcsection3inner, Metcsection5Bg, Metcsection5inner, Metcsection4inner, Metcsection6inner, Metcsection7inner } from "../../assets/CaseStudies";

export default function Metc() {
  return (
    <Box sx={{ width: '100%', }}>
      <Box sx={{ width: '100%', background: `url(${MetcsectionBg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
          <img
            src={Metcsectioninner}
            width={"100%"}
            height={"auto"}
            alt={"kitchen Hero"}
          />
        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
        <img
          src={Metcsection1inner}
          width={"100%"}
          alt={"kitchen Hero"}
        />
      </Box>
      <Box sx={{ width: '100%', background: `url(${Metcsection2Bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
          <img
            src={Metcsection2inner}
            width={"100%"}
            height={"auto"}
            alt={"kitchen Hero"}
          />
        </Box>
      </Box>
      <Box sx={{ width: '100%', background: `url(${Metcsection3Bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>

      <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
        <img
          src={Metcsection3inner}
          width={"100%"}
          alt={"kitchen Hero"}
        />
      </Box>
       </Box>
      <Box sx={{ width: '100%', bgcolor: '#C4D27559', py: { xs: 4, md: 6 }, px: 3, }}>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto'  }}>
          <img
            src={Metcsection4inner}
            width={"100%"}
            height={"auto"}
            alt={"kitchen Hero"}
          />
        </Box>
      </Box>
      <Box sx={{ width: '100%', background: `url(${Metcsection5Bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
          <img
            src={Metcsection5inner}
            width={"100%"}
            height={"auto"}
            alt={"kitchen Hero"}
          />
        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
        <img
          src={Metcsection6inner}
          width={"100%"}
          alt={"kitchen Hero"}
        />
      </Box>
      <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
        <img
          src={Metcsection7inner}
          width={"100%"}
          alt={"kitchen Hero"}
        />
      </Box>
    </Box>
  );
}

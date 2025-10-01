import React from 'react';
import { Box } from "@mui/material";
import { Hopesectionbg, Hopesectioninner, Hopesection1inner, Hopesection2bg, Hopesection2inner, Hopesection3inner, Hopesection4inner, Hopesection5bg, Hopesection5inner, Hopesection6inner, Hopesection7inner } from "../../assets/CaseStudies";

export default function Hope() {
  return (
    <Box sx={{ width: '100%', }}>
      <Box sx={{ width: '100%', background: `url(${Hopesectionbg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
          <img
            src={Hopesectioninner}
            width={"100%"}
            height={"auto"}
            alt={"kitchen Hero"}
          />
        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
        <img
          src={Hopesection1inner}
          width={"100%"}
          // height={"auto"}
          alt={"kitchen Hero"}
        />
      </Box>
      <Box sx={{ width: '100%', background: `url(${Hopesection2bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
          <img
            src={Hopesection2inner}
            width={"100%"}
            height={"auto"}
            alt={"kitchen Hero"}
          />
        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
        <img
          src={Hopesection3inner}
          width={"100%"}
          alt={"kitchen Hero"}
        />
      </Box>
      <Box sx={{ width: '100%', bgcolor: '#FFFFFF', py: { xs: 4, md: 6 }, px: 3, }}>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
          <img
            src={Hopesection4inner}
            width={"100%"}
            height={"auto"}
            alt={"kitchen Hero"}
          />
        </Box>
      </Box>
      <Box sx={{ width: '100%', background: `url(${Hopesection5bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
          <img
            src={Hopesection5inner}
            width={"100%"}
            height={"auto"}
            alt={"kitchen Hero"}
          />
        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
        <img
          src={Hopesection6inner}
          width={"100%"}
          alt={"kitchen Hero"}
        />
      </Box>
      <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
        <img
          src={Hopesection7inner}
          width={"100%"}
          alt={"kitchen Hero"}
        />
      </Box>
    </Box>
  );
}

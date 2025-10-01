import React from 'react';
import { Box } from "@mui/material";
import { Flavorsectioninner, Flavorsectionbg, Flavorsection1inner, Flavorsection2inner, kitchenSection3Bg, Flavorsection3inner, Flavorsection4inner, Flavorsection5inner, kitchenSection6Bg, Flavorsection6inner, Flavorsection7inner } from "../../assets/CaseStudies";

export default function Flavor() {
  return (
    <Box sx={{ width: '100%', }}>
      <Box sx={{ width: '100%', background: `url(${Flavorsectionbg })`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
          <img
            src={Flavorsectioninner}
            width={"100%"}
            height={"auto"}
            alt={"kitchen Hero"}
          />
        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
        <img
          src={Flavorsection1inner}
          width={"100%"}
          // height={"auto"}
          alt={"kitchen Hero"}
        />
      </Box>
      <Box sx={{ width: '100%', background: `url(${kitchenSection3Bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
          <img
            src={Flavorsection2inner}
            width={"100%"}
            height={"auto"}
            alt={"kitchen Hero"}
          />
        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
        <img
          src={Flavorsection3inner}
          width={"100%"}
          alt={"kitchen Hero"}
        />
      </Box>
      <Box sx={{ width: '100%', bgcolor: '#F4D3A630', py: { xs: 4, md: 6 }, px: 3, }}>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
          <img
            src={Flavorsection4inner}
            width={"100%"}
            height={"auto"}
            alt={"kitchen Hero"}
          />
        </Box>
      </Box>
      <Box sx={{ width: '100%', background: `url(${kitchenSection6Bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
          <img
            src={Flavorsection5inner}
            width={"100%"}
            height={"auto"}
            alt={"kitchen Hero"}
          />
        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
        <img
          src={Flavorsection6inner}
          width={"100%"}
          alt={"kitchen Hero"}
        />
      </Box>
      <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
        <img
          src={Flavorsection7inner}
          width={"100%"}
          alt={"kitchen Hero"}
        />
      </Box>
    </Box>
  );
}

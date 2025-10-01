import React from 'react';
import { Box } from "@mui/material";
import {Rammysectionbg, Rammysectioninner, Rammysection1inner, Rammysection2inner, Rammysection2bg, Rammysection3bg, Rammysection3inner, Rammysection5bg, Rammysection5inner, Rammysection6inner, Rammysection7inner } from "../../assets/CaseStudies";

export default function Rammy() {
  return (
    <Box sx={{ width: '100%', }}>
      <Box sx={{ width: '100%', background: `url(${Rammysectionbg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
          <img
            src={Rammysectioninner}
            width={"100%"}
            height={"auto"}
            alt={"kitchen Hero"}
          />
        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
        <img
          src={Rammysection1inner}
          width={"100%"}
          // height={"auto"}
          alt={"kitchen Hero"}
        />
      </Box>
      <Box sx={{ width: '100%', background: `url(${Rammysection2bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
          <img
            src={Rammysection2inner}
            width={"100%"}
            height={"auto"}
            alt={"kitchen Hero"}
          />
        </Box>
      </Box>
      <Box sx={{ width: '100%', background: `url(${Rammysection3bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
      <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
        <img
          src={Rammysection3inner}
          width={"100%"}
          alt={"kitchen Hero"}
        />
      </Box>
      </Box>
      <Box sx={{ width: '100%', background: `url(${Rammysection5bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
          <img
            src={Rammysection5inner}
            width={"100%"}
            height={"auto"}
            alt={"kitchen Hero"}
          />
        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
        <img
          src={Rammysection6inner}
          width={"100%"}
          alt={"kitchen Hero"}
        />
      </Box>
      <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
        <img
          src={Rammysection7inner}
          width={"100%"}
          alt={"kitchen Hero"}
        />
      </Box>
    </Box>
  );
}

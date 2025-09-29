import React from 'react'
import { Box } from "@mui/material";
import { Ihlaqsectionbg, Ihlaqsectioninner, Ihlaqsection1inner, Ihlaqsection2bg, Ihlaqsection2inner, Ihlaqsection3inner, Ihlaqsection4inner, Ihlaqsection5bg, Ihlaqsection5inner, Ihlaqsection6inner, Ihlaqsection7inner } from "../../assets/CaseStudies";

export default function Ihlaq() {
  return (
    <div>
      <Box sx={{ width: '100%', }}>
        <Box sx={{ width: '100%', background: `url(${Ihlaqsectionbg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
          <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
            <img
              src={Ihlaqsectioninner}
              width={"100%"}
              height={"auto"}
              alt={"kitchen Hero"}
            />
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
          <img
            src={Ihlaqsection1inner}
            width={"100%"}
            // height={"auto"}
            alt={"kitchen Hero"}
          />
        </Box>
        <Box sx={{ width: '100%', background: `url(${Ihlaqsection2bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
          <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
            <img
              src={Ihlaqsection2inner}
              width={"100%"}
              height={"auto"}
              alt={"kitchen Hero"}
            />
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
          <img
            src={Ihlaqsection3inner}
            width={"100%"}
            alt={"kitchen Hero"}
          />
        </Box>
        <Box sx={{ width: '100%', bgcolor: '#EAA451', py: { xs: 4, md: 6 }, px: 3, }}>
          <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
            <img
              src={Ihlaqsection4inner}
              width={"100%"}
              height={"auto"}
              alt={"kitchen Hero"}
            />
          </Box>
        </Box>
        <Box sx={{ width: '100%', background: `url(${Ihlaqsection5bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
          <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
            <img
              src={Ihlaqsection5inner}
              width={"100%"}
              height={"auto"}
              alt={"kitchen Hero"}
            />
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
          <img
            src={Ihlaqsection6inner}
            width={"100%"}
            alt={"kitchen Hero"}
          />
        </Box>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
          <img
            src={Ihlaqsection7inner}
            width={"100%"}
            alt={"kitchen Hero"}
          />
        </Box>
      </Box>
    </div>
  )
}

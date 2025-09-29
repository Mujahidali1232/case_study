import { Box } from "@mui/material";
import { Alkhairsectionbg, Alkhairsectioninner, Alkhairsection1inner, Alkhairsection2inner, Sahteinsection2bg, Alkhairsection3inner, Alkhairsection4bg, Alkhairsection4inner, Sahteinsection5bg, Alkhairsection5inner, Alkhairsection6inner, Alkhairsection7inner, } from "../../assets/CaseStudies";

export default function Alkhair() {
  return (
    <div>
      <Box sx={{ width: '100%', }}>
        <Box sx={{ width: '100%', background: `url(${Alkhairsectionbg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
          <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
            <img
              src={Alkhairsectioninner}
              width={"100%"}
              height={"auto"}
              alt={"kitchen Hero"}
            />
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
          <img
            src={Alkhairsection1inner}
            width={"100%"}
            // height={"auto"}
            alt={"kitchen Hero"}
          />
        </Box>
        <Box sx={{ width: '100%', background: `url(${Sahteinsection2bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
          <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
            <img
              src={Alkhairsection2inner}
              width={"100%"}
              height={"auto"}
              alt={"kitchen Hero"}
            />
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1800, mx: 'auto', my: 6, px: 2 }}>
          <img
            src={Alkhairsection3inner}
            width={"100%"}
            alt={"kitchen Hero"}
          />
        </Box>
        <Box sx={{ width: '100%', background: `url(${Alkhairsection4bg})`, py: { xs: 4, md: 6 }, px: 3, }}>
          <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
            <img
              src={Alkhairsection4inner}
              width={"100%"}
              height={"auto"}
              alt={"kitchen Hero"}
            />
          </Box>
        </Box>
        <Box sx={{ width: '100%', background: `url(${Sahteinsection5bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
          <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
            <img
              src={Alkhairsection5inner}
              width={"100%"}
              height={"auto"}
              alt={"kitchen Hero"}
            />
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
          <img
            src={Alkhairsection6inner}
            width={"100%"}
            alt={"kitchen Hero"}
          />
        </Box>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
          <img
            src={Alkhairsection7inner}
            width={"100%"}
            alt={"kitchen Hero"}
          />
        </Box>
      </Box>
    </div>
  )
}

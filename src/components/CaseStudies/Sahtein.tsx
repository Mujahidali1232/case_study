import { Box } from "@mui/material";
import { Sahteinsectionbg, Sahteinsectioninner, Sahteinsection1inner, Sahteinsection2inner, Sahteinsection2bg, Sahteinsection3inner, Sahteinsection4inner, Sahteinsection5bg, Sahteinsection5inner, Sahteinsection6inner, Sahteinsection7inner } from "../../assets/CaseStudies";

export default function Sahtein() {
  return (
    <div>
      <Box sx={{ width: '100%', }}>
        <Box sx={{ width: '100%', background: `url(${Sahteinsectionbg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
          <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
            <img
              src={Sahteinsectioninner}
              width={"100%"}
              height={"auto"}
              alt={"kitchen Hero"}
            />
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
          <img
            src={Sahteinsection1inner}
            width={"100%"}
            // height={"auto"}
            alt={"kitchen Hero"}
          />
        </Box>
        <Box sx={{ width: '100%', background: `url(${Sahteinsection2bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
          <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
            <img
              src={Sahteinsection2inner}
              width={"100%"}
              height={"auto"}
              alt={"kitchen Hero"}
            />
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
          <img
            src={Sahteinsection3inner}
            width={"100%"}
            alt={"kitchen Hero"}
          />
        </Box>
        <Box sx={{ width: '100%', bgcolor: '#76A264', py: { xs: 4, md: 6 }, px: 3, }}>
          <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
            <img
              src={Sahteinsection4inner}
              width={"100%"}
              height={"auto"}
              alt={"kitchen Hero"}
            />
          </Box>
        </Box>
        <Box sx={{ width: '100%', background: `url(${Sahteinsection5bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
          <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
            <img
              src={Sahteinsection5inner}
              width={"100%"}
              height={"auto"}
              alt={"kitchen Hero"}
            />
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
          <img
            src={Sahteinsection6inner}
            width={"100%"}
            alt={"kitchen Hero"}
          />
        </Box>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
          <img
            src={Sahteinsection7inner}
            width={"100%"}
            alt={"kitchen Hero"}
          />
        </Box>
      </Box>
    </div>
  )
}

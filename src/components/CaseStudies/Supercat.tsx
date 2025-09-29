import { Box } from "@mui/material";
import { Supercatsectionbg, Supercatsectioninner, Supercatsection1inner, Supercatsection2inner, Sahteinsection2bg, Supercatsection3inner,Supercatsection4bg, Supercatsection4inner, Sahteinsection5bg, Supercatsection5inner, Supercatsection6inner, Supercatsection7inner } from "../../assets/CaseStudies";

export default function Supercat() {
  return (
    <div>
      <Box sx={{ width: '100%', }}>
        <Box sx={{ width: '100%', background: `url(${Supercatsectionbg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
          <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
            <img
              src={Supercatsectioninner}
              width={"100%"}
              height={"auto"}
              alt={"kitchen Hero"}
            />
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
          <img
            src={Supercatsection1inner}
            width={"100%"}
            // height={"auto"}
            alt={"kitchen Hero"}
          />
        </Box>
        <Box sx={{ width: '100%', background: `url(${Sahteinsection2bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
          <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
            <img
              src={Supercatsection2inner}
              width={"100%"}
              height={"auto"}
              alt={"kitchen Hero"}
            />
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
          <img
            src={Supercatsection3inner}
            width={"100%"}
            alt={"kitchen Hero"}
          />
        </Box>
        <Box sx={{ width: '100%', background: `url(${Supercatsection4bg})`, py: { xs: 4, md: 6 }, px: 3, }}>
          <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
            <img
              src={Supercatsection4inner}
              width={"100%"}
              height={"auto"}
              alt={"kitchen Hero"}
            />
          </Box>
        </Box>
        <Box sx={{ width: '100%', background: `url(${Sahteinsection5bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
          <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
            <img
              src={Supercatsection5inner}
              width={"100%"}
              height={"auto"}
              alt={"kitchen Hero"}
            />
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
          <img
            src={Supercatsection6inner}
            width={"100%"}
            alt={"kitchen Hero"}
          />
        </Box>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
          <img
            src={Supercatsection7inner}
            width={"100%"}
            alt={"kitchen Hero"}
          />
        </Box>
      </Box>
    </div>
  )
}

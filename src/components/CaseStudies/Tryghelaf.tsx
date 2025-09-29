import { Box } from "@mui/material";
import { Tryghelafsectionbg, Tryghelafsectioninner, Tryghelafsection1inner, Tryghelafsection2inner, Tryghelafsection2bg, Tryghelafsection3inner, Tryghelafsection4inner, Tryghelafsection5bg, Tryghelafsection5inner, Tryghelafsection6inner, Tryghelafsection7inner } from "../../assets/CaseStudies";

export default function Tryghelaf() {
  return (
    <div>
      <Box sx={{ width: '100%', }}>
        <Box sx={{ width: '100%', background: `url(${Tryghelafsectionbg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
          <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
            <img
              src={Tryghelafsectioninner}
              width={"100%"}
              height={"auto"}
              alt={"kitchen Hero"}
            />
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
          <img
            src={Tryghelafsection1inner}
            width={"100%"}
            // height={"auto"}
            alt={"kitchen Hero"}
          />
        </Box>
        <Box sx={{ width: '100%', background: `url(${Tryghelafsection2bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
          <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
            <img
              src={Tryghelafsection2inner}
              width={"100%"}
              height={"auto"}
              alt={"kitchen Hero"}
            />
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
          <img
            src={Tryghelafsection3inner}
            width={"100%"}
            alt={"kitchen Hero"}
          />
        </Box>
        <Box sx={{ width: '100%', bgcolor: '#DBEFF0', py: { xs: 4, md: 6 }, px: 3, }}>
          <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
            <img
              src={Tryghelafsection4inner}
              width={"100%"}
              height={"auto"}
              alt={"kitchen Hero"}
            />
          </Box>
        </Box>
        <Box sx={{ width: '100%', background: `url(${Tryghelafsection5bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
          <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
            <img
              src={Tryghelafsection5inner}
              width={"100%"}
              height={"auto"}
              alt={"kitchen Hero"}
            />
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
          <img
            src={Tryghelafsection6inner}
            width={"100%"}
            alt={"kitchen Hero"}
          />
        </Box>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
          <img
            src={Tryghelafsection7inner}
            width={"100%"}
            alt={"kitchen Hero"}
          />
        </Box>
      </Box>
    </div>
  )
}

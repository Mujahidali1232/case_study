import { Box } from "@mui/material";
import { Cmcsectionbg, Cmcsectioninner, Cmcsection1inner, Cmcsection2inner, Cmcsection2bg, Cmcsection3inner, Cmcsection4inner, Qhmcsection5bg, Cmcsection5inner, Cmcsection6inner, Cmcsection7inner } from "../../assets/CaseStudies";


export default function Cmc() {
  return (
    <Box sx={{ width: '100%', }}>
      <Box sx={{ width: '100%', background: `url(${Cmcsectionbg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
          <img
            src={Cmcsectioninner}
            width={"100%"}
            height={"auto"}
            alt={"kitchen Hero"}
          />
        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
        <img
          src={Cmcsection1inner}
          width={"100%"}
          // height={"auto"}
          alt={"kitchen Hero"}
        />
      </Box>
      <Box sx={{ width: '100%', background: `url(${Cmcsection2bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
          <img
            src={Cmcsection2inner}
            width={"100%"}
            height={"auto"}
            alt={"kitchen Hero"}
          />
        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
        <img
          src={Cmcsection3inner}
          width={"100%"}
          alt={"kitchen Hero"}
        />
      </Box>
      <Box sx={{ width: '100%', bgcolor: '#EBEBEB', py: { xs: 4, md: 6 }, px: 3, }}>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
          <img
            src={Cmcsection4inner}
            width={"100%"}
            height={"auto"}
            alt={"kitchen Hero"}
          />
        </Box>
      </Box>
      <Box sx={{ width: '100%', background: `url(${Qhmcsection5bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
        <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
          <img
            src={Cmcsection5inner}
            width={"100%"}
            height={"auto"}
            alt={"kitchen Hero"}
          />
        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
        <img
          src={Cmcsection6inner}
          width={"100%"}
          alt={"kitchen Hero"}
        />
      </Box>
      <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
        <img
          src={Cmcsection7inner}
          width={"100%"}
          alt={"kitchen Hero"}
        />
      </Box>
    </Box>
  )
}

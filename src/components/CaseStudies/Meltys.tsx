import { Box } from "@mui/material";
import { Meltyssectionbg,Meltyssectioninner, Meltyssection1bg, Meltyssection1inner,Meltyssection2bg, Meltyssection2inner, Meltyssection3bg, Meltyssection3inner, Meltyssection4inner, Meltyssection5bg,  Meltyssection5inner, Meltyssection6inner, Meltyssection7inner } from "../../assets/CaseStudies";
 
const Meltys = () => {
 return (
        <Box sx={{ width: '100%', }}>
              <Box sx={{ width: '100%', background: `url(${Meltyssectionbg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
                <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
                    <img
                        src={Meltyssectioninner}
                        width={"100%"}
                        height={"auto"}
                        alt={"kitchen Hero"}
                    />
            </Box>    
            </Box>      
            <Box sx={{ width: '100%', background: `url(${Meltyssection1bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
                <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
                    <img
                        src={Meltyssection1inner}
                        width={"100%"}
                        height={"auto"}
                        alt={"Meltys sect6ion1inner"}
                    />
                </Box>
            </Box>
    
            <Box sx={{ width: '100%', background: `url(${Meltyssection2bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}></Box>
            <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
                <img
                    src={Meltyssection2inner}
                    width={"100%"}
                    // height={"auto"}
                    alt={"kitchen Hero"}
                />
            </Box>

            <Box sx={{ width: '100%', background: `url(${Meltyssection3bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
                <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
                    <img
                        src={Meltyssection3inner}
                        width={"100%"}
                        height={"auto"}
                        alt={"kitchen Hero"}
                    />
                </Box>
            </Box>
            <Box sx={{ width: '100%', bgcolor: '#D4B19F54', py: { xs: 4, md: 6 }, px: 3, }}>
                <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
                    <img
                        src={Meltyssection4inner}
                        width={"100%"}
                        height={"auto"}
                        alt={"kitchen Hero"}
                    />
                </Box>
            </Box>

             <Box sx={{ width: '100%', background: `url(${Meltyssection5bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}></Box>
            <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
                <img
                    src={Meltyssection5inner}
                    width={"100%"}
                    alt={"kitchen Hero"}
                />
            </Box>
            <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
                <img
                    src={Meltyssection6inner}
                    width={"100%"}
                    alt={"kitchen Hero"}
                />
            </Box>
            <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
                <img
                    src={Meltyssection7inner}
                    width={"100%"}
                    alt={"kitchen Hero"}
                />
            </Box>
        </Box>
    );
}

export default Meltys

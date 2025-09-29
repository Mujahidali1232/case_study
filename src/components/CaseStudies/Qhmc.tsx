import { Box } from "@mui/material";
import { Qhmcsectionbg, Qhmcsectioninner,Qhmcsection1inner, Qhmcsection2bg, Qhmcsection2inner, Qhmcsection3inner, Qhmcsection4inner, Qhmcsection5bg, Qhmcsection5inner, Qhmcsection6inner, Qhmcsection7inner } from "../../assets/CaseStudies";
 
const Qhmc = () => {
    return (
        <Box sx={{ width: '100%', }}>
            <Box sx={{ width: '100%', background: `url(${Qhmcsectionbg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
                <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
                    <img
                        src={Qhmcsectioninner}
                        width={"100%"}
                        height={"auto"}
                        alt={"kitchen Hero"}
                    />
                </Box>
            </Box>
            <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
                <img
                    src={Qhmcsection1inner}
                    width={"100%"}
                    // height={"auto"}
                    alt={"kitchen Hero"}
                />
            </Box>
            <Box sx={{ width: '100%', background: `url(${Qhmcsection2bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
                <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
                    <img
                        src={Qhmcsection2inner}
                        width={"100%"}
                        height={"auto"}
                        alt={"kitchen Hero"}
                    />
                </Box>
            </Box>
            <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
                <img
                    src={Qhmcsection3inner}
                    width={"100%"}
                    alt={"kitchen Hero"}
                />
            </Box>
            <Box sx={{ width: '100%', bgcolor: '#E6F9FB', py: { xs: 4, md: 6 }, px: 3, }}>
                <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
                    <img
                        src={Qhmcsection4inner}
                        width={"100%"}
                        height={"auto"}
                        alt={"kitchen Hero"}
                    />
                </Box>
            </Box>
            <Box sx={{ width: '100%', background: `url(${Qhmcsection5bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
                <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
                    <img
                        src={Qhmcsection5inner}
                        width={"100%"}
                        height={"auto"}
                        alt={"kitchen Hero"}
                    />
                </Box>
            </Box>
            <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
                <img
                    src={Qhmcsection6inner}
                    width={"100%"}
                    alt={"kitchen Hero"}
                />
            </Box>
            <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
                <img
                    src={Qhmcsection7inner}
                    width={"100%"}
                    alt={"kitchen Hero"}
                />
            </Box>
        </Box>
    );
}
 
export default Qhmc;

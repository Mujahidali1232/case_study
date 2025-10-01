import { Box } from "@mui/material";
import { Patinamobilesectionbg, Patinamobilesectioninner, Patinamobilesection1inner, Patinamobilesection2bg, Patinamobilesection2inner, Patinamobilesection3inner, Patinamobilesection4inner, Patinamobilesection5bg, Patinamobilesection5inner, Patinamobilesection6inner, Patinamobilesection7inner } from "../../assets/CaseStudies";

const Patinamobile = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ width: '100%', background: `url(${Patinamobilesectionbg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3 }}>
                <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
                    <img
                        src={Patinamobilesectioninner}
                        width={"100%"}
                        height={"auto"}
                        alt={"kitchen Hero"}
                    />
                </Box>
            </Box>
            <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
                <img
                    src={Patinamobilesection1inner}
                    width={"100%"}
                    alt={"kitchen Hero"}
                />
            </Box>
            <Box sx={{ width: '100%', background: `url(${Patinamobilesection2bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3 }}>
                <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
                    <img
                        src={Patinamobilesection2inner}
                        width={"100%"}
                        height={"auto"}
                        alt={"kitchen Hero"}
                    />
                </Box>
            </Box>
            <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
                <img
                    src={Patinamobilesection3inner}
                    width={"100%"}
                    alt={"kitchen Hero"}
                />
            </Box>
            <Box sx={{ width: '100%', bgcolor: '#F3B97F', py: { xs: 4, md: 6 }, px: 3 }}>
                <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
                    <img
                        src={Patinamobilesection4inner}
                        width={"100%"}
                        height={"auto"}
                        alt={"kitchen Hero"}
                    />
                </Box>
            </Box>
            <Box sx={{ width: '100%', background: `url(${Patinamobilesection5bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3 }}>
                <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
                    <img
                        src={Patinamobilesection5inner}
                        width={"100%"}
                        height={"auto"}
                        alt={"kitchen Hero"}
                    />
                </Box>
            </Box>
            <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
                <img
                    src={Patinamobilesection6inner}
                    width={"100%"}
                    alt={"kitchen Hero"}
                />
            </Box>
            <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
                <img
                    src={Patinamobilesection7inner}
                    width={"100%"}
                    alt={"kitchen Hero"}
                />
            </Box>
        </Box>
    );
}

export default Patinamobile;

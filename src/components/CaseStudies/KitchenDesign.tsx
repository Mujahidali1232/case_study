import { Box } from "@mui/material";
import { kitchenHero, kitchenHeroBg, kitchenSection2, kitchenSection3, kitchenSection3Bg, kitchenSection4, kitchenSection5, kitchenSection6, kitchenSection6Bg, kitchenSection7, kitchenSection8 } from "../../assets/CaseStudies";
 
const KitchenDesign = () => {
    return (
        <Box sx={{ width: '100%', }}>
            <Box sx={{ width: '100%', background: `url(${kitchenHeroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
                <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
                    <img
                        src={kitchenHero}
                        width={"100%"}
                        height={"auto"}
                        alt={"kitchen Hero"}
                    />
                </Box>
            </Box>
            <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
                <img
                    src={kitchenSection2}
                    width={"100%"}
                    // height={"auto"}
                    alt={"kitchen Hero"}
                />
            </Box>
            <Box sx={{ width: '100%', background: `url(${kitchenSection3Bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
                <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
                    <img
                        src={kitchenSection3}
                        width={"100%"}
                        height={"auto"}
                        alt={"kitchen Hero"}
                    />
                </Box>
            </Box>
            <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
                <img
                    src={kitchenSection4}
                    width={"100%"}
                    alt={"kitchen Hero"}
                />
            </Box>
            <Box sx={{ width: '100%', bgcolor: '#FFF7E9', py: { xs: 4, md: 6 }, px: 3, }}>
                <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
                    <img
                        src={kitchenSection5}
                        width={"100%"}
                        height={"auto"}
                        alt={"kitchen Hero"}
                    />
                </Box>
            </Box>
            <Box sx={{ width: '100%', background: `url(${kitchenSection6Bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
                <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
                    <img
                        src={kitchenSection6}
                        width={"100%"}
                        height={"auto"}
                        alt={"kitchen Hero"}
                    />
                </Box>
            </Box>
            <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
                <img
                    src={kitchenSection7}
                    width={"100%"}
                    alt={"kitchen Hero"}
                />
            </Box>
            <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
                <img
                    src={kitchenSection8}
                    width={"100%"}
                    alt={"kitchen Hero"}
                />
            </Box>
        </Box>
    );
}
 
export default KitchenDesign
import { Box } from "@mui/material";
import { Milkaraysection1bg, Milkaraysection1inner, Milkaraysection2inner, Milkaraysection3inner, Milkaraysection3bg, Milkaraysection4bg, Milkaraysection4inner, Milkaraysection5bg, Milkaraysection5inner, Milkaraysection6inner, Milkaraysection6bg, Milkaraysection7, Milkaraysection8 } from "../../assets/CaseStudies";
 
const Milkaray = () => {
    return (
        <Box sx={{ width: '100%', }}>
            <Box sx={{ width: '100%', background: `url(${Milkaraysection1bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
                <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
                    <img
                        src={Milkaraysection1inner}
                        width={"100%"}
                        height={"auto"}
                        alt={"kitchen Hero"}
                    />
                </Box>
            </Box>
            <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
                <img
                    src={Milkaraysection2inner}
                    width={"100%"}
                    // height={"auto"}
                    alt={"kitchen Hero"}
                />
            </Box>
            <Box sx={{ width: '100%', background: `url(${Milkaraysection3bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
                <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto' }}>
                    <img
                        src={Milkaraysection3inner}
                        width={"100%"}
                        height={"auto"}
                        alt={"kitchen Hero"}
                    />
                </Box>
            </Box>
            <Box sx={{ width: '100%', background: `url(${Milkaraysection4bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
                <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
                    <img
                        src={Milkaraysection4inner}
                        width={"100%"}
                        height={"auto"}
                        alt={"kitchen Hero"}
                    />
                </Box>
            </Box>
            <Box sx={{ width: '100%', background: `url(${Milkaraysection5bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
                <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
                    <img
                        src={Milkaraysection5inner}
                        width={"100%"}
                        height={"auto"}
                        alt={"kitchen Hero"}
                    />
                </Box>
            </Box>
            <Box sx={{ width: '100%', background: `url(${Milkaraysection6bg})`, backgroundSize: 'cover', backgroundPosition: 'center', py: { xs: 4, md: 6 }, px: 3, }}>
                <Box sx={{ width: "100%", height: "auto", maxWidth: 1100, mx: 'auto' }}>
                    <img
                        src={Milkaraysection6inner}
                        width={"100%"}
                        height={"auto"}
                        alt={"kitchen Hero"}
                    />
                </Box>
            </Box>
            <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
                <img
                    src={Milkaraysection7}
                    width={"100%"}
                    alt={"kitchen Hero"}
                />
            </Box>
            <Box sx={{ width: "100%", height: "auto", maxWidth: 1300, mx: 'auto', my: 6, px: 2 }}>
                <img
                    src={Milkaraysection8}
                    width={"100%"}
                    alt={"kitchen Hero"}
                />
            </Box>
        </Box>
    );
}
 
export default Milkaray

import React from "react";
import { Box, Container, Stack, Typography, Button } from "@mui/material";

const AMBER = "#E8AE4A";
const BTN_DARK = "#2F3B57";

export default function CalloutCta() {
	return (
		<Box component="section" sx={{ bgcolor: "#FFFFFF", py: { xs: 4, sm: 6, md: 8 } }}>
			<Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
				<Box
					sx={{
						bgcolor: AMBER,
						borderRadius: { xs: 2, md: 3 },
						mx: "auto",
						width: "100%",
						maxWidth: 1555,           // original max width
						minHeight: { xs: 200, md: 291 }, // scale height
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						textAlign: "center",
						px: { xs: 2, sm: 4, md: 6 }
					}}
				>
					<Stack spacing={{ xs: 1.5, sm: 2, md: 2.5 }} alignItems="center" sx={{ width: "100%" }}>
						<Typography
							sx={{
								color: "#FFFFFF",
								fontWeight: 800,
								fontSize: { xs: 18, sm: 22, md: 28, lg: 32 },
								lineHeight: 1.25
							}}
						>
							Ready to Build Your Dream Project?
						</Typography>

						<Typography
							sx={{
								color: "#FFFFFF",
								maxWidth: { xs: 560, sm: 720, md: 820 },
								fontSize: { xs: 12, sm: 13, md: 14 },
								lineHeight: { xs: 1.55, md: 1.6 }
							}}
						>
							Got a great idea? We’ve got the tools to bring it to life. From first sketch to final launch, we
							work side by side with you to design and build a product that truly reflects your vision and values.
						</Typography>

						<Button
							variant="contained"
							sx={{
								mt: { xs: 0.5, md: 1 },
								bgcolor: BTN_DARK,
								color: "#FFFFFF",
								borderRadius: 1.25,
								textTransform: "none",
								fontWeight: 700,
								fontSize: { xs: 12, md: 12.5 },
								px: { xs: 2.25, md: 3 },
								py: { xs: 0.75, md: 0.9 },
								boxShadow: "none",
								"&:hover": { bgcolor: "#253149", boxShadow: "none" }
							}}
						>
							CONTACT NOW
						</Button>
					</Stack>
				</Box>
			</Container>
		</Box>
	);
}
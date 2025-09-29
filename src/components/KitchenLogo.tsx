import { Box, Typography } from "@mui/material";
import { Home } from "@mui/icons-material";

const KitchenLogo = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Box
        sx={{
          width: 40,
          height: 40,
          bgcolor: "primary.main",
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Home sx={{ color: "white", fontSize: 24 }} />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ fontWeight: "bold", color: "text.primary" }}>
          KITCHEN DESIGN
        </Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          دیزاین
        </Typography>
      </Box>
    </Box>
  );
};

export default KitchenLogo;

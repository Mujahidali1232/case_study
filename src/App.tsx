import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// MUI Theme with Kitchen Design Colors
const theme = createTheme({
  palette: {
    primary: { main: "#EDA735" }, // warm orange
    secondary: { main: "#2d5a3d" }, // green
    background: { default: "#f5f5f5" },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700, fontSize: "3.5rem", lineHeight: 1.1 },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        {/* ✅ Navbar should be outside <Routes> */}
        <Routes>
          {/* ✅ remove duplicate "/" route */}
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

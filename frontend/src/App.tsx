import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import { useMemo, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Box } from "@mui/system";
import TablePage from "./pages/TablePage";
import AboutPage from "./pages/AboutPage";
import MSABrowserPage from "./pages/MSABrowserPage";
import MainPage from "./pages/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/table",
    element: <TablePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/msabrowser",
    element: <MSABrowserPage />,
  },
]);

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const darkTheme = useMemo(() => {
    return createTheme({
      palette: {
        mode: isDarkMode ? "dark" : "light",
      },
      components: {
        MuiAppBar: {
          styleOverrides: {
            root: {
              backgroundColor: isDarkMode ? "inherit" : "#02104d",
            },
          },
        },
      },
    });
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar
        handleModeChange={() => setIsDarkMode(!isDarkMode)}
        isDarkMode={isDarkMode}
      />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}

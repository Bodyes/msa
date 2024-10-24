//import * as React from "react";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { Button, Card, colors, IconButton, Link, Paper } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";

interface Properties {
  isDarkMode: boolean;
  handleModeChange: () => void;
}

export default function Navbar(props: Properties) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Box
            sx={{
              m: "auto",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <IconButton sx={{ ml: "auto" }} onClick={props.handleModeChange}>
              {props.isDarkMode ? (
                <LightModeOutlined />
              ) : (
                <DarkModeOutlined sx={{ color: "white" }} />
              )}
            </IconButton>

            <Link component={RouterLink} to="/table">
              Table Page
            </Link>
            <Link component={RouterLink} to="/about">
              About
            </Link>
            <Link component={RouterLink} to="/msabrowser">
              MSA
            </Link>
            <Link component={RouterLink} to="/">
              Main Page
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

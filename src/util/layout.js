import React from "react";
import ResponsiveAppBar from "../components/Navbar";
import PermanentDrawerLeft from "../components/Sidebar";
import { Grid, Box } from "@mui/material";

const SiteLayout = ({ children }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Box>
            <ResponsiveAppBar />
          </Box>
        </Grid>
        <Grid item sx={{ width: "fit-content" }}>
          <Box>
            <PermanentDrawerLeft />
          </Box>
        </Grid>
        <Grid item xs sx={{ backgroundColor: "#f2f7f4" }}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default SiteLayout;

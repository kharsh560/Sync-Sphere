import React from "react";
import { Grid } from "@mui/material";
import Posts from "../post/Posts";
import Categories from "../categories/catagories";

function ProjectsHome() {
  return (
    <>
      <Grid container>
        <Grid item lg={2} sm={2} xs={12}>
          <Categories />
        </Grid>
        <Grid item lg={10} sm={10} xs={12}>
          <Posts />
        </Grid>
      </Grid>
    </>
  );
}

export default ProjectsHome;

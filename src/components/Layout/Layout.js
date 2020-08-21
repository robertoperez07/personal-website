import React from "react";
import { Grid } from "@material-ui/core";
import MobileNav from "../MobileNav";
import Sidebar from "../Sidebar";

const Layout = ({ user, children }) => {
  return (
    <Grid container>
      {/* <Grid item xs={12} s={0}> */}
        {/* <MobileNav/> */}
      {/* </Grid> */}
      <Grid item xs={2}>
        <Sidebar/>
      </Grid>
      <Grid item xs={10}>
            {/* <UserHeader user={user} /> */}
            {/* <div>{children}</div> */}
            <div>Hello</div>
      </Grid>
    </Grid>
  );
};

export default Layout;

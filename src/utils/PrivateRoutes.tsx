import { Outlet, Navigate } from "react-router-dom";
//import { userService } from "../services/user";
import { Box } from "@mui/material";
//import { useState } from "react";

const PrivateRoutes = () => {
  // const [authState, setAuthState] = useState({
  //   loading: true,
  //   authenticated: false,
  // });

  // userService.setupAuthStateListener(setAuthState);

  let authState = {loading: false, authenticated: true}

  if (authState.loading) {
    return <Box>loading...</Box>; //TODO: Blank loading screen for now
  } else {
    return authState.authenticated ? <Outlet /> : <Navigate to="/" />;
  }
};

export default PrivateRoutes;

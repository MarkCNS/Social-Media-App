import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import SiteLayout from "../util/layout";
import LocalStorageService from "../util/localStorageService";

const Privateroutes = () => {
  const isUserLoggedIn = LocalStorageService.getAccessToken();
  return (
    <>
      {isUserLoggedIn ? (
        <SiteLayout>
          <Outlet />
        </SiteLayout>
      ) : (
        <Navigate to={"/"} />
      )}
    </>
  );
};

export default Privateroutes;

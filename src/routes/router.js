import { Route, Routes } from "react-router-dom";
import SiteLayout from "../util/layout";
import Groups from "../pages/groups";
import Homepage from "../pages/home";
import Live from "../pages/live";
import Marketplace from "../pages/marketplace";
import Messenger from "../pages/messenger";
import Notification from "../pages/notification";
import Watch from "../pages/watch";
import Login from "../pages/login";
import SignUp from "../pages/signup";
import Privateroutes from "./privateroutes";

function RoutePages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<Privateroutes />}>
          <Route path="/home" element={<Homepage />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/messenger" element={<Messenger />} />
          <Route path="/live" element={<Live />} />
        </Route>
      </Routes>
    </>
  );
}

export default RoutePages;

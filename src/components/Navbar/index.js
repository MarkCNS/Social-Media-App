import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import SearchIcon from "@mui/icons-material/Search";
import IconAvatar from "../../assets/QmTndiF423kjdXsNzsip1QQkBQqDuzDhJnGuJAXtv4XXiZ-1.png";
import { useNavigate } from "react-router-dom";
import firebaseConfig from "../../firebase";
import { getAuth, signOut } from "firebase/auth";
import LocalStorageService from "../../util/localStorageService";

const auth = getAuth();

const pages = [
  { title: "Home", path: "/home" },
  { title: "Notification", path: "/notification" },
  { title: "Watch", path: "/watch" },
  { title: "Marketplace", path: "/marketplace" },
  { title: "Groups", path: "/groups" },
  { title: "Messenger", path: "/messenger" },
  { title: "Live", path: "/live" },
  { title: "Login", path: "/" },
  { title: "SignUp", path: "/signup" },
];
const settings = ["Logout"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const getUser = LocalStorageService.getCurrentUser();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlePath = (path) => {
    navigate(`${path}`);
  };

  const signOutAcc = () => {
    signOut(auth)
      .then(() => {
        // localStorage.clear();
        LocalStorageService.clearToken();
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <AppBar
      sx={{
        position: "relative",
        // zIndex: (theme) => theme.zIndex.drawer + 1,

        // zIndex: "1",
        backgroundColor: "white",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          // "@media (max-width: 600px)": {
          //   padding: "0px 8px",
          // },
          // "@media (min-width: 600px)": {
          //   padding: "0px 16px",
          // },
          padding: { sm: "0px 16px", xs: "0px 8px" },
          height: "fit-content",
        }}
      >
        <Toolbar disableGutters>
          <FacebookRoundedIcon
            fontSize="large"
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              fill: "#1877F2",
              width: "40px",
              height: "40px",
            }}
          />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "#1877F2",
              textDecoration: "none",
            }}
          >
            facebook
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              flexWrap: "wrap",
              justifyContent: "center",
              "@media (min-width: 978px)": {
                gap: "12px",
              },
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={() => handlePath(page.path)}
                sx={{
                  my: 2,
                  color: "#788292",
                  display: "block",
                  textTransform: "capitalize",
                  fontFamily: "Montserrat",
                  "&:hover": {
                    color: "#1877F2",
                    // fontWeight: "bold",
                    transform: "scale(1.1)",
                  },
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex", flexGrow: 0 }}>
            <IconButton
              size="medium"
              aria-label="search"
              fill="#788292"
              sx={{ mx: 1 }}
            >
              <SearchIcon />
            </IconButton>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src={IconAvatar}
                  sx={{ border: "1px solid #1877F2" }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  textTransform="capitalize"
                  fontFamily="Montserrat"
                  fontSize="12px"
                  fontWeight="bold"
                  letterSpacing="1px"
                >
                  {getUser.userName}
                </Typography>
                <Typography
                  textTransform="lowwercase"
                  fontSize="12px"
                  fontFamily="Montserrat"
                >
                  {getUser.email}
                </Typography>
              </MenuItem>
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    onClick={signOutAcc}
                    fontFamily="Montserrat"
                    fontSize="14px"
                    fontWeight="bold"
                    letterSpacing="1px"
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

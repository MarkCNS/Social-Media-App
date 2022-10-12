import {
  Avatar,
  Badge,
  Box,
  Chip,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import VideocamIcon from "@mui/icons-material/Videocam";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatInput from "../components/ChatInput";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import { useState } from "react";
import IconAvatar from "../assets/QmTndiF423kjdXsNzsip1QQkBQqDuzDhJnGuJAXtv4XXiZ-1.png";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";
import ViewCarouselRoundedIcon from "@mui/icons-material/ViewCarouselRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ChatDemo from "../components/ChatDemo";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useDispatch, useSelector } from "react-redux";
import { getContactHook } from "../redux/getContactMessenger";
import { styled } from "@mui/material/styles";
import NewChatMessage from "../components/NewChatMessage";

const drawerWidth = 250;

const Messenger = () => {
  //const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const contactList = useSelector((state) => state.getContact.getContactData);

  const onlineContacts = [
    {
      name: "Carol",
      variant: "dot",
      ava: "https://wallpapers.com/images/hd/aesthetic-anime-pfp-sporty-girl-h898bzji9b1ddchc.jpg",
      time: "10:09pm",
      pretxt: "Sorry! not this wee...",
      unread: 3,
    },
    {
      name: "Jane",
      variant: "dot",
      ava: "https://i.pinimg.com/236x/fc/0d/ba/fc0dbae23489804265f42b97d664be47.jpg",
      time: "4:30pm",
      pretxt: "'Sup bitch !??",
      unread: null,
    },
    {
      name: "Tyler",
      variant: "none",
      ava: "https://i.pinimg.com/originals/65/0b/90/650b90037271b09989780a4b4441883a.jpg",
      time: "4:00pm",
      pretxt: "Ok sure",
      unread: 2,
    },
    {
      name: "Sandy",
      variant: "none",
      ava: "https://i.pinimg.com/736x/47/b3/06/47b306ce32b3652b163dba3a674313e6.jpg",
      time: "1:00pm",
      pretxt: "Meeting postpone...",
      unread: 1,
    },
    {
      name: "Halsey",
      variant: "dot",
      ava: "https://images.unsplash.com/photo-1617244148472-3566e69ae9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Nnx8fGVufDB8fHx8&w=1000&q=80",
      time: "12:32pm",
      pretxt: "Let's give it a try",
      unread: null,
    },
    {
      name: "Ashley",
      variant: "none",
      ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNOOlK1npnK7bA4GzDgkQuBRVeqwDwia20Q&usqp=CAU",
      time: "9:00am",
      pretxt: "Yo! that's lit",
      unread: null,
    },
    {
      name: "Pierre Cox",
      variant: "dot",
      ava: "https://8outfits.com/previews/0/35/354/3540/354013.jpg",
      time: "10:09pm",
      pretxt: "Sorry! not this week...",
      unread: null,
    },
    {
      name: "Pierre Cox",
      variant: "dot",
      ava: "https://8outfits.com/previews/0/35/354/3540/354013.jpg",
      time: "10:09pm",
      pretxt: "Sorry! not this week...",
      unread: 1,
    },
    {
      name: "Pierre Cox",
      variant: "dot",
      ava: "https://8outfits.com/previews/0/35/354/3540/354013.jpg",
      time: "10:09pm",
      pretxt: "Sorry! not this week...",
    },
    {
      name: "Pierre Cox",
      variant: "dot",
      ava: "https://8outfits.com/previews/0/35/354/3540/354013.jpg",
      time: "10:09pm",
      pretxt: "Sorry! not this week...",
    },
  ];

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getChatMessage = (data) => {
    setChatMessage([...chatMessage, data]);
  };
  console.log("message ------> ", chatMessage);

  const drawer = (
    <>
      <Toolbar
        sx={{
          bgcolor: "#fff",
          boxShadow:
            "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
          display: "flex",
          justifyContent: "space-between",
          p: 0,
          "@media(min-width: 600px)": {
            px: 1,
          },
        }}
      >
        <IconButton>
          <QuestionAnswerIcon color="primary" fontSize="small" />
        </IconButton>
        <IconButton>
          <Groups2RoundedIcon color="primary" />
        </IconButton>
        <IconButton>
          <ViewCarouselRoundedIcon color="primary" />
        </IconButton>
        <IconButton>
          <CallRoundedIcon color="primary" fontSize="small" />
        </IconButton>
        <Avatar
          alt="User"
          src={IconAvatar}
          sx={{ cursor: "pointer", width: "30px", height: "30px" }}
        />
      </Toolbar>

      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            color: "#1877F2",
            fontWeight: "bold",
            fontFamily: "Montserrat",
            letterSpacing: "1px",
            // fontSize: "20px",
          }}
        >
          Chats
        </Typography>
        <IconButton sx={{ p: 0 }}>
          <AddCircleOutlineRoundedIcon color="primary" />
        </IconButton>
      </Box>
      <Box>
        <TextField
          id="search-user"
          placeholder="Search..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          variant="outlined"
          size="small"
          sx={{
            px: 1.5,
            ".MuiInputBase-root": {
              borderRadius: "50px",
              height: "32px",
              backgroundColor: "#fff",
              boxShadow:
                "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
            },
            ".MuiInputBase-input": { pl: 1 },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <IconButton sx={{ p: 0 }}>
                  <SearchRoundedIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Divider sx={{ mt: 1, borderColor: "rgb(175,175,175)" }} />
      <List
        sx={{
          p: "6px",
          overflowY: "scroll",
          height: "calc(100vh - 260px)",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {onlineContacts
          .filter((item) => {
            if (searchTerm == "") {
              return item;
            } else if (
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return item;
            }
          })
          .map((item, index) => (
            <>
              <Box
                onClick={() => {
                  setSelectedUser(item);
                  dispatch(getContactHook(""));
                }}
              >
                <ListItem
                  key={index}
                  disablePadding
                  sx={{
                    bgcolor: "#fff",
                    borderRadius: "10px",
                    mb: "10px",
                    boxShadow:
                      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        variant={item.variant}
                      >
                        <Avatar
                          alt={item.name}
                          src={item.ava}
                          sx={{ width: "35px", height: "35px" }}
                        />
                      </StyledBadge>
                    </ListItemIcon>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <ListItemText
                          primary={item.name}
                          sx={{
                            my: 0,
                            ".MuiTypography-root": {
                              fontFamily: "Montserrat",
                              fontWeight: "bold",
                              fontSize: "12px",
                            },
                          }}
                        />
                        <Typography
                          variant="caption"
                          sx={{ fontSize: "10px", fontFamily: "Montserrat" }}
                        >
                          {item.time}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Box sx={{ flexGrow: "1" }}>
                          <Typography variant="text2" fontSize="12px">
                            {item.pretxt}
                          </Typography>
                        </Box>
                        {item.unread > 0 ? (
                          <Badge
                            color="primary"
                            // {item.unread > 0 ? badgeContent=`${item.unread}` : null}
                            badgeContent={item.unread}
                            anchorOrigin={{
                              vertical: "middle",
                              horizontal: "right",
                            }}
                          >
                            <FiberManualRecordIcon
                              sx={{ color: "white", fontSize: "20px" }}
                            />
                          </Badge>
                        ) : null}
                      </Box>
                    </Box>
                  </ListItemButton>
                </ListItem>
              </Box>
            </>
          ))}
      </List>
    </>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - 318px)`, xs: `calc(100% - 68px)` },
            ml: { sm: `${drawerWidth}px` },
            top: "inherit",
            right: "inherit",
            flexDirection: "row",
            justifyContent: " space-between",
            // paddingRight: "70px",
            backgroundColor: "#fff",
            alignItems: "center",
          }}
        >
          <Toolbar sx={{ gap: "10px" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon color="primary" />
            </IconButton>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant={contactList.variant || selectedUser.variant}
            >
              {contactList || selectedUser ? (
                <Avatar
                  alt={contactList ? contactList.name : selectedUser.name}
                  src={contactList ? contactList.ava : selectedUser.ava}
                />
              ) : null}
            </StyledBadge>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ color: "black", fontFamily: "Montserrat" }}
            >
              {contactList ? contactList.name : selectedUser.name}
            </Typography>
          </Toolbar>
          <Box
            sx={{
              display: "flex",
              // gap: "10px",
            }}
          >
            <IconButton>
              <VideocamIcon />
            </IconButton>
            <IconButton>
              <PersonAddAltRoundedIcon />
            </IconButton>
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </Box>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            //container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },

              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              top: "inherit",
              left: "inherit",
              "& .MuiDrawer-paper": {
                bgcolor: "inherit",
                boxSizing: "border-box",
                width: drawerWidth,
                top: "inherit",
                left: "inherit",
                boxShadow:
                  "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // width: "calc(100% - 252px)",
            width: { sm: `calc(100% - 252px)`, xs: "100%" },
            // ml: { sm: `${drawerWidth}px` },
            height: "calc(100vh - 135px)",
            display: "flex",
            mt: { sm: "65px", xs: "57px" },
          }}
        >
          {/* <Box sx={{ overflowY: "scroll" }}> */}
          <Box
            component="main"
            sx={{
              height: "calc(100vh - 135px)",
              // flexGrow: 1,
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              overflowY: "scroll",
              // justifyContent: "flex-end",
              // height: "calc(100vh - 155px)",
            }}
          >
            {/* <ChatDemo /> */}
            {chatMessage.map((text, index) => (
              <Box key={index} px={2} sx={{ height: "fit-content", p: 0 }}>
                <NewChatMessage realmsg={text} />
              </Box>
            ))}
          </Box>

          {/* </Box> */}
          <Box sx={{ backgroundColor: "#fff" }}>
            <ChatInput message={getChatMessage} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Messenger;

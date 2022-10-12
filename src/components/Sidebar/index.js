import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import RecommendRoundedIcon from "@mui/icons-material/RecommendRounded";
import VideoChatRoundedIcon from "@mui/icons-material/VideoChatRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import IconButton from "@mui/material/IconButton";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const drawerWidth = "240";

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            position: "relative",
            height: "calc(100vh - 69px)",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List sx={{ display: "flex", flexDirection: "column", flexGrow: "1" }}>
          <ListItem
            disablePadding
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <ListItemButton sx={{ py: "15px" }}>
              <ListItemIcon sx={{ minWidth: 0, color: "#788292" }}>
                <EventRoundedIcon />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{ py: "15px" }}>
              <ListItemIcon sx={{ minWidth: 0, color: "#788292" }}>
                <BookmarkRoundedIcon />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{ py: "15px" }}>
              <ListItemIcon sx={{ minWidth: 0, color: "#788292" }}>
                <EventRoundedIcon />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{ py: "15px" }}>
              <ListItemIcon sx={{ minWidth: 0, color: "#788292" }}>
                <RecommendRoundedIcon />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{ py: "15px" }}>
              <ListItemIcon sx={{ minWidth: 0, color: "#788292" }}>
                <VideoChatRoundedIcon />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{ py: "15px" }}>
              <ListItemIcon sx={{ minWidth: 0, color: "#788292" }}>
                <HelpRoundedIcon />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{ py: "15px" }}>
              <ListItemIcon sx={{ minWidth: 0, color: "#788292" }}>
                <SettingsRoundedIcon />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{ py: "15px" }}>
              <ListItemIcon sx={{ minWidth: 0, color: "#788292" }}>
                <GridViewRoundedIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
        <IconButton
          variant="contained"
          size="large"
          aria-label="search"
          fill="#F0F7FF"
          sx={{ mx: 1, my: 1, color: "#1877F2", border: "1px solid #788292" }}
        >
          <AddRoundedIcon />
        </IconButton>
      </Drawer>
    </Box>
  );
}

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import {
  Badge,
  Box,
  Button,
  Divider,
  InputAdornment,
  Menu,
  MenuItem,
  Popover,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import SendIcon from "@mui/icons-material/Send";
import ReplayIcon from "@mui/icons-material/Replay";
import IconAvatar from "../../assets/QmTndiF423kjdXsNzsip1QQkBQqDuzDhJnGuJAXtv4XXiZ-1.png";
import {
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import NotificationsOffOutlinedIcon from "@mui/icons-material/NotificationsOffOutlined";

const ExpandMore = (props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
};

export default function PostCard({ src, username, timestamp, message, image }) {
  const dummyComment = [
    {
      comUser: "Kennedy",
      usercomment: "What an incredible view.",
      daystamp: "1d",
      comAva:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e5ff9cd-a751-4cd4-b9c5-00aa21620b7b/deu3q3u-6f1ca041-b5b7-46d7-ab06-f8547a7114cc.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVlNWZmOWNkLWE3NTEtNGNkNC1iOWM1LTAwYWEyMTYyMGI3YlwvZGV1M3EzdS02ZjFjYTA0MS1iNWI3LTQ2ZDctYWIwNi1mODU0N2E3MTE0Y2MuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.eVc40aeMVJw81r_zEtbc6BofvzWkBAP31N41tZtul7I",
    },
    {
      comUser: "Lydia",
      usercomment: "I wish i can visit it someday",
      daystamp: "1d",
      comAva:
        "https://wallpapers.com/images/high/demon-slayer-nezuko-anime-pfp-olz9u7714ze2zcp0.jpg",
    },
  ];
  const [count, setCount] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const [comment, setComment] = useState(dummyComment);
  const [inputComment, setInputComment] = useState("");

  const [anchorEl, setAnchorEl] = useState(null);

  const shareHandleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  //menu
  const menuOptions = [
    { title: "Pin post", icon: <PushPinOutlinedIcon /> },
    { title: "Save post", icon: <BookmarkAddOutlinedIcon /> },
    {
      title: "Who can comment on your post?",
      icon: <ChatBubbleOutlineOutlinedIcon />,
    },
    { title: "Edit post", icon: <EditOutlinedIcon /> },
    { title: "Edit post topics", icon: <TagOutlinedIcon /> },
    { title: "Delete post", icon: <DeleteForeverOutlinedIcon /> },
    {
      title: "Turn off notifications for this post",
      icon: <NotificationsOffOutlinedIcon />,
    },
  ];
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);
  const menuOpen = Boolean(menuAnchorEl);
  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  function addComment() {
    const newComment = {
      id: Math.floor(Math.random() * 100),
      comUser: `${username}`,
      usercomment: inputComment,
      daystamp: "just now",
      comAva: `${IconAvatar}`,
    };

    if (newComment.usercomment === "") {
      alert("Write a valid comment");
    } else {
      setComment([...comment, newComment]);
      setInputComment("");
    }
  }
  console.log("comments :", comment);
  console.log("comments counter :", comment.length);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const keyPressed = (e) => {
    if (e.keyCode == 13) {
      setInputComment(e.target.value);
      console.log("value :", e.target.value);
      addComment();
    }
  };

  //dialog
  const [diagopen, setDiagOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setDiagOpen(true);
    setScroll(scrollType);
  };

  const diagHandleClose = () => {
    setDiagOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (diagopen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [diagopen]);

  return (
    <>
      <Card sx={{ maxWidth: "fullWidth" }}>
        <CardHeader
          avatar={
            <Avatar src={src} aria-label="recipe">
              Avatar
            </Avatar>
          }
          action={
            <IconButton
              aria-label="settings"
              aria-controls={menuOpen ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={menuOpen ? "true" : undefined}
              onClick={handleMenuClick}
            >
              <MoreHorizRoundedIcon />
            </IconButton>
          }
          title={username}
          subheader={timestamp}
          titleTypographyProps={{
            fontFamily: "Montserrat",
            fontWeight: "bold",
            fontSize: "13px",
            textTransform: "capitalize",
          }}
          subheaderTypographyProps={{
            fontFamily: "Montserrat",
            fontSize: "13px",
          }}
          sx={{
            ".MuiCardHeader-content": {
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              flexGrow: 1,
            },
          }}
        />
        <Menu
          id="basic-menu"
          anchorEl={menuAnchorEl}
          open={menuOpen}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{ ".MuiMenu-list": { p: 1 } }}
        >
          {menuOptions.map((item, index) => (
            <>
              <MenuItem
                key={index}
                onClick={handleMenuClose}
                sx={{ py: "10px" }}
              >
                {item.icon}
                <Typography ml={2} onClick={handleMenuClose}>
                  {item.title}
                </Typography>
              </MenuItem>
            </>
          ))}
        </Menu>
        <CardContent sx={{ px: 2, py: 0 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              textAlign: "left",
              fontFamily: "Montserrat",
              fontWeight: "bold",
            }}
          >
            {message}
          </Typography>
        </CardContent>
        <Box sx={{ mx: 2, my: 1 }}>
          {image && (
            <CardMedia
              component="img"
              // height={props.height}
              image={image}
              // alt="postImage"
              sx={{ borderRadius: "8px" }}
            />
          )}
        </Box>

        <CardActions sx={{ justifyContent: "flex-end" }}>
          <IconButton
            aria-label="add to favorites"
            onClick={() => {
              setCount(count + 1);
            }}
            sx={{
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          >
            <Badge color="primary" badgeContent={count}>
              <ThumbUpRoundedIcon fontSize="small" />
            </Badge>
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          >
            <Badge badgeContent={comment.length} color="primary">
              <ChatRoundedIcon fontSize="small" />
            </Badge>
          </ExpandMore>

          <IconButton
            aria-label="share"
            // type="button"
            aria-describedby={id}
            onClick={shareHandleClick}
            sx={{
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          >
            <ShareIcon fontSize="small" />
          </IconButton>
        </CardActions>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Box sx={{ p: 1, bgcolor: "#f2f7f4", display: "flex", gap: "10px" }}>
            {/* <IconButton aria-label="facebook" size="small"> */}
            <FacebookShareButton
              url={"http://www.facebook.com"}
              quote={"CampersTribe - World is yours to explore"}
              hashtag={"#camperstribe"}
              aria-label="facebook"
            >
              <FacebookIcon size={30} round="true" />
            </FacebookShareButton>
            {/* </IconButton> */}

            <WhatsappShareButton
              url={"http://www.whatsapp.com"}
              quote={"CampersTribe - World is yours to explore"}
              hashtag="#camperstribe"
            >
              <WhatsappIcon size={30} round="true" />
            </WhatsappShareButton>

            <TelegramShareButton
              url={"http://www.telegram.com"}
              quote={"CampersTribe - World is yours to explore"}
              hashtag="#camperstribe"
            >
              <TelegramIcon size={30} round="true" />
            </TelegramShareButton>

            <TwitterShareButton
              url={"http://www.twitter.com"}
              quote={"CampersTribe - World is yours to explore"}
              hashtag="#camperstribe"
            >
              <TwitterIcon size={30} round="true" />
            </TwitterShareButton>

            <LinkedinShareButton
              url={"http://www.linkedin.com"}
              quote={"CampersTribe - World is yours to explore"}
              hashtag="#camperstribe"
            >
              <LinkedinIcon size={30} round="true" />
            </LinkedinShareButton>

            <FacebookMessengerShareButton
              url={"http://www.camperstribe.com"}
              quote={"CampersTribe - World is yours to explore"}
              hashtag="#camperstribe"
            >
              <FacebookMessengerIcon size={30} round="true" />
            </FacebookMessengerShareButton>
          </Box>
        </Popover>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent
            sx={{
              m: 2,
              bgcolor: "#f2f7f4",
              borderRadius: "5px",
              textAlign: "left",
              "&:last-child": {
                paddingBottom: 0,
              },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <Box
                onClick={handleClickOpen("paper")}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  // ml: 2,
                  gap: "10px",
                  cursor: "pointer",
                }}
              >
                <ReplayIcon fontSize="12px" />
                <Typography
                  variant="caption"
                  sx={{
                    color: "#808080",
                    fontWeight: "bold",
                    lineHeight: 0,
                  }}
                  // onClick={handleOpen}
                >
                  Load previous comments
                </Typography>
              </Box>
              <Dialog
                open={diagopen}
                onClose={diagHandleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
              >
                <DialogTitle id="scroll-dialog-title">Comments</DialogTitle>
                <DialogContent
                  dividers={scroll === "paper"}
                  sx={{ p: 0, width: "600px" }}
                >
                  {/* <DialogContentText
                    id="scroll-dialog-description"
                    ref={descriptionElementRef}
                    tabIndex={-1}
                  > */}
                  <Box
                    sx={{
                      bgcolor: "#f2f7f4",
                      borderRadius: "5px",
                      textAlign: "left",
                      "&:last-child": {
                        paddingBottom: 0,
                      },
                    }}
                  >
                    {comment.map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "10px",
                          px: 3,
                          py: 1.8,
                        }}
                      >
                        <Avatar src={item.comAva} />
                        <Box sx={{ flexGrow: "1" }}>
                          <Box
                            sx={{
                              bgcolor: "white",
                              p: 1,
                              borderRadius: "10px",
                              // flexGrow: "1",
                            }}
                          >
                            <Typography
                              variant="body2"
                              ml={1}
                              sx={{
                                fontWeight: "bold",
                                fontFamily: "Montserrat",
                                color: "#1877F2",
                              }}
                            >
                              {item.comUser}
                            </Typography>
                            <Typography
                              variant="body2"
                              ml={1}
                              fontFamily="Montserrat"
                              fontSize="13px"
                            >
                              {item.usercomment}
                            </Typography>
                          </Box>
                          <Box sx={{ display: "flex", px: 2, gap: "10px" }}>
                            <Typography
                              variant="caption"
                              sx={{ color: "#1877F2", cursor: "pointer" }}
                            >
                              Like
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{ color: "#1877F2", cursor: "pointer" }}
                            >
                              Reply
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{ color: "#808080" }}
                            >
                              {item.daystamp}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                  {/* </DialogContentText> */}
                </DialogContent>
                <DialogActions>
                  <Button onClick={diagHandleClose}>Back</Button>
                </DialogActions>
              </Dialog>
              {comment.slice(-2).map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                  }}
                >
                  <Avatar src={item.comAva} />
                  <Box sx={{ flexGrow: "1" }}>
                    <Box
                      sx={{
                        bgcolor: "white",
                        p: 1,
                        borderRadius: "10px",
                        // flexGrow: "1",
                      }}
                    >
                      <Typography
                        variant="body2"
                        ml={1}
                        sx={{
                          fontWeight: "bold",
                          fontFamily: "Montserrat",
                          color: "#1877F2",
                        }}
                      >
                        {item.comUser}
                      </Typography>
                      <Typography
                        variant="body2"
                        ml={1}
                        fontFamily="Montserrat"
                        fontSize="13px"
                      >
                        {item.usercomment}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", px: 2, gap: "10px" }}>
                      <Typography
                        variant="caption"
                        sx={{ color: "#1877F2", cursor: "pointer" }}
                      >
                        Like
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "#1877F2", cursor: "pointer" }}
                      >
                        Reply
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#808080" }}>
                        {item.daystamp}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                py: 2,
                // alignItems: "center",
                // px: 1,
              }}
            >
              <Avatar src={IconAvatar} sx={{ width: "33px", height: "33px" }} />
              <TextField
                id="outlined-basic"
                placeholder="Write a comment..."
                variant="outlined"
                onChange={(e) => setInputComment(e.target.value)}
                onKeyDown={keyPressed}
                value={inputComment}
                size="small"
                sx={{
                  width: {
                    sm: `calc(100% - 500px)`,
                  },
                  ".MuiInputBase-root": {
                    height: "35px",
                    borderRadius: "50px",
                    backgroundColor: "white",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                  },
                  // ".MuiInputBase-input": { pl: 1, ml: "1" },
                  flexGrow: "1",
                }}
                InputProps={{
                  // startAdornment: (
                  //   <InputAdornment>
                  //     <SentimentSatisfiedOutlinedIcon />
                  //   </InputAdornment>
                  // ),
                  endAdornment: (
                    <InputAdornment position="end" sx={{ gap: "10px" }}>
                      <CameraAltOutlinedIcon sx={{ cursor: "pointer" }} />
                      <GifBoxOutlinedIcon sx={{ cursor: "pointer" }} />
                      <SentimentSatisfiedOutlinedIcon
                        sx={{ cursor: "pointer" }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                onClick={addComment}
                sx={{
                  bgcolor: "#1877F2",
                  borderRadius: "50px",
                  minWidth: "30px",
                  "&:hover": {
                    bgcolor: "green",
                  },
                }}
              >
                <SendIcon
                  fontSize="small"
                  sx={{ color: "white", width: "20px", height: "18px" }}
                />
              </Button>
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}

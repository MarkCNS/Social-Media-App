import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  InputAdornment,
  Popover,
  Slide,
  TextField,
  Typography,
} from "@mui/material";
import React, { forwardRef, useState } from "react";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import IconAvatar1 from "../../assets/314258.jpg";
import IconAvatar2 from "../../assets/QmTndiF423kjdXsNzsip1QQkBQqDuzDhJnGuJAXtv4XXiZ-1.png";
import { styled } from "@mui/material/styles";
import QuickreplyIcon from "@mui/icons-material/Quickreply";
import SendIcon from "@mui/icons-material/Send";
import CallIcon from "@mui/icons-material/Call";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import LaunchIcon from "@mui/icons-material/Launch";
import DuoIcon from "@mui/icons-material/Duo";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getContactHook } from "../../redux/getContactMessenger";

const LeftColumn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedContact, setSelectedContact] = useState({});
  const onlineContacts = [
    {
      name: "Cierra Vega",
      variant: "dot",
      ava: "https://i.pinimg.com/736x/a6/3b/09/a63b097d68466658bb3d3f3b5d9f96a1.jpg",
    },
    {
      name: "Alden Cantrell",
      variant: "dot",
      ava: "https://i.pinimg.com/736x/75/aa/63/75aa63b92f5551431c2cfbd260b84314.jpg",
    },
    {
      name: "Kierra Gentry",
      variant: "none",
      ava: "https://i.pinimg.com/originals/65/0b/90/650b90037271b09989780a4b4441883a.jpg",
    },
    {
      name: "Bradyn Kramer",
      variant: "none",
      ava: "https://i.pinimg.com/736x/47/b3/06/47b306ce32b3652b163dba3a674313e6.jpg",
    },
    {
      name: "Thomas Crane",
      variant: "dot",
      ava: "https://images.unsplash.com/photo-1617244148472-3566e69ae9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Nnx8fGVufDB8fHx8&w=1000&q=80",
    },
    {
      name: "Miranda Shaffer",
      variant: "none",
      ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNOOlK1npnK7bA4GzDgkQuBRVeqwDwia20Q&usqp=CAU",
    },
    {
      name: "Pierre Cox",
      variant: "dot",
      ava: "https://8outfits.com/previews/0/35/354/3540/354013.jpg",
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

  //smallbubble
  // const Transition = forwardRef(function Transition(props, ref) {
  //   return <Slide direction="right" ref={ref} {...props} />;
  // });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //popoverHover
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const popOpen = Boolean(anchorEl);

  return (
    <>
      <Box
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "#626262",
          backgroundColor: "#fff",
          height: "auto",
          boxShadow:
            "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
          borderRadius: "5px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            alignItems: "center",
          }}
        >
          <AvatarGroup max={3} sx={{ justifyContent: "center" }}>
            <Avatar alt="Remy Sharp" src={IconAvatar1} />
            <Avatar alt="Travis Howard" src={IconAvatar2} />
          </AvatarGroup>
          <Typography
            variant="h7"
            gutterBottom
            sx={{
              letterSpacing: "0.05em",
              color: "#203758",
              fontWeight: "bold",
              m: 0,
              mt: 1,
            }}
          >
            Jessica’s Wedding Plan
          </Typography>
          <Typography
            variant="caption"
            gutterBottom
            sx={{
              color: "#788292",
              letterSpacing: "0.05em",
            }}
          >
            Active Now
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              height: "auto",
              justifyContent: "center",
              gap: "0.8em",
              mt: 2,
            }}
          >
            <Button
              size="small"
              variant="contained"
              startIcon={<CallRoundedIcon />}
              sx={{
                backgroundColor: "#F0F8FF",
                color: "#1877F2",
                fontWeight: "bold",
                fontSize: "11px",
                textTransform: "capitalize",
                fontFamily: "Montserrat",
                "&:hover": {
                  bgcolor: "#1877F2",
                  color: "#fff",
                },
              }}
            >
              Call Group
            </Button>
            <Button
              size="small"
              variant="contained"
              startIcon={<VideocamRoundedIcon />}
              sx={{
                backgroundColor: "#F0F8FF",
                color: "#1877F2",
                fontWeight: "bold",
                fontSize: "11px",
                textTransform: "capitalize",
                fontFamily: "Montserrat",
                "&:hover": {
                  bgcolor: "#1877F2",
                  color: "#fff",
                },
              }}
            >
              Video Call
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          // color: "#626262",
          // backgroundColor: "#fff",
          height: "auto",
          borderRadius: "5px",
          mt: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              letterSpacing: "0.05em",
              color: "#203758",
              m: 0,
              fontSize: "16px",
              fontWeight: "bold",
              fontFamily: "Montserrat",
            }}
          >
            Online Contacts
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexGrow: "1",
              justifyContent: "flex-start",
              ml: "2px",
            }}
          >
            <CircleRoundedIcon
              fontSize="small"
              color="success"
              sx={{
                width: "0.5em",
                height: "0.5em",
                padding: "0.1em",
              }}
            />
          </Box>

          <MoreHorizRoundedIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "#788292",

            backgroundColor: "#fff",
            height: "auto",
            boxShadow:
              "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
            borderRadius: "5px",
            mt: 1,
            cursor: "pointer",
          }}
        >
          {onlineContacts.map((item, index) => (
            <>
              <Box
                // onClick={handleClickOpen}
                onClick={() => {
                  handleClickOpen();
                  dispatch(getContactHook(item));
                  setSelectedContact(item);
                }}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px",
                  mx: 1,
                  // gap: "20px",
                  alignItems: "center",
                  fontWeight: "bold",
                }}
              >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant={item.variant}
                >
                  <Avatar
                    alt="Online pfp"
                    src={item.ava}
                    sx={{ width: 35, height: 35 }}
                  />
                </StyledBadge>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    flexGrow: "1",
                    textAlign: "left",
                    ml: 2,
                  }}
                >
                  {item.name}
                </Typography>
                {/* <IconButton>
                  <QuickreplyIcon
                    onClick={handleClickOpen}
                    fontSize="small"
                    sx={{ color: "rgba(0, 0, 0, 0.54)" }}
                  />
                </IconButton> */}
              </Box>
              <Divider />
            </>
          ))}

          <Dialog
            open={open}
            onClose={handleClose}
            sx={{
              ".MuiDialog-paper": { width: "500px", borderRadius: "10px" },
            }}
          >
            <DialogTitle
              display="flex"
              alignItems="center"
              sx={{ px: 2, py: 1 }}
            >
              <Avatar src={selectedContact.ava} />
              <Box display="flex" flexDirection="column" flexGrow="1" ml={2}>
                <Typography sx={{ color: "#1877F2", fontFamily: "Montserrat" }}>
                  {selectedContact.name}
                </Typography>

                {selectedContact.variant === "dot" ? (
                  <Typography variant="caption" fontFamily="Montserrat">
                    Active Now
                  </Typography>
                ) : (
                  <Typography variant="caption" fontFamily="Montserrat">
                    A while ago
                  </Typography>
                )}
              </Box>
              <IconButton>
                <CallIcon sx={{ color: "#1877F2" }} />
              </IconButton>
              <IconButton>
                <DuoIcon sx={{ color: "#1877F2" }} />
              </IconButton>
              <IconButton>
                <LaunchIcon
                  aria-owns={popOpen ? "mouse-over-popover" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                  onClick={() => navigate("/messenger")}
                  sx={{ color: "#1877F2" }}
                />
              </IconButton>
            </DialogTitle>
            <DialogContent
              sx={{
                bgcolor: "#f2f7f4",
                borderRadius: "5px",
                // width: "600px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  mt: 2,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Montserrat",
                    color: "#808080",
                    textAlign: "center",
                  }}
                >
                  6: 40am
                </Typography>
                <Box
                  sx={{
                    bgcolor: "white",
                    p: 1,
                    borderRadius: "10px",
                    width: "fit-content",
                  }}
                >
                  <Typography
                    variant="body2"
                    ml={1}
                    fontFamily="Montserrat"
                    fontSize="13px"
                  >
                    Hi! How are you?
                  </Typography>
                </Box>
              </Box>
            </DialogContent>

            <DialogActions
              sx={{
                bgcolor: "#f2f7f4",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "15px",
                  width: "100%",
                  py: 1,
                  px: 2,
                }}
              >
                <TextField
                  id="outlined-basic"
                  placeholder="Drop a quick message..."
                  variant="outlined"
                  // onChange={(e) => setInputComment(e.target.value)}
                  // onKeyDown={keyPressed}
                  // value={inputComment}
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
                      <InputAdornment position="end">
                        <IconButton onClick={handleClose} sx={{ p: 0 }}>
                          <SendIcon sx={{ color: "#1877F2" }} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              {/* <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              />
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Subscribe</Button> */}
            </DialogActions>
          </Dialog>
          <Popover
            id="mouse-over-popover"
            sx={{
              pointerEvents: "none",
            }}
            open={popOpen}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Box sx={{ px: 2, py: 0, bgcolor: "#f2f7f4" }}>
              <Typography sx={{ p: 1 }}>Open in messenger</Typography>
            </Box>
          </Popover>
        </Box>
      </Box>
      {/* <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog> */}
    </>
  );
};

export default LeftColumn;

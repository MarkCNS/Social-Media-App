import {
  Alert,
  Avatar,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Snackbar,
  TextField,
} from "@mui/material";

import VideocamIcon from "@mui/icons-material/Videocam";
import CompareRoundedIcon from "@mui/icons-material/CompareRounded";
import SentimentSatisfiedAltRoundedIcon from "@mui/icons-material/SentimentSatisfiedAltRounded";
import SendIcon from "@mui/icons-material/Send";
import { useUploadPost } from "../../hooks/useUploadPost";
import IconAvatar from "../../assets/QmTndiF423kjdXsNzsip1QQkBQqDuzDhJnGuJAXtv4XXiZ-1.png";
import React, { useState } from "react";
import LocalStorageService from "../../util/localStorageService";
import moment from "moment";
import { getAuth } from "firebase/auth";
import { useGetPosts } from "../../hooks/useGetPost";

const Input = (props) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [input, setInput] = useState(props.dummy);
  const {
    uploadPost,
    isLoading,
    isSuccess,
    openSnackbar,
    snackbar,
    setOpenSnackbar,
  } = useUploadPost();
  const { getPosts } = useGetPosts();
  const auth = getAuth();
  const currentUser = LocalStorageService.getCurrentUser();

  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
    setOpen(false);
  };

  // props.getValue(input);

  function addPost() {
    {
      message === ""
        ? alert("Post cannot be empty, DUMBASS!!!")
        : uploadPost({
            uploadFile: image,
            uploadText: message,
            user: currentUser,
            createdAt: moment().format("llll"),
            src: `${IconAvatar}`,
          });
    }
    // const newPost = {
    //   id: Math.floor(Math.random() * 100),
    //   user: currentUser,
    //   src: `${IconAvatar}`,
    //   // username: "Kane Salam",
    //   createdAt: moment().format(),
    //   // timestamp: "Just now",
    //   message: message,
    //   image: image,
    // };

    // {
    //   newPost.message === ""
    //     ? alert("Enter a valid post")
    //     : setInput([newPost, ...input]);
    // }
    setMessage("");
    setImage("");
    getPosts();
  }

  return (
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
      <Box sx={{ px: 2, py: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={IconAvatar}
            sx={{ width: "35px", height: "35px" }}
          />

          <TextField
            size="small"
            placeholder="What's on your mind, Kane?"
            sx={{
              flexGrow: "1",

              ".MuiInputBase-root": {
                borderRadius: "25px",
                fontFamily: "Montserrat",
                fontSize: "13px",
              },
            }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            {...props}
          />
          <TextField
            size="small"
            placeholder="Image URL (optional)"
            sx={{
              ".MuiInputBase-root": {
                borderRadius: "25px",
                fontFamily: "Montserrat",
                fontSize: "13px",
              },
            }}
            value={image}
            onChange={(e) => setImage(e.target.value)}
            {...props}
          />
          {isLoading ? (
            <CircularProgress
              color="primary"
              size="1.8rem"
              sx={{ p: "3.5px" }}
            />
          ) : (
            <Button
              onClick={addPost}
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
                sx={{ color: "white", width: "20px", height: "24px" }}
              />
            </Button>
          )}
        </Box>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleSnackClose}
          // severity={snackbar?.severity}
          // message={snackbar?.message}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleSnackClose}
            severity={snackbar?.severity}
            sx={{ width: "100%" }}
          >
            {snackbar?.message}
          </Alert>
        </Snackbar>
        <Box display="flex" justifyContent="space-evenly" mt={2}>
          <Button
            onClick={handleOpen}
            startIcon={<VideocamIcon color="error" />}
            sx={{
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            Live Video
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {`"facebook.com" Would Like to Access the Camera`}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                This let's you do things like take and share photos, record
                videos, and use other special features and effects.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={handleClose} autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
          <Button
            component="label"
            startIcon={<CompareRoundedIcon color="success" />}
            sx={{
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            Photos/Videos
            <input
              type="file"
              accept="image/*"
              // value={file}
              onChange={(e) => setImage(e.target.files[0])}
              hidden
            />
          </Button>

          <Button
            startIcon={
              <SentimentSatisfiedAltRoundedIcon sx={{ color: "orange" }} />
            }
            sx={{
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            Feeling/Acitvity
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Input;

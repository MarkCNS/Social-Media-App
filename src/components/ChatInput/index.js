import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CollectionsIcon from "@mui/icons-material/Collections";
import SentimentSatisfiedRoundedIcon from "@mui/icons-material/SentimentSatisfiedRounded";

export default function ChatInput(props) {
  const [text, setText] = useState("");

  const keyPressed = (e) => {
    if (e.keyCode == 13) {
      setText(e.target.value);
      console.log("text :", e.target.value);
      getData();
    }
  };

  function getData() {
    props.message(text);
    setText("");
  }

  return (
    <>
      <Container
        sx={{
          display: "flex",
          gap: "15px",
          py: 2,
          px: 1,
        }}
      >
        <>
          <TextField
            id="outlined-basic"
            placeholder="Type a message..."
            variant="outlined"
            size="small"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={keyPressed}
            sx={{
              width: {
                sm: `calc(100% - 500px)`,
              },
              ".MuiInputBase-root": {
                borderRadius: "50px",
                backgroundColor: "#f2f7f4",
              },
              ".MuiInputBase-input": { pl: 1 },
              flexGrow: "1",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <IconButton sx={{ px: 0 }}>
                    <SentimentSatisfiedRoundedIcon />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" sx={{ gap: "10px" }}>
                  <IconButton sx={{ px: 0 }}>
                    <AttachFileIcon />
                  </IconButton>
                  <IconButton sx={{ px: 0 }}>
                    <CollectionsIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            onClick={getData}
            sx={{
              bgcolor: "#1877F2",
              borderRadius: "50px",
              minWidth: "40px",
              "&:hover": {
                bgcolor: "green",
              },
            }}
          >
            <SendIcon fontSize="small" sx={{ color: "white" }} />
          </Button>
        </>
      </Container>
    </>
  );
}

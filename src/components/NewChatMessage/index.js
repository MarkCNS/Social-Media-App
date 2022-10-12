import React from "react";
import ChatBubble from "../../util/chatbubble";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { Box } from "@mui/material";

const NewChatMessage = (props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
      <ChatBubble
        alignSelf="flex-end"
        bkg="linear-gradient(111.3deg, rgb(74, 105, 187) 9.6%, rgb(205, 77, 204) 93.6%)"
        clr="white"
        adjt="flex-end"
        txtmsg={props.realmsg}
        dlvr="10:09pm"
      >
        <DoneAllIcon color="success" fontSize="small" />
      </ChatBubble>
    </Box>
  );
};

export default NewChatMessage;

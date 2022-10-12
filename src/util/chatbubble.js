import { Box, Typography } from "@mui/material";
import React from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const ChatBubble = (props) => {
  return (
    <Box sx={{ display: "flex", alignSelf: `${props.alignSelf}` }}>
      <Box
        sx={{
          width: "fit-content",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          bgcolor={props.bgc}
          sx={{
            width: "fit-content",
            borderRadius: "10px",
            py: 1,
            px: 2,
            background: `${props.bkg}`,
          }}
        >
          <Typography color={props.clr} fontFamily="Montserrat" fontSize="14px">
            {props.txtmsg}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: `${props.adjt}` }}>
          <Typography variant="caption">{props.dlvr}</Typography>
          {props.children}
        </Box>
      </Box>
    </Box>
  );
};

export default ChatBubble;

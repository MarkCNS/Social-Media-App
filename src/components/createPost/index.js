import React from "react";
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
import { Badge } from "@mui/material";

const dynamicPost = () => {
  const [count, setCount] = React.useState(1);

  return (
    <Card sx={{ maxWidth: "fullWidth" }}>
      <CardHeader
        avatar={
          <Avatar src={avatar} aria-label="recipe">
            Avatar
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreHorizRoundedIcon />
          </IconButton>
        }
        title={username}
        subheader={props.timestamp}
        sx={{
          ".MuiCardHeader-content": {
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            flexGrow: 1,
            fontFamily: "Montserrat",
          },
        }}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textAlign: "left",
            fontFamily: "Montserrat",
            fontWeight: "bold",
          }}
        >
          {props.message}
        </Typography>
      </CardContent>
      <CardMedia
        component={props.component}
        // height={props.height}
        image={props.image}
        alt={props.alt}
      />
      <CardActions disableSpacing sx={{ justifyContent: "flex-end" }}>
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
        <IconButton
          aria-label="add to favorites"
          sx={{
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
        >
          <Badge badgeContent={4} color="primary">
            <ChatRoundedIcon fontSize="small" />
          </Badge>
        </IconButton>
        <IconButton
          aria-label="share"
          sx={{
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
        >
          <ShareIcon fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default dynamicPost;

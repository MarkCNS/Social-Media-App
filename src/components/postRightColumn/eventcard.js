import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  AvatarGroup,
  CardActionArea,
  Box,
  Button,
} from "@mui/material";
import FastfoodRoundedIcon from "@mui/icons-material/FastfoodRounded";

export default function ActionAreaCard2(props) {
  return (
    <Card
      sx={{
        maxWidth: 200,
        // maxHeight: 200,
        // width: "190px",
        // height: "195px",
        backgroundImage: `url(${props.backgroundImageEvent})`,
        // https://source.unsplash.com/random?event
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        display: "flex",
        justifyContent: "center",
        // borderRadius: "10px",
        "&:hover": {
          // color: "#1877F2",
          // fontWeight: "bold",
          transform: "scale(1.1)",
        },
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          // height: "100%",
        }}
      >
        <Box
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "left",
            // padding: "20px",
            // boxShadow: `10px 10px 10px rgba(30,30,30,0.5)`,
            // mb: 2,
            // gap: 1,
            color: "white",
            height: "100%",
          }}
        >
          <Box
            sx={{
              padding: "20px",
              textAlign: "left",
              gap: "10px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              flexGrow: "1",
              justifyContent: "space-between",

              // mb: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                alignItems: "center",
                fontFamily: "Montserrat",
              }}
            >
              {/* <FastfoodRoundedIcon fontSize="12px" /> */}
              {props.eventlogo}
              <Typography variant="header" fontSize="16px">
                {props.eventhead}
              </Typography>
            </Box>
            <Typography fontSize="14px" sx={{ fontFamily: "Montserrat" }}>
              {props.eventtext}
              {/* Start watching with friends and family */}
            </Typography>
            <Button
              variant="contained"
              sx={{
                width: "60%",
                backgroundColor: "#F0F8FF",
                color: "#1877F2",
                fontWeight: "bold",
                fontSize: "11px",
                textTransform: "capitalize",
                fontFamily: "Montserrat",
                padding: "4px 0px",
                "&:hover": {
                  bgcolor: "#1877F2",
                  color: "#fff",
                },
              }}
            >
              {props.eventbutton}
            </Button>
          </Box>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#fff",
              padding: "10px",
              gap: "10px",
              "&:last-child": {
                paddingBottom: "10px",
              },
            }}
          >
            <AvatarGroup
              max={3}
              sx={{ justifyContent: "center", width: "100%" }}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://thebeforenews.com/wp-content/uploads/2022/08/Funny-PFP-1.jpg"
                sx={{ border: "2px solid #1877F2", width: 28, height: 28 }}
              />
              <Avatar
                alt="Remy"
                src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557453152.4514_U2asE8_n.jpg"
                sx={{ border: "2px solid #1877F2", width: 28, height: 28 }}
              />
              <Avatar
                alt="Remy S"
                src="https://whatifgaming.com/wp-content/uploads/2021/10/336c914d87fa4f12f61959589acf6f6c.jpg"
                sx={{ border: "2px solid #1877F2", width: 28, height: 28 }}
              />
            </AvatarGroup>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                color: "black",
                width: "100%",
                textAlign: "left",
              }}
            >
              {props.children}
            </Box>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
}

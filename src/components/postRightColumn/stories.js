import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, Box, CardActionArea } from "@mui/material";

export default function ActionAreaCard1(props) {
  return (
    <Card
      sx={{
        // maxWidth: 120,
        // maxHeight: 180,
        width: "125px",
        height: "195px",
        backgroundImage: `url(${props.backgroundImage})`,
        // backgroundImage: `url("https://source.unsplash.com/random?beautiful")`,
        // filter: "brightness(50%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",

        display: "flex",
        justifyContent: "center",
        "&:hover": {
          // color: "#1877F2",
          // fontWeight: "bold",
          transform: "scale(1.1)",
        },
        // filter: `brightness(80%)`,
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            // boxShadow: `10px 10px 10px rgba(30,30,30,0.5)`,
            mb: 2,
            gap: 1,
          }}
        >
          <Avatar
            alt="Stories Avatar"
            src={props.src}
            // src="https://source.unsplash.com/random?face"
            sx={{ border: "2px solid #1877F2" }}
          />
          <Typography
            color="white"
            fontFamily="Montserrat"
            //         sx={{
            //           textShadow: ` 0 0 7px #fff,
            // 0 0 50px #fff,
            // 0 0 50px #fff,
            // 0 0 60px #0fa,
            // 0 0 100px #0fa,
            // 0 0 60px #0fa,
            // 0 0 80px #0fa,
            // 0 0 100px #0fa;`,
            //         }}
          >
            {props.children}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}

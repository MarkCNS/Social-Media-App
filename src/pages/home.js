import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Link,
  Paper,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import ActionAreaCard1 from "../components/postRightColumn/stories";
import ActionAreaCard2 from "../components/postRightColumn/eventcard";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import FastfoodRoundedIcon from "@mui/icons-material/FastfoodRounded";
import InsertInvitationRoundedIcon from "@mui/icons-material/InsertInvitationRounded";
import Input from "../components/Input";
import LeftColumn from "../components/postLeftColumn";
import { useGetPosts } from "../hooks/useGetPost";

const Homepage = () => {
  // const dummyPosts = [
  //   {
  //     src: "https://i.pinimg.com/474x/bf/d3/20/bfd3202d81bf94f1d06bcb286cc6226d--th-century-trendy.jpg",
  //     username: "Thomas Ben",
  //     timestamp: "45 mins ago",
  //     message: `Being a father is sometimes my hardest but always my most rewarding job.
  //       Happy Father's Day to all the dads out there`,
  //   },
  //   {
  //     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNOOlK1npnK7bA4GzDgkQuBRVeqwDwia20Q&usqp=CAU",
  //     username: "Miranda Shaffer",
  //     timestamp: "June 21, 12:45 pm",
  //     // component: "img",
  //     image:
  //       "https://eatdrinkflash.co.uk/wp-content/uploads/2021/06/DSC00807-scaled.jpg",

  //     message:
  //       "Having fun while cooking and eating variety of foods with @Sarah",
  //   },
  // ];

  // const [input, setInput] = useState(dummyPosts);
  const { getPosts, posts, isLoading } = useGetPosts();

  useEffect(() => {
    getPosts();
  }, []);
  console.log(posts, "posts");

  // const getData = (data) => {
  //   setInput(data);
  // };

  // console.log(input);

  return (
    <>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ py: 2, px: 3, overflow: "hiddden" }}
      >
        <Grid
          item
          sx={{
            width: "fit-content",
            overflow: "hiddden",
            height: "100%",
          }}
        >
          <LeftColumn />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            overflowY: "scroll",
            height: "calc(100vh - 95px)",
            position: "relative",

            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {/* <Input dummy={dummyPosts} getValue={getData} /> */}
          <Input />
          {isLoading && (
            <>
              <Box sx={{ mt: 2 }}>
                {/* <CircularProgress color="primary" /> */}
                <Skeleton variant="rounded" height={150} />
              </Box>
              <Box sx={{ mt: 2 }}>
                {/* <CircularProgress color="primary" /> */}
                <Skeleton variant="rounded" height={150} />
              </Box>
              <Box sx={{ mt: 2 }}>
                {/* <CircularProgress color="primary" /> */}
                <Skeleton variant="rounded" height={150} />
              </Box>
            </>
          )}
          {posts.map((item, index) => (
            <Box sx={{ mt: 2 }}>
              <PostCard
                key={index}
                src={item.src}
                username={item.user.userName}
                timestamp={item.createdAt}
                // component={post.component}
                image={item.uploadFile}
                message={item.uploadText}
                // upload={post.upload}
              />
            </Box>
          ))}
        </Grid>
        <Grid
          item
          xs
          sx={{ overflow: "hiddden", height: "100%", maxWidth: "fit-content" }}
        >
          <Box
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              // color: "#626262",
              // backgroundColor: "#fff",
              height: "auto",
              borderRadius: "5px",
              maxWidth: "fit-content",
              // mt: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
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
                Stories
              </Typography>

              <MoreHorizRoundedIcon />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                mt: 1,
                borderRadius: "8px",
              }}
            >
              <ActionAreaCard1
                backgroundImage="https://i.guim.co.uk/img/media/c63dddb413272fb6e8c308f0298c6333b3e2084f/0_139_4256_2554/master/4256.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=fed576179161a4ae8bf4dbe09ee40dc5"
                src="https://i.pinimg.com/originals/65/0b/90/650b90037271b09989780a4b4441883a.jpg"
              >
                Kierra Gentry
              </ActionAreaCard1>
              <ActionAreaCard1
                backgroundImage="https://modernpaintbynumbers.com/wp-content/uploads/2020/10/aesthetic-astronaut-in-sunflower-field-paint-by-numbers-510x639.jpg"
                src="https://i.pinimg.com/736x/47/b3/06/47b306ce32b3652b163dba3a674313e6.jpg"
              >
                Bradyn Kramer
              </ActionAreaCard1>
              <ActionAreaCard1
                backgroundImage="https://i.pinimg.com/originals/37/84/29/378429560d2290a8f025111fca96ea18.jpg"
                src="https://8outfits.com/previews/0/35/354/3540/354013.jpg"
              >
                Pierre Cox
              </ActionAreaCard1>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "15px",
                borderRadius: "8px",
                mt: 3.5,
              }}
            >
              <ActionAreaCard2
                backgroundImageEvent="https://loeildelaphotographie.com/wp-content/uploads/2021/09/2020-0420-lego-fun-ds20-2020-04-23-0094-final-composite-16x9-v5.jpg"
                eventlogo={<FastfoodRoundedIcon />}
                eventhead="Pop Corn"
                eventtext="Start watching with friends and family"
                eventbutton="Watch Now"
              >
                <Typography sx={{ fontSize: "10px", fontFamily: "Montserrat" }}>
                  35 friends
                </Typography>
                <Typography sx={{ fontSize: "10px", fontFamily: "Montserrat" }}>
                  watching now
                </Typography>
              </ActionAreaCard2>
              <ActionAreaCard2
                backgroundImageEvent="https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0JTIwZ2FsbGVyeXxlbnwwfHwwfHw%3D&w=1000&q=80"
                eventlogo={<InsertInvitationRoundedIcon />}
                eventhead="Events"
                eventtext="Join events near you for free"
                eventbutton="Explore All"
              >
                <Typography sx={{ fontSize: "10px", fontFamily: "Montserrat" }}>
                  14 friends
                </Typography>
                <Typography sx={{ fontSize: "10px", fontFamily: "Montserrat" }}>
                  going
                </Typography>
              </ActionAreaCard2>
            </Box>
            <Box
              container
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "auto",
                borderRadius: "5px",
                mt: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
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
                  Who to follow
                </Typography>

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
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    padding: "10px",

                    alignItems: "center",
                    fontWeight: "bold",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://i.pinimg.com/474x/bf/d3/20/bfd3202d81bf94f1d06bcb286cc6226d--th-century-trendy.jpg"
                    sx={{ width: 28, height: 28 }}
                  />
                  <Typography
                    sx={{
                      ml: 2,
                      fontSize: "14px",
                      fontFamily: "Montserrat",
                    }}
                  >
                    Thomas Ben
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexGrow: 1,
                      justifyContent: "flex-start",
                    }}
                  >
                    <VerifiedRoundedIcon
                      fontSize="large"
                      sx={{
                        width: "0.5em",
                        height: "0.5em",
                        padding: "0.1em",
                      }}
                    />
                  </Box>
                  <Button
                    size="small"
                    variant="contained"
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
                    Follow
                  </Button>
                </Box>
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    padding: "10px",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://wallpaper.dog/large/10741913.jpg"
                    sx={{ width: 28, height: 28 }}
                  />
                  <Typography
                    sx={{
                      ml: 2,
                      fontSize: "14px",
                      fontFamily: "Montserrat",
                    }}
                  >
                    Sarah Pierre
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexGrow: 1,
                      justifyContent: "flex-start",
                    }}
                  >
                    <VerifiedRoundedIcon
                      fontSize="large"
                      sx={{
                        width: "0.5em",
                        height: "0.5em",
                        padding: "0.1em",
                      }}
                    />
                  </Box>
                  <Button
                    size="small"
                    variant="contained"
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
                    Follow
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  mt: 1,
                  fontSize: "11px",
                  color: "#788292",
                  textAlign: "left",
                  lineHeight: "19.73px",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Link
                  href="#"
                  underline="hover"
                  sx={{ fontSize: "12px", color: "#788292" }}
                >
                  Privacy
                </Link>
                .
                <Link
                  href="#"
                  underline="hover"
                  sx={{ fontSize: "12px", color: "#788292" }}
                >
                  Terms
                </Link>
                .
                <Link
                  href="#"
                  underline="hover"
                  sx={{ fontSize: "12px", color: "#788292" }}
                >
                  Advertising
                </Link>
                .
                <Link
                  href="#"
                  underline="hover"
                  sx={{ fontSize: "12px", color: "#788292" }}
                >
                  Ad Choices
                </Link>
                .
                <Link
                  href="#"
                  underline="hover"
                  sx={{ fontSize: "12px", color: "#788292" }}
                >
                  Cookies
                </Link>
                .
              </Box>
              <Box
                sx={{
                  fontSize: "11px",
                  color: "#788292",
                  textAlign: "left",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Link
                  href="#"
                  underline="hover"
                  sx={{ fontSize: "12px", color: "#788292" }}
                >
                  More
                </Link>
                .
                <Link
                  href="#"
                  underline="none"
                  sx={{ fontSize: "12px", color: "#788292" }}
                >
                  Facebook &#169; 2020
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Homepage;

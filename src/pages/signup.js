import * as React from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GoogleIcon from "@mui/icons-material/Google";
import SignUpForm from "../components/Form";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from "../firebase";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  function signinwithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        navigate("/");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  const handleClick = () => {
    signinwithGoogle();
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)`, //https://source.unsplash.com/random
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            my: 3,
            mx: 14,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography component="h1" variant="h5" fontFamily="Nunito Sans">
              Signup for a new account
            </Typography>
            <Typography
              component="caption"
              variant="caption"
              fontFamily="Nunito Sans"
              sx={{ color: "#525252", textAlign: "left" }}
            >
              Kickstart your endless possibilities
            </Typography>
          </Box>
          <Button
            fullWidth
            variant="contained"
            onClick={handleClick}
            sx={{ mt: 3, mb: 2, gap: 2 }}
          >
            <GoogleIcon />
            <Typography variant="body2" fontFamily="Nunito Sans">
              Continue with Google
            </Typography>
          </Button>
          <Box
            sx={{
              alignItems: "center",
              width: "100%",
              color: "#A1A1A1",
              my: 2,
            }}
          >
            <Typography variant="body2" fontFamily="Nunito Sans">
              ------------- or Fill the sign up form -------------
            </Typography>
          </Box>
          <Box sx={{ width: "100%", mt: 1 }}>
            <SignUpForm />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

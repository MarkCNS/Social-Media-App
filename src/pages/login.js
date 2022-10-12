import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GoogleIcon from "@mui/icons-material/Google";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  browserSessionPersistence,
  setPersistence,
  signOut,
} from "firebase/auth";
import firebaseConfig from "../firebase";
import { Navigate, useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import LocalStorageService from "../util/localStorageService";
import { useGetUserById } from "../hooks/useGetUserById";

export default function Login() {
  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const {
    getUserById,
    user: CurrentLoggedInUser,
    isLoading,
  } = useGetUserById();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbar, setSnackbar] = useState({
    message: "",
    severity: "",
  });

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email("*please enter a valid email address")
      .required("*email is required"),
    password: Yup.string()
      .min(4, "*password must be four characters long!")
      .max(20, "*password must not exceed 20 characters!")
      .required("*password is required"),
    checkbox: Yup.boolean()
      .oneOf([true], "Required terms of use")
      .required("Required terms of use"),
  });

  async function signinwithGoogle() {
    setLoading(true);
    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        LocalStorageService.setCurrentUser(user);
        navigate("/home");
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
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const signInWithEmailAndPass = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        getUserById(user.uid);
        setOpenSnackbar(true);
        setSnackbar({
          message: "Logged in successfully",
          severity: "success",
        });
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message);
        setOpenSnackbar(true);
        setSnackbar({
          message: errorMessage,
          severity: "error",
        });
      })
      .finally(() => {
        setLoading(false);
        // setTimeout(() => {
        //   setOpenSnackbar(false);
        // }, [5000]);
      });
    // setPassword(null);
    // setEmail(null);
  };

  const persistState = async (email, password) => {
    await setPersistence(auth, browserSessionPersistence)
      .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        // navigate("/");
        LocalStorageService.setToken(true);
        // return signInWithEmailAndPassword(auth, email, password);
        return signInWithEmailAndPass(email, password);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleClick = () => {
    signinwithGoogle();
  };

  // const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    // setOpen(false);
    setOpenSnackbar(false);
  };

  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(https://images.unsplash.com/photo-1636114673156-052a83459fc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`, //https://source.unsplash.com/random
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
              my: 8,
              mx: 16,
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
                Login to your Account
              </Typography>
              <Typography
                component="caption"
                variant="caption"
                fontFamily="Nunito Sans"
                sx={{ color: "#525252" }}
              >
                See what is going on with your business
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
                my: 3,
              }}
            >
              <Typography variant="body2" fontFamily="Nunito Sans">
                ------------- or Sign in with Email -------------
              </Typography>
            </Box>
            <Formik
              initialValues={{
                email: "",
                password: "",
                checkbox: "",
              }}
              validationSchema={SignInSchema}
              onSubmit={(values) => {
                // alert(JSON.stringify(values, null, 2));

                // signInWithEmailAndPass(values.email, values.password);
                persistState(values.email, values.password);
              }}
            >
              {(props) => (
                <Form
                  autoComplete="off"
                  onSubmit={props.handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    width: "100%",
                  }}
                >
                  <TextField
                    required
                    fullWidth
                    autoComplete="email"
                    size="small"
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="mail@abc.com"
                    onChange={props.handleChange}
                    value={props.values.email}
                    error={props.touched.email && props.errors.email}
                    helperText={props.touched.email && props.errors.email}
                    onBlur={props.handleBlur}
                  />
                  <TextField
                    required
                    fullWidth
                    autoComplete="password"
                    size="small"
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="************"
                    onChange={props.handleChange}
                    value={props.values.password}
                    error={props.touched.password && props.errors.password}
                    helperText={props.touched.password && props.errors.password}
                    onBlur={props.handleBlur}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <FormControlLabel
                      id="checkbox"
                      name="checkbox"
                      label="Remember Me"
                      value={props.values.checkbox}
                      error={props.touched.checkbox && props.errors.checkbox}
                      helperText={
                        props.touched.checkbox && props.errors.checkbox
                      }
                      onBlur={props.handleBlur}
                      onChange={props.handleChange}
                      control={
                        <Checkbox
                          id="checkbox"
                          name="checkbox"
                          size="small"
                          value={true}
                          color="primary"
                        />
                      }
                    />
                    <Link href="#" variant="body2" fontFamily="Nunito Sans">
                      Forgot password?
                    </Link>
                  </Box>
                  {loading ? (
                    <LoadingButton
                      loading
                      variant="outlined"
                      sx={{
                        mt: 3,
                        mb: 2,
                        padding: "16px 16px",
                        fontFamily: "Nunito Sans",
                      }}
                    />
                  ) : (
                    <Button
                      type="submit"
                      id="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2, fontFamily: "Nunito Sans" }}
                    >
                      Sign In
                    </Button>
                  )}

                  <Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    // severity={snackbar?.severity}
                    // message={snackbar?.message}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                  >
                    <Alert
                      onClose={handleClose}
                      severity={snackbar?.severity}
                      sx={{ width: "100%" }}
                    >
                      {snackbar?.message}
                    </Alert>
                  </Snackbar>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 1,
                      mt: 8,
                    }}
                  >
                    <Typography
                      variant="body2"
                      fontFamily="Nunito Sans"
                      sx={{ color: "#828282" }}
                    >
                      Not Registered Yet?
                    </Typography>
                    <Link
                      onClick={() => navigate("/signup")}
                      href="#"
                      fontFamily="Nunito Sans"
                      variant="body2"
                    >
                      Create an account
                    </Link>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../../firebase";
import { useNavigate } from "react-router-dom";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";

const SignUpForm = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  //databse storage
  const db = getFirestore(firebaseConfig.app);

  //setData method
  const collectionData = async (user) => {
    await setDoc(doc(db, "users", `${user.uid}`), {
      ...user,
    });
  };

  const SignupSchema = Yup.object().shape({
    userName: Yup.string()
      .min(8, "*minimum 8 characters long")
      .max(20, "*maximum 20 characters long")
      .required("*username is required"),
    email: Yup.string()
      .email("*please enter a valid email address")
      .required("*email is required"),
    password: Yup.string()
      .min(4, "*password must be four characters long!")
      .max(20, "*password must not exceed 20 characters!")
      .required("*password is required"),
    confirmpassword: Yup.string()
      .required("*password confirmation is required")
      .when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "*both password need to be the same"
        ),
      }),
    gender: Yup.string().required("*please select a gender"),
    status: Yup.string().required("*choose an option"),
    checkbox: Yup.boolean()
      .oneOf([true], "Required terms of use")
      .required("Required terms of use"),
  });

  const createUserWithEAndPass = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        collectionData({
          uid: user.uid,
          userName: values.userName,
          email: values.email,
          gender: values.gender,
          status: values.status,
        });
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <Formik
      initialValues={{
        userName: "",
        email: "",
        password: "",
        confirmpassword: "",
        gender: "",
        status: "",
        checkbox: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // alert(JSON.stringify(values, null, 2));
        // console.log(values);
        // collectionData(values);
        createUserWithEAndPass(values);
      }}
    >
      {(props) => (
        <Form
          onSubmit={props.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <TextField
            size="small"
            id="userName"
            name="userName"
            label="Username"
            placeholder="randomuser"
            onChange={props.handleChange}
            value={props.values.userName}
            error={props.touched.userName && props.errors.userName}
            helperText={props.touched.userName && props.errors.userName}
            onBlur={props.handleBlur}
          />

          <TextField
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
            size="small"
            id="password"
            name="password"
            label="Password"
            type="password"
            placeholder="********************"
            onChange={props.handleChange}
            value={props.values.password}
            error={props.touched.password && props.errors.password}
            helperText={props.touched.password && props.errors.password}
            onBlur={props.handleBlur}
          />
          <TextField
            size="small"
            id="confirmpassword"
            name="confirmpassword"
            label="Re-enter your password"
            type="password"
            placeholder="********************"
            onChange={props.handleChange}
            value={props.values.confirmpassword}
            error={
              props.touched.confirmpassword && props.errors.confirmpassword
            }
            helperText={
              props.touched.confirmpassword && props.errors.confirmpassword
            }
            onBlur={props.handleBlur}
          />
          <Box sx={{ display: "flex" }}>
            <FormControl fullWidth size="small">
              <InputLabel>Gender</InputLabel>
              <Select
                // labelId="gender"
                id="gender"
                label="gender"
                name="gender"
                size="small"
                onChange={props.handleChange}
                value={props.values.gender}
                error={props.touched.gender && props.errors.gender}
                helperText={props.touched.gender && props.errors.gender}
                onBlur={props.handleBlur}
              >
                <MenuItem> -- Select a gender -- </MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
              <FormHelperText error>
                {props.touched.gender && props.errors.gender}
              </FormHelperText>
            </FormControl>
          </Box>

          <FormControl>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <FormLabel id="demo-radio-buttons-group-label">
                Status :
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                // defaultValue="female"
                name="radio-buttons-group"
                onChange={props.handleChange}
                value={props.values.status}
                error={props.touched.status && props.errors.status}
                helperText={props.touched.status && props.errors.status}
                onBlur={props.handleBlur}
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <FormControlLabel
                  value="single"
                  control={<Radio />}
                  label="Single"
                  name="status"
                />
                <FormControlLabel
                  value="married"
                  control={<Radio />}
                  label="Married"
                  name="status"
                />
                <FormControlLabel
                  value="widowed"
                  control={<Radio />}
                  label="Widowed"
                  name="status"
                />
              </RadioGroup>
            </Box>
            <FormHelperText error>
              {props.touched.status && props.errors.status}
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormControlLabel
              id="checkbox"
              name="checkbox"
              label="I agree with the terms and conditions*"
              value={props.values.checkbox}
              error={props.touched.checkbox && props.errors.checkbox}
              helperText={props.touched.checkbox && props.errors.checkbox}
              onBlur={props.handleBlur}
              onChange={(e, checked) =>
                props.setFieldValue("checkbox", checked)
              }
              control={
                <Checkbox
                  id="checkbox"
                  name="checkbox"
                  size="small"
                  value={props.values.checked}
                  color="primary"
                  required
                />
              }
            />
          </FormControl>
          <Button
            type="submit"
            disabled={!props.dirty}
            id="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 2, fontFamily: "Nunito Sans" }}
          >
            Create an account
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;

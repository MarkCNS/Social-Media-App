import { useState } from "react";
import { doc, setDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { nanoid } from "nanoid";
import { firebase, db, storage } from "../firebase";

export const useUploadPost = () => {
  const [isLoading, setIsLoading] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbar, setSnackbar] = useState({
    message: "",
    severity: "",
  });
  const postRef = collection(db, "posts");
  const uploadPost = async (payload) => {
    setIsLoading(true);
    // const ImageResponse = await fetch(payload.uploadFile);
    let url = null;
    if (typeof payload.uploadFile === String) {
      url = payload.uploadFile;
    } else {
      const ImageResponse = await fetch(payload.uploadFile);
      url = await ImageResponse.blob();
    }
    // const blob = await ImageResponse.blob();
    const storageRef = ref(storage, `post/${nanoid()}`);
    await uploadBytes(storageRef, url).then(async (snapshot) => {
      await getDownloadURL(ref(storageRef))
        .then((url) => {
          setDoc(doc(postRef), {
            ...payload,
            uploadFile: payload.uploadFile ? url : null,
          });
          setIsSuccess(true);
          setOpenSnackbar(true);
          setSnackbar({
            message: "Post added successfully",
            severity: "success",
          });
        })
        .catch((error) => {
          setOpenSnackbar(true);
          setSnackbar({
            message: "An error occured while posting",
            severity: "error",
          });
          console.log(error, "error");
        });
    });
    setIsLoading(false);
    // setOpenSnackbar(false);
  };
  return {
    uploadPost,
    isLoading,
    isSuccess,
    openSnackbar,
    snackbar,
    setOpenSnackbar,
  };
};

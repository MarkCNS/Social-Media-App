import { useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import LocalStorageService from "../util/localStorageService";

export const useGetUserById = () => {
  const [isLoading, setLoading] = useState();
  const [user, setUser] = useState([]);

  const getUserById = async (uid) => {
    const q = query(collection(db, "users"), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      LocalStorageService.setCurrentUser(doc.data());

      // doc.data() is never undefined for query doc snapshots
      setUser(doc.data());
    });
  };
  return { getUserById, user, isLoading };
};

import { useState } from "react";
import { db } from "../firebase";
import {
  query,
  onSnapshot,
  orderBy,
  startAt,
  getDocs,
  collection,
  limit,
} from "firebase/firestore";

export const useGetPosts = () => {
  const postRef = collection(db, "posts");
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastVisible, setLastVisible] = useState();
  const postsQuery = query(postRef, orderBy("createdAt", "desc"));

  const getPosts = async () => {
    try {
      if (!posts.length) {
        setIsLoading(true);
        const documentSnapshots = await getDocs(postsQuery);
        onSnapshot(postsQuery, (querySnapshot) => {
          const postArr = [];
          querySnapshot.forEach((doc) => {
            postArr.push({ postId: doc.id, ...doc.data() });
          });
          setPosts(postArr);
        });
        setLastVisible(
          documentSnapshots.docs[documentSnapshots.docs.length - 1]
        );
      } else {
        setIsLoading(true);
        const getNext = query(postRef);
        const documentSnapshots = await getDocs(getNext);
        setLastVisible(
          documentSnapshots.docs[documentSnapshots.docs.length - 1]
        );
        documentSnapshots.docs.map((data) => {
          const id = {
            postId: data.id,
          };
          setPosts((previous) => [...previous, id, data.data()]);
        });
      }
    } catch (err) {
      console.log("post err", err);
    } finally {
      setIsLoading(false);
    }
  };

  return { getPosts, posts, isLoading };
};

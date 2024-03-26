import { db } from "@/firebaseConfig";
import { Post } from "@/types";
import {
  addDoc,
  collection,
} from "firebase/firestore";

const COLLECTION_NAME = "posts";

export const createPost = (post: Post) => {
  return addDoc(collection(db, COLLECTION_NAME), post);
};

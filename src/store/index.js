import { configureStore } from "@reduxjs/toolkit";
import getContactSlice from "../redux/getContactMessenger";
import { composeWithDevTools } from "redux-devtools-extension";

export default configureStore(
  {
    reducer: {
      getContact: getContactSlice,
    },
  },
  composeWithDevTools()
);

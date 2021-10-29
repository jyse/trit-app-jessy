import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import artistsReducer from "../features/artistsSlice";
import userReducer from "../features/userSlice";

export default configureStore({
  reducer: {
    artists: artistsReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

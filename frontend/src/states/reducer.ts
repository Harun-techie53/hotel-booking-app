import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import { composeWithDevTools } from "@redux-devtools/extension";
import toastSlice from "./toastSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    toast: toastSlice,
    search: searchSlice,
  },
  devTools: composeWithDevTools({}),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

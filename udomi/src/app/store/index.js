import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import  ModalReducer from '../slices/modal'
// import PostsReducer from '../slices/posts';

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  modal: ModalReducer,
  // posts: PostsReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;

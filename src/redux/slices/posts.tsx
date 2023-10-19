import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import { Post } from "../../types";
import { UsersState } from "../../types";

export const fetchPosts = createAsyncThunk(
  "/posts/fetchPosts",
  async (arg: string) => {
    const { data } = await axios.get<Post[]>(`/posts?arg=${arg}`);
    return data;
  }
);

export const fetchRemovePosts = createAsyncThunk(
  "/posts/fetchRemovePosts",
  async (id: string) => {
    axios.delete<Post[]>(`/posts/${id}`);
  }
);

const initialState = {
  posts: {
    items: [],
    status: "loading",
  },
} as UsersState;

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    //get posts
    builder.addCase(fetchPosts.pending, (state) => {
      state.posts.items = [];
      state.posts.status = "loading";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts.items = action.payload;
      state.posts.status = "loaded";
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.posts.items = [];
      state.posts.status = "error";
    });
    //remove post
    builder.addCase(fetchRemovePosts.pending, (state, action) => {
      state.posts.items = state.posts.items.filter(
        (obj) => obj._id !== action.meta.arg
      );
    });
  },
});

export const postsReducer = postsSlice.reducer;

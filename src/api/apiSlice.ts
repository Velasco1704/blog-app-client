import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../interfaces/post.interface";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3003/api",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post, undefined>({
      query: () => "/posts",
    }),
  }),
});

export const { useGetPostsQuery } = appApi;

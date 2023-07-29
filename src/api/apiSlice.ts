import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../interfaces/post.interface";
import { User } from "../interfaces/user.interface";

interface UpdatePostPayload {
  id: string;
  body: string;
}

interface NewPost {
  body: string;
  userId: string;
}

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3003/api",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getUser: builder.query<User, string>({
      query: (id: string) => `/user/${id}`,
      providesTags: ["Post"],
    }),
    getPosts: builder.query<Post, undefined>({
      query: () => "/posts",
      providesTags: ["Post"],
    }),
    createPost: builder.mutation({
      query: (newPost: NewPost) => ({
        url: "/post",
        method: "POST",
        body: {
          body: newPost.body,
          userId: newPost.userId,
        },
      }),
      invalidatesTags: ["Post"],
    }),
    updatePost: builder.mutation({
      query: (payload: UpdatePostPayload) => ({
        url: `/post/${payload.id}`,
        method: "PUT",
        body: {
          body: payload.body,
        },
      }),
      invalidatesTags: ["Post"],
    }),
    deletePost: builder.mutation({
      query: (id: string) => ({
        url: `/post/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetUserQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = appApi;

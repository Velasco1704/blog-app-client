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

interface Login {
  email: string;
  password: string;
}
interface Register {
  fullName: string;
  email: string;
  password: string;
}

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://blog-app-server-production-88c0.up.railway.app/api",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload: Login) => ({
        url: "/login",
        method: "POST",
        body: payload,
      }),
    }),
    register: builder.mutation({
      query: (payload: Register) => ({
        url: "/register",
        method: "POST",
        body: payload,
      }),
    }),
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
  useLoginMutation,
  useRegisterMutation,
  useGetPostsQuery,
  useGetUserQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = appApi;

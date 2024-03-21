import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  endpoints: (builder) => ({
    getDonation: builder.query({
      query: () => ({
        url: "/donation",
        method: "GET",
      }),
      providesTags: ["donation"],
    }),
    getDonationById: builder.query({
      query: (id) => ({
        url: `/donation/${id}`,
        method: "GET",
      }),
      providesTags: ["donation"],
    }),
    addDonation: builder.mutation({
      query: (data) => ({
        url: "/donation",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["donation"],
    }),
    updateDonation: builder.mutation({
      query: ({ body, id }) => ({
        url: `/update-donation/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["donation"],
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
    deleteDonation: builder.mutation({
      query: (id) => ({
        url: `/delete-donation/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["donation"],
    }),
    getComments: builder.query({
      query: () => ({
        url: "/comments",
        method: "GET",
      }),
      providesTags: ["comments"],
    }),
    addComment: builder.mutation({
      query: (data) => ({
        url: "/comments",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
    getTestimonials: builder.query({
      query: () => ({
        url: "/testimonials",
        method: "GET",
      }),
      providesTags: ["testimonials"],
    }),
    addTestimonial: builder.mutation({
      query: (data) => ({
        url: "/testimonials",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["testimonials"],
    }),
  }),

  tagTypes: ["donation", "comments", "testimonials"],
});

export const {
  useGetDonationQuery,
  useGetDonationByIdQuery,
  useAddDonationMutation,
  useUpdateDonationMutation,
  useDeleteDonationMutation,
  useCreateUserMutation,
  useLoginUserMutation,
  useGetCommentsQuery,
  useAddCommentMutation,
  useGetTestimonialsQuery,
  useAddTestimonialMutation,
} = baseApi;

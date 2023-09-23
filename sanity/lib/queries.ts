import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post"]{
    _id, title, slug
  }`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post"][0]{
    title, mainImage, body
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post"][]{
    "params": { "slug": slug.current }
  }`;

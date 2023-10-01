import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

/**
 * 
 * @param 
 *    - {String} slug : the url of the page
 *    - {String} cat : the category of the blog
 * @returns 
 *    - {Object} data : the data of the page, including title, content...
 */
const useFetchSingleBlog = (slug, cat) => {
    const query = gql`
    query MyQuery {
        ${cat}(where: {slug: "${String(slug)}"}) {
          slug
          title
          content
          postDate
        }
      }
    `
    const { data, loading, error } = useQuery(query);
    if (loading) return <p>loading</p>;
    if (error) return <p>error</p>;
    return data;
}


const useFetchAllBlogs = (cat) => {
  const query = gql`
  query MyQuery {
    ${cat}s {
      slug
      title
      postDate
      description
    }
  }  
  `
  const { data, loading, error } = useQuery(query);
  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;
  return data;
}
 
export { useFetchSingleBlog, useFetchAllBlogs } ;
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

/**
 * 
 * @param 
 *    - {String} slug : the url of the page
 * @returns 
 *    - {Object} data : the data of the page, including title, content...
 */
const useFetchSingleBlog = (slug) => {
    const a = "my-first-project"
    const query = gql`
    query MyQuery {
        blog(where: {slug: "${String(slug)}"}) {
          categories {
            name
          }
          slug
          title
          content
        }
      }
    `
    const { data, loading, error } = useQuery(query);
    if (loading) return <p>loading</p>;
    if (error) return <p>error</p>;
    return data;
}
 
export default useFetchSingleBlog;
import { useState } from "react";
import { useParams } from "react-router-dom";
import ComponentRender from "./ComponentRender";
import TBlogCard from "./templates/TBlogCard";
import {useFetchSingleBlog, useFetchAllBlogs} from "./useFetch";

/**
 * 
 * @returns a jsx template, render a single blog detail page, all of its content
 */
const BlogRender = () => {
    // Structrue of data:
    // query MyQuery {
    //     ${cat}(where: {slug: "${String(slug)}"}) {
    //       slug
    //       title
    //       content
    //     }
    //   }
    const { cat, slug } = useParams();
    var result = null;
    const data = useFetchSingleBlog(slug, "project");
    if (cat === "project") result = data.project;
    if (cat === "experience") result = data.experience;
    if (cat === "leetCode") result = data.leetCode;

    return (
        <div className="Content">
            {result && result.content.map((content) => (
                <div key={content.title}>{ ComponentRender(content) }</div>
            ))}
        </div>
    );
}


/**
 * 
 * 
 * @returns A jsx template, a page contains all blogs related to the category
 */
const CatRender = () => {
    const { cat } = useParams();
    var result = null;
    const data = useFetchAllBlogs(cat);
    if (cat === "project") result = data.projects;
    if (cat === "experience") result = data.experiences;
    if (cat === "leetCode") result = data.leetCodes;
    return (
        <div className="Content">
            {result && result.map((eachBlog) => (
                <TBlogCard {...eachBlog} key={eachBlog.title} cat={cat}></TBlogCard>
            ))}
        </div>
    );
}
 
export {BlogRender, CatRender};
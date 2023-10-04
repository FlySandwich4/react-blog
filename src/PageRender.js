import { useState } from "react";
import { useParams } from "react-router-dom";
import ComponentRender from "./ComponentRender";
import Menu from "./Menu";
import TBlogCard from "./templates/TBlogCard";
import Test from "./TestC";
import {useFetchSingleBlog, useFetchAllBlogs} from "./useFetch";
import TTitle from "./templates/TTitle";

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
    //       postDate
    //     }
    //   }
    const { cat, slug } = useParams();
    var result = null;
    const data = useFetchSingleBlog(slug, cat);
    if (cat === "project") result = data.project;
    if (cat === "experience") result = data.experience;
    if (cat === "leetcode") result = data.leetCode;
    console.log(data);

    return (
        <div className='DisplayBox'>
            {/* DisplayBox: Everything display in this box, CSS in 'index.css', set to 100vw, 100vh */}  
            <Menu />
            <div className="ContentBox">
                <div className="Content">
                    {result && result.content.map((content) => (
                        <div key={content.title}> <ComponentRender data={content}/> </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


/**
 * Render a page with specific category, cat = category
 * 
 * @returns A jsx template, a page contains all blogs related to the category
 */
const CatRender = () => {
    const { cat } = useParams();
    var result = null;
    const data = useFetchAllBlogs(cat);
    if (cat === "home") {
        return (
        <div className='DisplayBox' >
            {/* DisplayBox: Everything display in this box, CSS in 'index.css', set to 100vw, 100vh */}  
            <Menu />
            <div className="ContentBox">
                <div className="Content">
                    <TTitle title="Nothing So Far ~" />
                </div>
            </div>
        </div>
        );
    }
    if (cat === "project") result = data.projects;
    if (cat === "experience") result = data.experiences;
    if (cat === "leetcode") result = data.leetcodes;
    return (
        <div className='DisplayBox' >
            {/* DisplayBox: Everything display in this box, CSS in 'index.css', set to 100vw, 100vh */}  
            <Menu />
            <div className="ContentBox">
                <div className="Content">
                    {result && result.map((eachBlog) => (
                        <div key={eachBlog.title}> <TBlogCard {...eachBlog}  cat={cat}> </TBlogCard> </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/**
 * Define your personal page rendering
 * 
 * @returns jsx for your custom page render 
 */
const CustomRender = () => {
    // DisplayBox, ContentBox, Content css are in index.css
    return (
        <div className='DisplayBox' >
            {/* DisplayBox: Everything display in this box, CSS in 'index.css', set to 100vw, 100vh */}  
            <Menu />
            <div className="ContentBox"> 
                <div className="Content"> 

                    {/* Do your own rendering here ... */}

                </div>
            </div>
        </div>
    );
}
 
export {BlogRender, CatRender};
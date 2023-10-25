import { useParams } from "react-router-dom";
import ComponentRender from "./ComponentRender";
import Menu from "./Menu";
import TBlogCard from "./templates/TBlogCard";
import {useFetchSingleBlog, useFetchAllBlogs} from "./useFetch";
import Home from "./Home";
import Peers from "./Peer";

/**
 *  A baase render, rendring the layout of the full page
 *  It renders Menu, DisplayBox base on innerHeight, content block...
 *  You might assume this gives you a good layout and you only need to
 *  fill content into the Content class div box
 */
const BaseRender = (props) => {
    const contentHeight = window.innerHeight;
    const mobileStyle = {
        DisplayBox : {
            'width': '100vw',
            'height': contentHeight,
            'display': 'flex',
            'flexWrap': 'nowrap'
        }
    }
    const conactJsx = (    
        <div className="Contact">
            <h2>Contacts</h2>
            <div>Email:  liamwu4@gmail.com</div>
            <div>Github:    <a href="https://github.com/FlySandwich4"> Link </a></div>
            <div>LinkedIn:  <a href="https://www.linkedin.com/in/yue-wu-b2bab8225/"> Link </a></div>
            <div>LeetCode:  <a href="https://leetcode.com/FlySandwich/"> Link </a></div>
        </div> 
    )
    console.log(props.hasContact)
    return (
        <div className='DisplayBox' style={mobileStyle.DisplayBox}>
            {/* DisplayBox: Everything display in this box, CSS in 'index.css', set to 100vw, 100vh */}  
            <Menu />
            <div className="ContentBox">
                <div className="Content">
                    { props.content }
                </div>
                {
                    props.hasContact === "true" ? conactJsx : null
                }
            </div>
        </div>
    );
}

/**
 * Renders a content page specificly, like ip/project/some-project
 * 
 * @returns a jsx template, render a single blog detail page, all of its content
 */
const BlogRender = (props) => {
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
    if (cat === "leetcode") result = data.leetcode;
    const returnJsx = result && result.content.map((content) => (
        <div key={content.title}> <ComponentRender data={content} date={result.postDate}/> </div>
    ))

    return (
        <BaseRender content={returnJsx} hasContact="true"/>
    );
}


/**
 * Render a page with specific category, cat = category
 * 
 * @returns A jsx template, a page contains all blogs related to the category
 */
const CatRender = (props) => {
    const { cat } = useParams();
    const data = useFetchAllBlogs(cat);
    const certainPageMap = {
        "home" : <Home/>,
        "peer" : <Peers/>
    }
    if (cat in certainPageMap) {
        return (
            <BaseRender content={certainPageMap[cat]} hasContact="true" />
        );
    }
    var result = null;
    if (cat === "project") result = data.projects;
    if (cat === "experience") result = data.experiences;
    if (cat === "leetcode") result = data.leetcodes;
    const resultJsx = result && result.map((eachBlog) => (
        <div key={eachBlog.title}> <TBlogCard {...eachBlog}  cat={cat}> </TBlogCard> </div>
    ))
    return (
        <BaseRender content={resultJsx}/>
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
        <BaseRender content={ "something you want to add" } />
    );
}
 
export {BlogRender, CatRender};
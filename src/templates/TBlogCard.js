import "./templates_css/TBlogCard.css"
import { Link } from "react-router-dom";

/**
 * The each Pink Card display in url: "/:cat", check BlogRouter.js to learn more about router
 * @param {*} props: slug, title, postDate, description
 * @returns jsx
 */
const TBlogCard = (props) => {
    return ( 
        <Link className="TBlogCard_Link" to={`${props.slug}`} >
            <div className="TBlogCard_Container">
                <div className="TBlogCard_Bar">
                    <div className="TBlogCard_Title">{ props.title }</div>
                    <div className="TBlogCard_PostDate">{ props.content ? props.postDate : null}</div>
                </div>
                <div className="TBlogCard_Seperate"></div>
                <div> <span className="TBlogCard_Info">Description</span> { props.description }  </div>
            
            </div>
        </Link>
        
    );
}
 
export default TBlogCard;
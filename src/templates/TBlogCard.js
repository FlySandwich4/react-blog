import "./templates_css/TBlogCard.css"
import { Link } from "react-router-dom";


const TBlogCard = (props) => {
    return ( 
        <Link className="TBlogCard_Link" to={`${props.slug}`} >
            <div className="TBlogCard_Container">
                <div className="TBlogCard_Bar">
                    <div className="TBlogCard_Title">{ props.title }</div>
                    <div className="TBlogCard_PostDate">{ props.postDate }</div>
                </div>
                <div className="TBlogCard_Seperate"></div>
                <div> <span className="TBlogCard_Info">Description</span> { props.description }  </div>
            
            </div>
        </Link>
        
    );
}
 
export default TBlogCard;
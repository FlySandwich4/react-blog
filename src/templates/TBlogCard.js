import "./templates_css/TBlogCard.css"
import { Link } from "react-router-dom";


const TBlogCard = (props) => {
    return ( 
        <Link className="TBlogCard_Link" to={`${props.slug}`} >
        <div className="TBlogCard_Container">
                <h1>{ props.title }</h1>
                <h2> Posted Date: { props.postDate }</h2>
                <h3> Description: { props.description }  </h3>
            
        </div>
        </Link>
        
    );
}
 
export default TBlogCard;
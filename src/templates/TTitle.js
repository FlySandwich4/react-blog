import "./templates_css/TTitle.css";

const TTitle = (props) => {
    return ( 
    <div className="TTitle_Container">
        <div className="TTitle_Title">{ props.title }</div>
        <div className="TTitle_Date">{ props.postDate }</div>
    </div> 
    );
}
 
export default TTitle;
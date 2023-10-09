import "./templates_css/TTitle.css";

/**
 * 
 * @param {*} props title(the content of the title), postDate(date or sth else to show at the right bottom corner)
 * @returns 
 */
const TTitle = (props) => {
    return ( 
    <div className="TTitle_Container">
        <div className="TTitle_Title">{ props.title }</div>
        <div className="TTitle_Date">{ props.date }</div>
    </div> 
    );
}
 
export default TTitle;
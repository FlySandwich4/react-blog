import THTMLBox from "./THTMLBox";
import "./templates_css/TList.css"

const TList = (props) => {
    return ( 
        <div className="TList_Container">
            <ul>
                {
                    props.content && props.content.map(eachLi => (
                        <li><THTMLBox content={eachLi}/></li>
                    ))
                }
            </ul>
        </div>
     );
}
 
export default TList;
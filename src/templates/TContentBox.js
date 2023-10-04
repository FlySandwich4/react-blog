import { type } from "@testing-library/user-event/dist/type";
import ComponentRender from "../ComponentRender";
import "./templates_css/TContentBox.css";


/**
 * json data should be like:
 * {
 *      "type" : "TContentBox",
 *      "title" : "...",
 *      "content" : [...] or "..."
 * }
 * @param {*} props title, content
 * @returns 
 */
const TContentBox = (props) => {
    // Params' data you need
    const contentTitle = props.title;
    // contentContent: current contentBox's content
    // it can be text or array, when it is an array
    // it contains an array of template componenets
    const contentContent = props.content;

    // Check if contentContent is a array of templates
    if (Array.isArray(contentContent)) {
        return (
            <div class="TContentBox_Container">
                <div className="TContentBox_Title"> { contentTitle } </div>
                <div className="TContentBox_Content">
                    <div className="TContentBox_Left"></div>
                    <div className="TContentBox_Right">
                    {
                        contentContent.map((eachContent) => (
                            <div>
                                { console.log(typeof(eachContent)) }
                                <ComponentRender data={ eachContent }/>
                            </div>
                        ))
                    }
                    </div>
                </div>  
            </div>
        )
    } else {
        return (
            <div className="TContentBox_Container">
                <div className="TContentBox_Title"> { contentTitle } </div>
                <div className="TContentBox_Content"> 
                    <div className="TContentBox_Left"></div>
                    <div className="TContentBox_Right"> { contentContent } </div>
                </div>
            </div>
        )
    }
}
 
export default TContentBox;
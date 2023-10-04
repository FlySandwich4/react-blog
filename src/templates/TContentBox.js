import { type } from "@testing-library/user-event/dist/type";
import ComponentRender from "../ComponentRender";
import "./templates_css/TContentBox.css";

const TContentBox = (props) => {
    // Params' data you need
    const contentTitle = props.title;
    // contentContent: current contentBox's content
    // it can be text or array, when it is an array
    // it contains an array of template componenets
    const contentContent = props.content;

    // Check if contentContent is a array of templates
    console.log(contentContent);
    console.log(Array.isArray(contentContent));
    if (Array.isArray(contentContent)) {
        return (
            <div class="TContentBox_Container">
                <div> {contentTitle} </div>
                {
                    contentContent.map((eachContent) => (
                        <div>
                            { console.log(typeof(eachContent)) }
                            <ComponentRender data={eachContent}/>
                        </div>
                    ))
                }
            </div>
        )
    } else {
        return (
            <div>
                {contentContent}
            </div>
        )
    }
}
 
export default TContentBox;
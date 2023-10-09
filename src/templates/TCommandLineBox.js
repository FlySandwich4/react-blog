import ComponentRender from "../ComponentRender";
import "./templates_css/TCommandLineBox.css";
import THTMLBox from "./THTMLBox";

/**
 * A command line style text box, green text black background
 * @param {*} props : content(text)
 * @returns jsx
 */
const TCommandLineBox = (props) => {
    return ( 
    <div className="TCommandLineBox_Container">
        <div className="TCommandLineBox_Content"> { 
            props.content && typeof(props.content) === "string" ? <THTMLBox content={props.content} /> : <ComponentRender data={props.content} />
        } </div>
    </div> 
    );
};
 
export default TCommandLineBox;
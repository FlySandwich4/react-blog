import ComponentRender from "../ComponentRender";
import "./templates_css/TCommandLineBox.css";

/**
 * A command line style text box, green text black background
 * @param {*} props : content(text)
 * @returns jsx
 */
const TCommandLineBox = (props) => {
    console.log(props.content);
    return ( 
    <div className="TCommandLineBox_Container">
        <div className="TCommandLineBox_Content"> { 
            props.content && typeof(props.content) === "string" ? props.content : <ComponentRender data={props.content} />
        } </div>
    </div> 
    );
};
 
export default TCommandLineBox;
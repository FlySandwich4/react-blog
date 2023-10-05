import "./templates_css/TCommandLineBox.css";

/**
 * A command line style text box, green text black background
 * @param {*} props : content(text, or other templates)
 * @returns jsx
 */
const TCommandLineBox = (props) => {
    return ( 
    <div className="TCommandLineBox_Container">
        <div className="TCommandLineBox_Content"> { props.content } </div>
    </div> 
    );
};
 
export default TCommandLineBox;
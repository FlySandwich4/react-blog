import TCodeBox from "./templates/TCodeBox";
import TCommandLineBox from "./templates/TCommandLineBox";
import TContentBox from "./templates/TContentBox";
import THTMLBox from "./templates/THTMLBox";
import TImgTextBox from "./templates/TImgTextBox";
import TList from "./templates/TList";
import TMarkdown from "./templates/TMarkdown";
import TParagraph from "./templates/TParagraph";
import TTitle from "./templates/TTitle";

/* 
Purpose:
    Return specific Component jsx defined in the content "type" field
Params: 
    content
        - a key value pair content obj
        - Structrue: {"type":"template_component_name", "content":"content from backend", ...}
*/

const componentMap = {
    "TCodeBox":             TCodeBox,
    "TContentBox" :         TContentBox,
    "TParagraph" :          TParagraph,
    "THTMLBox" :            THTMLBox,
    "TTitle" :              TTitle,
    "TList" :               TList,
    "TImgTextBox" :         TImgTextBox ,
    "TCommandLineBox" :     TCommandLineBox,
    "TMarkdown":            TMarkdown,
};

/**
 * 
 * @param {*} props : data(an object with specific format)
 * @returns 
 */
const ComponentRender = (props) => {
    const data = props.data;
    const date = props.date;
    if (!data) return (<div>data is not an object with specific structure</div>);
    const Component = componentMap[data.type] || (() => <div>Component not found</div>);
    return <Component {...data} date={ date } />;
};

 
export default ComponentRender;
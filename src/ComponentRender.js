import TCodeBox from "./templates/TCodeBox";
import TContentBox from "./templates/TContentBox";
import THTMLBox from "./templates/THTMLBox";
import TList from "./templates/TList";
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
    "TCodeBox":         (data => <TCodeBox {...data}/>),
    "TContentBox" :     (data => <TContentBox {...data}/>),
    "TParagraph" :      (data => <TParagraph {...data}/>),
    "THTMLBox" :        (data => <THTMLBox {...data}/>),
    "TTitle" :          (data => <TTitle {...data}/>),
    "TList" :           (data => <TList {...data}/>),
    "TTest": () => <div>Test</div>,
};

const ComponentRender = (props) => {

    console.log("data");
    const data = props.data;
    const Component = componentMap[data.type] || (() => <div>Component not found</div>);
    return <Component {...data} />;
};

 
export default ComponentRender;
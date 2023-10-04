import TCodeBox from "./templates/TCodeBox";
import TContentBox from "./templates/TContentBox";
import TParagraph from "./templates/TParagraph";

/* 
Purpose:
    Return specific Component jsx defined in the content "type" field
Params: 
    content
        - a key value pair content obj
        - Structrue: {"type":"template_component_name", "content":"content from backend", ...}
*/

const componentMap = {
    "TCodeBox": ({ title, content }) => <TCodeBox title={title} content={content} />,
    "TContentBox" : ((data) => <TContentBox {...data}/>),
    "TParagraph" : ((data) => <TParagraph {...data}/>),
    "TTest": () => <div>Test</div>,
};

const ComponentRender = (props) => {

    console.log("data");
    const data = props.data;
    const Component = componentMap[data.type] || (() => <div>Component not found</div>);
    return <Component {...data} />;
};

 
export default ComponentRender;
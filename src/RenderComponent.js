import TCodeBox from "./templates/TCodeBox";

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
    "TTest": () => <div>Test</div>,
};

const RenderComponent = (content) => {
    const Component = componentMap[content.type] || (() => <div>Component not found</div>);
    return <Component {...content} />;
};

 
export default RenderComponent;
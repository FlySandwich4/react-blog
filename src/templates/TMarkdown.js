import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const TMarkdown = (props) => {
    return (
        <Markdown remarkPlugins={[remarkGfm]}>{ props.content }</Markdown> 
    );
}
 
export default TMarkdown;
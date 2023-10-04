import { Link } from "react-router-dom";
import Menu from "./Menu";
import {BlogRender, CatRender} from "./PageRender";
import TCodeBox from "./templates/TCodeBox";
import TContentBox from "./templates/TContentBox";
import useFetchSingleBlog from "./useFetch.js";

/**
 * Test templates, pages here
 */
const Test = () => {
    const str = "cout<<abc \n  \n \n \n \n\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaa\naaa\naaa\naaa \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \naaa \naaa\n\n\naaaaaa";
    return (
            <div>
                <TContentBox title="Title1" content={[
                    {"type":"TCodeBox","title":"Code1", "content":"cout << endl"},
                    {"type":"TContentBox","title":"subTitle", "content":[
                        {"type":"TCodeBox","title":"codeTItle", "content":"cout << endl"},
                        {"type":"TParagraph","title":"codeTItle", "content":"This is a paragraph, but idk whether \n works"},
                        {"type":"TParagraph","title":"codeTItle", "content":"cout << endl"}
                    ]},
                    {"type":"TParagraph", "content":"idk What is this line !"},
                    {"type":"TContentBox","title":"subTitle2", "content":[
                        {"type":"TCodeBox","title":"codeTItle", "content":"cout << endl\nhtml is shit\n I don't like python"}
                    ]}
                ]}/>
                {/* <TCodeBox title={"computer.js"} content={str}/>
                <TCodeBox title={"aaa"} content={str}/>
                <TCodeBox title={2} content={str+str}/> */}
            </div>);
}
 
export default Test;
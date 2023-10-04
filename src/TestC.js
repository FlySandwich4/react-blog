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
            <div className="">
                Testing Case:
                <div>Hello</div>
                <TContentBox title="content" content={[
                    {"type":"TCodeBox","title":"hi2", "content":"cout << endl"},
                    {"type":"TContentBox","title":"hi", "content":[
                        {"type":"TCodeBox","title":"hi3", "content":"cout << endl"}
                    ]}
                    ]}/>
                {/* <TCodeBox title={"computer.js"} content={str}/>
                <TCodeBox title={"aaa"} content={str}/>
                <TCodeBox title={2} content={str+str}/> */}
            </div>);
}
 
export default Test;
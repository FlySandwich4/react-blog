import Menu from "./Menu";
import SingleBlog from "./SingleBlog";
import TCodeBox from "./templates/TCodeBox";
import useFetchSingleBlog from "./useFetch.js";

/**
 * Test templates, pages here
 */
const Test = () => {
    const str = "cout<<abc \n  \n \n \n \n\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaa\naaa\naaa\naaa \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \naaa \naaa\n\n\naaaaaa";
    return (
            <div className="Content">
                Testing Case:
                <div>Hello</div>
                <SingleBlog slug="my-first-project"/>
                <TCodeBox title={"computer.js"} content={str}/>
                <TCodeBox title={"aaa"} content={str}/>
                <TCodeBox title={2} content={str+str}/>
            </div>);
}
 
export default Test;
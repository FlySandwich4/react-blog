import SingleBlog from "./SingleBlog";
import TCodeBox from "./templates/TCodeBox";
import useFetchSingleBlog from "./useFetch.js";

const Test = () => {
    const str = "cout<<abc \n  \n \n \n \n\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaa\naaa\naaa\naaa \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \naaa \naaa\n\n\naaaaaa";
    return (<div>
        Testing Case:
        <div>Hello</div>
        <SingleBlog />
        <TCodeBox title={"computer.js"} content={str}/>
        <TCodeBox title={"aaa"} content={str}/>
        <TCodeBox title={2} content={str+str}/>
    </div>);
}
 
export default Test;
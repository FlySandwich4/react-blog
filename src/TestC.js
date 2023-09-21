import Menu from "./Menu";
import SingleBlog from "./SingleBlog";
import TCodeBox from "./templates/TCodeBox";
import useFetchSingleBlog from "./useFetch.js";

const Test = () => {
    const str = "cout<<abc \n  \n \n \n \n\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaa\naaa\naaa\naaa \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \naaa \naaa\n\n\naaaaaa";
    return (<div className="Test_Test">
        <Menu />
        <div className="Test_Right">
            <div className="Test_Container">
                Testing Case:
                <div>Hello</div>
                <SingleBlog slug="my-first-project"/>
                <TCodeBox title={"computer.js"} content={str}/>
                <TCodeBox title={"aaa"} content={str}/>
                <TCodeBox title={2} content={str+str}/>
            </div>
            
        </div>
        
    </div>);
}
 
export default Test;
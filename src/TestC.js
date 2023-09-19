import TCodeBox from "./templates/TCodeBox";
import useFetch from "./useFetch.js";

const Test = () => {
    const str = "cout<<abc \n  \n \n \n \n\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaa\naaa\naaa\naaa \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \naaa \naaa\n\n\naaaaaa";
    return (<div>
        Testing Case:
        <TCodeBox title={"computer.js"} content={str}/>
        <TCodeBox title={"aaa"} content={str}/>
        <TCodeBox title={useFetch()} content={str+str}/>
    </div>);
}
 
export default Test;
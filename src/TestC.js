import TCodeBox from "./templates/TCodeBox";
import useFetch from "./useFetch.js";

const Test = () => {
    const str = "cout<<abc \n  \n \n \n \n\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaa\naaa\naaa\naaa \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \naaa \naaa\n\n\naaaaaa";
    const [a, setA, b] = useFetch();
    console.log(a, b);
    return (<div>
        Testing Case:
        <TCodeBox title={"computer.js"} content={str}/>
        <TCodeBox title={"aaa"} content={str}/>
        <TCodeBox title={2} content={str+str}/>
    </div>);
}
 
export default Test;
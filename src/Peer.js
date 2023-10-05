import THTMLBox from "./templates/THTMLBox";
import TImgTextBox from "./templates/TImgTextBox";
import TTitle from "./templates/TTitle";

const Peer = () => {
    const jerryImg = "https://media.licdn.com/dms/image/C4D03AQH9DkFr1NOunA/profile-displayphoto-shrink_800_800/0/1662924610528?e=1701907200&v=beta&t=q1fUCl4OHguCXpkRlX7-GUh1G1xVMIi4z5hI9qIv1mI";
    const jerryWeb = "https://blog.jialuohu.com/";
    const davidImg = "https://media.licdn.com/dms/image/C5603AQFq_JDKHNLo8A/profile-displayphoto-shrink_800_800/0/1661491033469?e=1701907200&v=beta&t=iC1T97c5ClQM3EDKX9WYEWzZ2lzTxZ6ALlq2CM77v5Y";
    const davidWeb = "https://www.seongjinyoon.com/";

    return ( <div>
        <TTitle title="Also check out my peers' website!" />
        <TImgTextBox imgSrc={ jerryImg } content={ 
            <THTMLBox content={`
                <a href=${jerryWeb}> <h1>Jialuo (Jerry) Hu</h1> </a>
                Research Assistant @ STAR Lab & Truss Lab | CS @ UC Irvine '24 | ICS Honors Program
            `}/> 
        }/> 
        <br></br>
        <TImgTextBox imgSrc={ davidImg } content={ 
            <THTMLBox content={`
                <a href=${davidWeb}> <h1>Seongjin (David) Yoon</h1> </a>
                Research Assistant @ Cloudberry | CS @ UC Irvine '24 | ICS Honors Program
            `}/> 
        }/> 
    </div> );
}
 
export default Peer;
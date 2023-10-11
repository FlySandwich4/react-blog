import TCommandLineBox from "./templates/TCommandLineBox";
import TContentBox from "./templates/TContentBox";
import THTMLBox from "./templates/THTMLBox";
import TImgTextBox from "./templates/TImgTextBox";
import TTitle from "./templates/TTitle"
import sandwich from "./static/img/sandwich.png";
import "./static/css/Home.css";

/**
 * Only for the home page rendering. 
 * @returns jsx 
 */
const Home = () => {
    // Text data for the about page, static data
    const about = [
        {
            "type": "THTMLBox", 
            "content":  `
                I am a Senior Undergraduate student studying Computer Science in UCI. I have various experiences 
                with different developments including frontend, backend, software developing, embedded system... 
                Also, I have knowledge about Alogrithms, Data Structrues, Network, and Operating System.
            `
        },
        {
            "type": "TContentBox", "title": "Education",
            "content": [
                {
                    "type" : "THTMLBox",
                    "content" : `
                    <strong> Bachelor </strong> <br>
                    University of California, Irvine <br>
                    Major : Computer Science <br>
                    GPA : 3.89 <br>
                    Timeline: 2020 - 2024
                    `
                }
            ]
        },
        {
            "type": "TContentBox", "title": "Skills",
            "content": [
                {
                    "type" : "TCommandLineBox",
                    "content" : {
                        "type" : "THTMLBox",
                        "content" : `
                            <strong> Common Languages: </strong> <br />
                            <li> C++, Python, Java, SQL, C, Assembly language</li>
                            <br />
                            <strong> Frontend Related: </strong> <br />
                            <li> React, Django, JavaScript, HTML, CSS, WordPress </li>
                            <br />
                            <strong> Backend Related: </strong> <br />
                            <li> NodeJS, Express, MySQL, MongoDB, AWS, GCP, NginX, Embedded System </li>
                        `
                    }
                }
            ]
        },
    ]

    // For the blog project information
    const thisProjectInfo = <THTMLBox content={`
        <h3> About this blog :</h3> <br />
        <div> 
            This blog project is a fullstack project, using react for the frontend 
            and graphCMS (Hygraph) as backend. I used GraphQL for the communications
            between frontend and backend. 
        </div> <br />
        <div>
            Check the github repo to learn more <br />
            <mark><a href="https://github.com/FlySandwich4/react-blog"> -> LINK HERE </a></mark>
    `} />;

    // For personal website links info
    const urlInfo = <THTMLBox content={`
        <h3> <a href="https://github.com/FlySandwich4"> Github </a> </h3>
        <h3> <a href="https://www.linkedin.com/in/yue-wu-b2bab8225/"> LinkedIn </a> </h3>
        <h3> <a href="https://leetcode.com/FlySandwich/"> LeetCode </a> </h3>
        <h3> Email: liamwu4@gmail.com </h3>
    `} />
    
    return ( 
        <div className="Home">    
            {/* postDate here is just for fixing the TTitle template's props name, not a real date here */}
            <div className="Home_TitleContainer">
                <div className="Home_Title">Welcome to the blog</div>
            </div>
            <TContentBox title="About Me" content={ about }/>
            <span className="Home_BlogContent"><TImgTextBox imgSrc={sandwich} content={ thisProjectInfo }/></span>
            <TContentBox title="Links and Contacts" content={ urlInfo } />
        </div>
    );
}
 
export default Home;
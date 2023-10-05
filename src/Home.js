import TCommandLineBox from "./templates/TCommandLineBox";
import TContentBox from "./templates/TContentBox";
import THTMLBox from "./templates/THTMLBox";
import TImgTextBox from "./templates/TImgTextBox";
import TTitle from "./templates/TTitle"
import sandwich from "./static/img/sandwich.png";

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
        <h3> About how this blog works :</h3> <br />
        <div> 
            This blog project is a fullstack project, using react for the frontend 
            and graphCMS (Hygraph) as backend. I used GraphQL for the communications
            between frontend and backend. 
        </div> <br />
        <div>
            Check the github repo to learn more <br />
            <mark><a href="https://github.com/FlySandwich4/react-blog"> -> LINK HERE </a></mark>
    `} />;

    return ( 
        <div>    
            {/* postDate here is just for fixing the TTitle template's props name, not a real date here */}
            <TTitle title="Hi, This is Yue Wu, or Liam" postDate="* FlySandwich is also me"/>
            <TContentBox title="About Me" content={ about }/>
            <TImgTextBox imgSrc={sandwich} content={ thisProjectInfo }/>
            
        </div>
    );
}
 
export default Home;
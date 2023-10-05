import TCommandLineBox from "./templates/TCommandLineBox";
import THTMLBox from "./templates/THTMLBox";
import TImgTextBox from "./templates/TImgTextBox";
import TTitle from "./templates/TTitle"

/**
 * Only for the home page rendering. 
 * @returns jsx 
 */
const Home = () => {
    const imgSrc = "https://media.graphassets.com/wCNVDswRFW3qxs1ZQfTw?_gl=1*1viogl1*_ga*ODYyMDQ2OTU3LjE2OTQ2NDM5NTM.*_ga_G6FYGSYGZ4*MTY5NjQ4MjczNy4yMi4wLjE2OTY0ODI3MzcuNjAuMC4w";
    return ( 
        <div>    
            {/* postDate here is just for fixing the TTitle template's props name, not a real date here */}
            <TTitle title="Hi, This is Yue Wu, or Liam" postDate="* FlySandwich is also me"/>

        </div>
    );
}
 
export default Home;
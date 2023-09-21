import { useState } from "react";
import "./static/css/Menu.css"

const Menu = () => {

    const imgData = "https://media.graphassets.com/output=format:jpg/resize=width:59,height:59,fit:crop/wCNVDswRFW3qxs1ZQfTw";
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        console.log("set open state to " + !isMenuOpen);
        setIsMenuOpen(!isMenuOpen);
    }
    const style = {"width": "200px", "boarder-radius": "25%"}
    return (
    <div className={` ${isMenuOpen ? "Menu_Container" : "Menu_FoldedContainer"}`}>
        <button className="Menu_Button" onClick={toggleMenu}>菜单</button>
        <div className= {`Menu ${isMenuOpen ? "" : "Menu_HideOnMobile"}`}>
            <div className="spacer"></div>
            <img className="myphoto" src={imgData}></img>
            <div className="contentBox">Hello World</div> <br></br>
            <div className="contentBox">Hello World<br></br><br></br><br></br><br></br></div>
            <div className="contentBox">Hello World<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></div>
            <div className="contentBox">Hello World<br></br><br></br><br></br><br></br><br></br><br></br><br></br></div>
            <div>Hello World</div><br></br><br></br><br></br><br></br><br></br>
            <div>Hello World</div><br></br><br></br><br></br><br></br><br></br><br></br>
            <div>Hello World</div><br></br><br></br><br></br><br></br>
            <div>Hello World</div><br></br><br></br><br></br><br></br>
            <div>Hello World</div><br></br><br></br><br></br><br></br>
            <div>Hello World</div><br></br><br></br><br></br><br></br>
            <div>Hello World</div><br></br><br></br><br></br><br></br>
        </div>
    </div>)
}
 
export default Menu;
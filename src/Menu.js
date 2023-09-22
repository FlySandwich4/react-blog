import { useState } from "react";
import "./static/css/Menu.css"

/**
 * The Menu always dispalys on the left side of the page
 */
const Menu = () => {
    const imgData = "https://media.graphassets.com/output=format:jpg/resize=width:59,height:59,fit:crop/wCNVDswRFW3qxs1ZQfTw";
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    // Content of boxes
    const menuButtonText = isMenuOpen ? "✕" : "▸"

    // Class names of boxes
    const menuContainerClass = isMenuOpen ? "Menu_Container" : "Menu_FoldedContainer";
    const menuButtonClass = isMenuOpen ? "Menu_Button" : "Menu_FoldedButton";
    const menuClass = isMenuOpen ? "Menu" : "Menu_Folded";
    
    return (
    <div className={ menuContainerClass }>
        <button className={ menuButtonClass } onClick={ toggleMenu }> { menuButtonText } </button>
        <div className= { menuClass }>
            <div className="spacer"><br/><br/><br/><br/></div>
            <img className="myphoto" src={ imgData }></img>
            
        </div>
    </div>)
}
 
export default Menu;
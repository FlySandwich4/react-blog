import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./static/css/Menu.css";
import iconIMG from "./static/img/yueZ.jpeg";


/**
 * The Menu always dispalys on the left side of the page
 * @return a jsx template, the menu template.
 */
const Menu = () => {
    const { cat } = useParams();
    const slugs = ["home", "project", "experience", "leetcode"];
    const sessionVal = sessionStorage.getItem("blogMenuOpen");
    // initBool val:
    // -    When User is using mobile, always close the menu when user first visit the page
    // -    When User is using PC, set the menu status based on the session Val, 
    //      if session Val === null, set the menu open as default
    const initBool = window.innerWidth < 800 ? false : sessionVal === null ? true : sessionVal === "true" ? true : false;
    console.log(initBool);
    const [isMenuOpen, setIsMenuOpen] = useState(initBool);

    const toggleMenu = () => {
        // Set the session
        sessionStorage.setItem("blogMenuOpen", String(!isMenuOpen));
        setIsMenuOpen(!isMenuOpen);
    }

    // When mobile user click a link in the menu, it close the menu and display content
    // When PC user click a link in the menu, it keeps the menu as it was
    const mobileClickLink = () => {
        if (window.innerWidth < 800) toggleMenu();
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
            <img className="myphoto" src={iconIMG}></img>
            <br></br>
            {
                slugs.map((eachCat) => (
                    <Link className={cat === eachCat ? "Menu_LinkSelected Menu_Link" : "Menu_Link"} 
                    to={`/${eachCat}`} key={eachCat}
                    onClick={ mobileClickLink }>
                        { `▸ ${eachCat}` }
                    </Link>
                ))
            }
        </div>
    </div>)
}
 
export default Menu;
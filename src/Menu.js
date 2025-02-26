import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./static/css/Menu.css";
import iconIMG from "./static/img/magicCat.png";


/**
 * The Menu always dispalys on the left side of the page
 * @return a jsx template, the menu template.
 */
const Menu = () => {
    const { cat } = useParams();
    // idx for iterating tagNames, slugs for the slug (url) for a specific page, like ip/home
    // tagNames are the display name in the menu for each tag you want to customize, 
    // like "My Peers" is a tag linked to url "ip/peers"
    var idx = 0;
    const tagNames = ["Home", "Projects", "Experiences", "LeetCode", "Notes", "My Peers"];
    const slugs = ["home", "project", "experience", "leetcode", "note", "peer"];
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
    const versionClass = isMenuOpen ? "Menu_Version" : "Menu_FoldedVersion"
    
    
    return (
    <div className={ menuContainerClass }>
        <button className={ menuButtonClass } onClick={ toggleMenu }> { menuButtonText } </button>
        <div className={ versionClass }> v1.3 </div>
        <div className= { menuClass }>
            <div className="spacer"><br/><br/><br/><br/></div>
            <img className="Menu_Photo" src={ iconIMG }></img>
            <br></br>

            <div className="Menu_Intro">
                <div>Yue Wu</div>
                <div className="Menu_Motto">Think Outside The Box</div>
            </div>

            {
                // slugs is am array defines a little above, contains all the pages slug for navigation
                // and put the slug inside the <Link> to let the router handle. The router, then decided
                // where to go. Most of the time, it will gives to components in PageRender.js
                slugs.map((eachCat) => (
                    <Link className={ cat === eachCat ? "Menu_LinkSelected Menu_Link" : "Menu_Link" } 
                    to={`/${ eachCat }`} key={ eachCat }
                    onClick={ mobileClickLink }>
                        { `▸ ${ tagNames[idx++] }` }
                    </Link>
                ))
            }
        </div>
    </div>)
}
 
export default Menu;
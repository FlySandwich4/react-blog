import "./templates_css/THTMLBox.css"

/**
 * Template class for personalize html in the backend
 * You can store string and put into the THMTLCard template conponent and let it render the html string
 * !!! However, I advise you just use this for a single paragraph use, don't use it frequently, try to write your own component
 * !!! This Component is only for making highlight some parts of the text easier, not for making all blogs' content into html format
 * !!! Using <span> tags or other tags and set class name within it. check the THTMLBox.css and customize your own way of decorating text
 * Example: props.content = "<strong> This is strong </strong> this is regular words <code> This is code </code> <mark> this is highlight </mark>"
 * 
 * @param {*} props: content(your content, which is a html string)
 * @returns a jsx
 */
const THTMLBox = (props) => {
    return ( <div className="THTMLBox_Container" dangerouslySetInnerHTML={{ __html : props.content }}></div> );
}
 
export default THTMLBox;
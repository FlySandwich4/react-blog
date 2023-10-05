import "./templates_css/TImgTextBox.css";

/**
 * A Box that dispaly a rounded img on the left and text on the right
 * The right text is in THTMLBox template, read "THTMLBox.js" for more information
 * @param {*} props : imgSrc(source of the img), content(your text, or other templates)
 * @returns jsx
 */
const TImgTextBox = (props) => {
    return ( 
        <div className="TImgTextBox_Container">
            <div className="TImgTextBox_Left">
                <img className="TImgTextBox_Img" src={props.imgSrc}></img>
            </div>
            <div className="TImgTextBox_Right">
                <div className="TImgTextBox_Content">
                    {props.content}
                </div>
            </div>
        </div>
    );
};
 
export default TImgTextBox;
import THTMLBox from "./THTMLBox";
import "./templates_css/TList.css"

/**
 * The content can have nested array: like [str1, str2, [subStr1, subStr2, ...], ...]
 * which will display correctly with the subLists
 * @param {*} props content(data: [str1, str2, ...]  contains each listed data)
 * @returns 
 */
const TList = (props) => {
    return ( 
        <div className="TList_Container">
            <ul>
                {
                    props.content && props.content.map(eachLi => (
                        Array.isArray(eachLi) ? 
                            <TList content={eachLi}/> :
                            <li key={eachLi}><THTMLBox content={eachLi}/></li>
                    ))
                }
            </ul>
        </div>
     );
}
 
export default TList;
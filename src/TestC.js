import Menu from "./Menu";
import ComponentRender from "./ComponentRender";
import jsonData from "./static/test.json";
import { json } from "react-router-dom";

/**
 * Test templates, pages here
 */
const Test = () => {
    const content = jsonData;
    return (
        <div className='DisplayBox' >
            {/* DisplayBox: Everything display in this box, CSS in 'index.css', set to 100vw, 100vh */}  
            <Menu />
            <div className="ContentBox">
                <div className="Content">
                    {content && content.map((each) => (
                        <div key={each.title}> <ComponentRender data={each}/> </div>
                    ))}
                    
                </div>
            </div>
        </div>
    );
}
 
export default Test;
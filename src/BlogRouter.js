import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleBlog from "./SingleBlog";
import Test from "./TestC";
import Menu from './Menu';

const BlogRouter = () => {
  return ( 
    
      <Router>
        <Menu />
        <div className="ContentBox">
          <Routes>
            <Route path="/" element={ <Test /> }></Route>
            <Route path="/:slug" element={ <SingleBlog />}></Route>
          </Routes>
        </div>
      </Router>
    
  );
}
 
export default BlogRouter;

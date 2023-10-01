import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {BlogRender, CatRender} from "./PageRender";
import Test from "./TestC";
import Menu from './Menu';

const BlogRouter = () => {
  return ( 
    
      <Router>
        <Menu />
        <div className="ContentBox">
          <Routes>
            <Route path="/" element={ <Test /> }></Route>
            <Route path="/:cat" element={ <CatRender />}></Route>
            <Route path="/:cat/:slug" element={ <BlogRender />}></Route>
          </Routes>
        </div>
      </Router>
    
  );
}
 
export default BlogRouter;

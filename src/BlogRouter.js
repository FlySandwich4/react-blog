import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import {BlogRender, CatRender} from "./PageRender";
import Test from "./TestC";
import Menu from './Menu';

const BlogRouter = () => {
  return ( 
      <Router>
        <Routes>
            <Route path="" element={ <Navigate to="/home" /> }></Route>
            <Route path="/test" element={ <Test/> }></Route>
            <Route path="/:cat" element={ <CatRender />}></Route>
            <Route path="/:cat/:slug" element={ <BlogRender />}></Route>
            
          </Routes>
        
      </Router>
  );
}
 
export default BlogRouter;

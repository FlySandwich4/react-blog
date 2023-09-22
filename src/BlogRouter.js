import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleBlog from "./SingleBlog";
import Test from "./TestC";

const BlogRouter = () => {
  return ( 
    <div className="ContentBox">
      <Router>
          <Routes>
            <Route path="/" element={ <Test /> }></Route>
            <Route path="/:slug" element={ <SingleBlog />}></Route>
          </Routes>
      </Router>
    </div>
  );
}
 
export default BlogRouter;

import Navbar from "./navbar/index";
import Home from "./views/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBlog from "./views/CreateBlog";
import BlogDetails from "./views/BlogDetails";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/createBlog">
              <CreateBlog />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

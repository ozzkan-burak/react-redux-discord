//components
import Header from "./Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Hero from "./Hero";


const Layout = () => {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Header />
            <Hero />
          </Route>
          {/* <Route path="/channels">
            <Home />
          </Route> */}
        </Switch>
    </Router>
  )
}

export default Layout

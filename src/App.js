import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import React from "react";
import "./App.css";
import LandingPage from "./pages/Landingpages";
import SearchPages from "./pages/Searchpages";
import DetailCar from "./pages/DetailCar";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/landing-page" component={LandingPage}/>
        <Route exact path="/search-page" component={SearchPages}/>
        <Route exact path="/search-page/:carId" component={DetailCar}/>
      </Switch>
    </Router>


  );
};
export default App;

import React from "react";

import HomeMain from "./home/Homemain";
import Portfolio from "./portfolyo/Partfolio"
import Aboutinfo from "./about/aboutinfo";
import contactinfo from "./filebase/contactinfo";


import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route,  } from "react-router-dom";


function Routing() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeMain}/>
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/about" exact component={Aboutinfo} />
        <Route path="/contact" exact component={contactinfo} />

      </Switch>
    </Router>
  );
}

export default Routing;

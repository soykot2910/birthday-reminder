import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllBirthday from "./components/AllBirthday";
import PersonalDetails from "./components/PersonalDetails";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllBirthday} />
        <Route exact path="/birthday/:id" component={PersonalDetails} />
      </Switch>
    </Router>
  );
};

export default App;

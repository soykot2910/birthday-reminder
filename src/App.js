import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddBirthday from "./components/AddBirthday";
import AllBirthday from "./components/AllBirthday";
import PersonalDetails from "./components/PersonalDetails";
import ShowBirthday from "./components/ShowBirthday";

const App = () => {
  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route exact path="/" component={AllBirthday} />
        <Route exact path="/birthday/:id" component={PersonalDetails} />
        <Route exact path="/add" component={AddBirthday} />
        <Route exact path="/allbirthday" component={ShowBirthday} />
      </Switch>
    </Router>
  );
};

export default App;

import "./App.css";
import Register from "./Component/register";
import Dashboard from "./Component/dashboard";
import Admin from "./Component/Admin";
import Signout from "./Component/Signout";
import Poll from "./Component/Poll";
import AdminPoll from "./Component/AdminPoll";
import ViewPoll from "./Component/ViewPoll";
import { Provider } from "react-redux";
import store from "./store.js";
import ReactDOM from "react-dom";
import history from "./history";
//import { BrowserRouter as Router } from 'react-router-dom';
import { Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Register} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Poll" component={Poll} />
          <Route path="/AdminPoll" component={AdminPoll} />
          <Route path="/ViewPoll/:id" component={ViewPoll} />
          <Route path="/Signout" component={Signout} />
          <Route path="/Admin" component={Admin}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

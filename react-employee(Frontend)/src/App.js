import "./App.css";
import FooterCompanant from "./components/FooterCompanant";
import HeaderComponant from "./components/HeaderComponant";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddOrUpdateEmployee from "./components/AddOrUpdateEmployee";


function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponant />
        <div className="container">
          <Switch>
            <Route path="/" component={ListEmployeeComponent} exact></Route>
            <Route path="/employee/:id" component={AddOrUpdateEmployee}></Route>
          </Switch>
        </div>
        <FooterCompanant />
      </Router>
    </div>
  );
}

export default App;

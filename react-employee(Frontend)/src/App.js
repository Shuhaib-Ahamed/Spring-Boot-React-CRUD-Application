import "./App.css";
import FooterCompanant from "./components/FooterCompanant";
import HeaderComponant from "./components/HeaderComponant";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddOrUpdateEmployee from "./components/AddOrUpdateEmployee";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";


function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponant />
        <div className="container app-container" style={{ marginTop: "100px" }}>
          <Switch>
            <Route path="/" component={ListEmployeeComponent} exact></Route>
            <Route path="/employee/:id" component={AddOrUpdateEmployee}></Route>
            <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route>
          </Switch>
        </div>
        <FooterCompanant />
      </Router>
    </div>
  );
}

export default App;

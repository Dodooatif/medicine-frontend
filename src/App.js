import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import AddMedication from "./screens/AddMedication";
import Medications from "./screens/Medications";
import Header from "./components/Header";
// import { Container } from "react-bootstrap";
import SigninScreen from "./screens/SigninScreen";
// import Home from "./screens/Home";
import SignupUserScreen from "./screens/SignupUserScreen";
import "./bootstrap.min.css";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

function App() {
  const { userInfo } = useContext(UserContext);

  // let user = JSON.parse(localStorage.getItem("userInfo"));

  // useEffect(() => {
  //   getMedications();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <main>
      <Header />
      <Switch>
        <Route path="/"exact>
          {Object.keys(userInfo).length>0 ? <Redirect to="/medications"/> : <Redirect to="/signin"/>}
        </Route>
        <Route path="/medications" component={Medications} />
        <Route path="/addmedication" component={AddMedication} />
        <Route path="/signin" component={SigninScreen} />
        <Route path="/signup" component={SignupUserScreen} />
      </Switch>
    </main>
  );
}

export default App;

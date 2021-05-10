import "./App.css";
import { Route, Redirect } from "react-router-dom";
import AddMedication from "./screens/AddMedication";
import Medications from "./screens/Medications";
import Header from "./components/Header";
// import { Container } from "react-bootstrap";
import SigninScreen from "./screens/SigninScreen";
import Home from "./screens/Home";
import SignupUserScreen from "./screens/SignupUserScreen";
import "./bootstrap.min.css"
import { useContext, useEffect } from "react";
import { MedicationsContext } from "./contexts/MedicationsContext";

function App() {
  const {getMedications} = useContext(MedicationsContext)

  let user = JSON.parse(localStorage.getItem("userInfo"))

  useEffect(() =>{
    getMedications()
    // eslint-disable-next-line
  }, [])

  return (
    <main>
      <Header />
          <Route path="/" render={()=>{
            return user ? <Redirect to="/home" /> : <Redirect to="/signin" />
          }} exact/> 
          <Route path="/signin" component={SigninScreen} />
          <Route path="/home" component={Home} exact/>
          <Route path="/medications" component={Medications} />
          <Route path="/addmedication" component={AddMedication} />
          <Route path="/signup" component={SignupUserScreen} />
    </main>
  );
}

export default App;

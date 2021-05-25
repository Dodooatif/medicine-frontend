import { useState, useContext, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";
import small from "../images/small.jpg";
import { BiUser } from "react-icons/bi";

const SigninScreen = ({ history, location }) => {
  const { signinUser, userInfo } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/signin";

  useEffect(() => {
    if (Object.keys(userInfo).length>0 ) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    signinUser(user);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "grid",
        // gridTemplateColumns: "50%",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${small})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Form
        onSubmit={handleSubmit}
        style={{
          width: "350px",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          gridTemplateColumns: "1fr",
          marginLeft: "10%",
          gridGap: 15,
          padding: "20px",
          border: "2px solid green",
          borderRadius: "7px",
        }}
      >
        <h3 className="text-center">SIGN IN </h3>
        <div className="text-center">
          <BiUser
            size={65}
            style={{ border: "2px solid black", borderRadius: 40 }}
          />
        </div>
        <Form.Control
          placeholder="Enter Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Control
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">SIGN IN</Button>
        <div style={{ display: "flex" }}>
          <h4>
            Don't have account? <Link to="/signup">Sign Up</Link>
          </h4>
        </div>
      </Form>
    </div>
  );
};

export default SigninScreen;

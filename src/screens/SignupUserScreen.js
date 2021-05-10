import { useState, useContext, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { Col, Form, Button, Row } from "react-bootstrap";
import small from "../images/small.jpg";
import { UserContext } from "../contexts/UserContext";
import {PropagateLoader} from "react-spinners"

const SignupUserScreen = () => {
  const history = useHistory();
  const location = useLocation();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const { signupUser, userInfo, } = useContext(UserContext);

  const redirect = location.search ? location.search.split("=")[1] : "/signin";

  useEffect(() => {
    if (userInfo.firstname) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  function handlesubmit(e) {
    e.preventDefault();
    const newuser = {
      firstname,
      lastname,
      email,
      age,
      phone,
      password,
    };
    signupUser(newuser);
  }

  return (
    <div
      style={{
        height: "110vh",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "50%",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${small})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Row className="justify-content-md-center">
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="border border-white mt-5 p-3"
        >
          <Form
            onSubmit={handlesubmit}
            style={{
              width: "300px",
              padding: "15px",
              display: "grid",
              borderRadius: "7px",
            }}
          >
            <Form.Group>
              <h3 className="text-center">SIGN UP</h3>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                placeholder="Enter First Name"
                value={firstname}
                onChange={(text) => setFirstname(text.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                placeholder="Enter Last Name"
                value={lastname}
                onChange={(text) => setLastname(text.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="Enter Email"
                value={email}
                onChange={(text) => setEmail(text.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Age</Form.Label>
              <Form.Control
                placeholder="Enter Age"
                value={age}
                onChange={(text) => setAge(text.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                placeholder="Enter Phone Number"
                value={phone}
                onChange={(text) => setPhone(text.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                placeholder="Enter Password"
                type="password"
                value={password}
                onChange={(text) => setPassword(text.target.value)}
              />
            </Form.Group>
            <Button type="submit" {...PropagateLoader}>SIGN UP</Button>

            <div style={{ display: "flex" }}>
              <h4>
                Already a User? <Link to="/signin">Sign In</Link>
              </h4>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default SignupUserScreen;

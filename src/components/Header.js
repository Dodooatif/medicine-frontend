import React, { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FiPower, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Header = () => {
  const { logout, userInfo } = useContext(UserContext);

  // const user = JSON.parse(localStorage.getItem("userInfo"));

  const handlelogout = () => {
    logout();
  };

  return (
    <Navbar className="bg-primary navbar-expand text-white">
      <Container>
        <Navbar.Brand className="text-white">
          <Link to="/" style={{ color: "white" }}>
            Hello {userInfo && userInfo.firstname}
          </Link>
        </Navbar.Brand>
        <Nav>
          {userInfo.token ? (
            <>
              <Nav.Link>
                <Link
                  to="/medications"
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  MEDICATIONS
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/addmedication"
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  ADD
                </Link>
              </Nav.Link>
              <NavDropdown
                title={
                  <FiUser
                    size={25}
                    style={{
                      border: "2px solid #000",
                      borderRadius: 20,
                      padding: 1,
                    }}
                  />
                }
              >
                <NavDropdown.Item>{userInfo.firstname}</NavDropdown.Item>
                <NavDropdown.Item>{userInfo.email}</NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/signin"
                    className="nav-link bg-success text-white"
                    onClick={handlelogout}
                  >
                    <FiPower size={30} />
                    Logout
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <>
              <Nav.Item>
                <Link to="/signin" className="bg-dark text-white nav-link">
                  SIGN IN
                </Link>
              </Nav.Item> 
               <Nav.Item>
                <Link to="/signup" className="bg-dark text-white nav-link">
                  SIGN UP
                </Link>
              </Nav.Item>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

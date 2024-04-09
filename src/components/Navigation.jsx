import "../styles/Navigation.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/lo9o.png";

function Navigation() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="navigation">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/patient-list">Mes patients</Nav.Link>
            <Nav.Link href="/createPatient">Nouveau patient</Nav.Link>
            <Nav.Link href="#si admin">liste medecins</Nav.Link>
            <Nav.Link href="#si admin">liste patients</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;

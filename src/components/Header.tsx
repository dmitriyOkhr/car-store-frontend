import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavScrollExample() {
  return (
    <Navbar className="header" bg="primary" variant="dark">
      <Container>
        <LinkContainer to={"/"}>
          <Navbar.Brand>Home</Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto">
          <LinkContainer to={"/about"}>
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </Nav>
        <LinkContainer to={"/login"}>
          <Button variant="success">Sign In</Button>
        </LinkContainer>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

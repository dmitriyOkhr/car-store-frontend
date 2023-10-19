import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { selectIsAuth, logout } from "../redux/slices/auth";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

function NavScrollExample() {
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useSelector(selectIsAuth);

  const onClickLogout = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };
  return (
    <Navbar className="header" bg="primary" variant="dark">
      <Container>
        <LinkContainer to={"/"}>
          <Button variant="dark">Car Store Home</Button>
        </LinkContainer>
        {isAuth ? (
          <>
            <LinkContainer to={"/cabinet"}>
              <Button className="cabinetButton" variant="warning">
                Your cabinet
              </Button>
            </LinkContainer>
            <LinkContainer to={"/"}>
              <Button variant="danger" onClick={onClickLogout}>
                Logout
              </Button>
            </LinkContainer>
          </>
        ) : (
          <LinkContainer to={"/login"}>
            <Button variant="success">Login</Button>
          </LinkContainer>
        )}
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, Navigate } from "react-router-dom";
import { AppDispatch } from "../redux/store";
import { fetchAuth, selectIsAuth } from "../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { AuthUserData } from "../types";

const LoginPage = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch<AppDispatch>();
  const [authData, setAuthData] = useState<AuthUserData>({
    email: "",
    password: "",
  });

  const onSubmit = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const data: any = await dispatch(fetchAuth(authData));

    if (!data.payload) {
      return alert("Some error");
    }
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="loginPage">
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={authData.email}
              onChange={(e) =>
                setAuthData({ ...authData, email: e.target.value })
              }
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={authData.password}
              onChange={(e) =>
                setAuthData({ ...authData, password: e.target.value })
              }
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p></p>
          If you do not have account push
          <Link to={"/register"}> HERE</Link>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuth, fetchRegister } from "../redux/slices/auth";
import { AppDispatch } from "../redux/store";
import { AuthUserData } from "../types";

const RegisterPage = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch<AppDispatch>();
  const [authData, setAuthData] = useState<AuthUserData>({
    fullName: "",
    email: "",
    password: "",
  });

  const onSubmit = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const data: any = await dispatch(fetchRegister(authData));

    if (!data.payload) {
      return alert("Some error");
    }
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };
  console.log(isAuth);

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="loginPage">
        <Form onSubmit={onSubmit}>
          <h1>REGISTRATION</h1>

          <p></p>
          <Form.Label>User name</Form.Label>
          <Form.Control
            value={authData.fullName}
            onChange={(e) =>
              setAuthData({ ...authData, fullName: e.target.value })
            }
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
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
        </Form>
      </div>
    </>
  );
};

export default RegisterPage;

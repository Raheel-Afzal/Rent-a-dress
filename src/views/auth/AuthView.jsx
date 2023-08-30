import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Input, Button, Spinner } from "reactstrap";
import { useHistory } from "react-router-dom";
import Dresses from '../../assets/img/dresses.png'
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/authAction";
const AuthView = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, loading } = useSelector(
    (state) => state.authUser
  );

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(username, password));
  };

  useEffect(() => {
    if (user) {
      history.push("/");
    }
    else {
      history.push('/auth')
    }
  }, [user]);
  return (
    <Container fluid className="Auth-container vh-100">
      <Row>
        <Col md="6" lg={6} sm="12" className="side-batch">
          <div className="d-flex justify-content-center">
            <img
              src={Dresses}
              alt="Batch"
              className="d-block img-fluid  img-batch"
            />
          </div>
        </Col>
        <Col sm="12" md="6" lg={4} className="form my-4">
          <div className="card-main card shadow-lg login__rounded p-5 h-100">
            <div className="d-flex justify-content-center">
              <h1>RENT OR BOOK A DRESS</h1>
            </div>
            <Form onSubmit={handleSubmit}>
              <div className="my-4">
                <div className="col-auto">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fas fa-address-book "></i>
                      </div>
                    </div>
                    <Input
                      required
                      placeholder="Username"
                      id="formControlLg-1"
                      type="text"
                      size="lg"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="paswordOuter">
                  <div className="col-auto mt-4">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fa fa-unlock-alt"></i>
                        </div>
                      </div>
                      <Input
                        required
                        placeholder="Password"
                        id="formControlLg"
                        type="password"
                        size="lg"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center text-md-start mt-4 pt-2">
                  <Button
                    type="submit"
                    className="btn-success mb-0 px-5"
                    size="lg"
                    disabled={loading}
                  >
                    {loading ? <Spinner size="sm" /> : "Login"}
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthView;

import React, { Component } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import HotelPage from './HotelPage'
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBAnimation,
  MDBInputGroup
} from "mdbreact";
import "./index.css";
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}



function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <ClassicFormPage />;
  }
  return <LoginFormPage />;
}

function LoginButton(props) {
  
  return <p onClick={props.onClick}>Sign Up</p>;
}

function SignUPButton(props) {
  return <p onClick={props.onClick}>Login</p>;
}

class Navbar extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));


  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleSignUPClick = this.handleSignUPClick.bind(this);
    this.state = { isLoggedIn: false };
  }
  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleSignUPClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let sel;

    if (isLoggedIn) {
      sel = <SignUPButton onClick={this.handleSignUPClick} />;
    } else {
      sel = <LoginButton onClick={this.handleLoginClick} />;
    }

    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    return (
      <div id="navBar">
        <Greeting isLoggedIn={isLoggedIn} />
        <HotelPage />
        <Router>
          {/* left side */}
          <div>
            <MDBNavbar dark expand="md" fixed="top">
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className="white-text">DEL-LUNA</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                  onClick={this.toggleCollapse("navbarCollapse")}
                />
                <MDBCollapse
                  id="navbarCollapse"
                  isOpen={this.state.collapseID}
                  navbar
                >
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to="#!">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Hotel</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink 
                        className="nav-item nav-link"
                        to="#!"
                      >{sel}</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapseID && overlay}
          </div>
        </Router>
      </div>
    );
  }
}

class ClassicFormPage extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <div id="classicformpage">
        <MDBView>
          {" "}
          {/* sign up from*/}
          <MDBMask
            style={{ paddingTop: 46 }}
            className="d-flex justify-content-center align-items-center gradient"
          >
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h1 style={{ color: "#fff" }}>Sign up</h1>
                  <hr className="hr-light" />
                  <h6 style={{ color: "#fff" }}>
                    กรุณาสมัครสมาชิก เพื่อสิทธิพิเศษที่เหนือกว่า
                  </h6>

                  <button type="button" className="btn btn-outline-primary">
                    LEARNMORE
                  </button>
                </MDBAnimation>

                <MDBCol
                  md="8"
                  xl="4"
                  className="mb-4"
                  style={{ color: "#fff", fontSize: 16 }}
                >
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                        <h3 className="text-center">Register</h3>
                        <hr className="hr-light" />
                        <form onSubmit={this.handleSubmit}>
                          <label>Your First and Last name: </label>
                          <MDBInputGroup
                            className="form-control form-control-sm"
                            inputs={
                              <>
                                <input
                                  className="form-control form-control-sm"
                                  type="text"
                                  placeholder="First name"
                                  required
                                />
                                <input
                                  className="form-control form-control-sm"
                                  type="text"
                                  placeholder="Last name"
                                  required
                                />
                              </>
                            }
                          />

                          <label>Your Birthdate: </label>
                          <input
                            id="bdate"
                            type="date"
                            className="form-control form-control-sm"
                            required
                          />

                          <label>Your Email: </label>
                          <input
                            type="email"
                            className="form-control form-control-sm"
                            id="email2"
                            placeholder="Enter email"
                            name="email"
                            required
                          ></input>

                          <label>Password: </label>
                          <input
                            type="password"
                            className="form-control form-control-sm"
                            id="password"
                            placeholder="Enter password"
                            name="password"
                            required
                          ></input>

                          <label>Confirm Password: </label>
                          <input
                            type="password"
                            className="form-control form-control-sm"
                            id="Cpassword"
                            placeholder="Enter password"
                            name="password"
                            required
                          ></input>
                          <input
                            type="submit"
                            className="btn btn-primary mt-4"
                            value="SIGN UP"
                          ></input>
                        </form>
                        <hr className="hr-light" />
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

class LoginFormPage extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <div id="LoginFormPage">
        <MDBView>
          <MDBMask
            style={{ paddingTop: 126 }}
            className="d-flex justify-content-center align-items-center gradient"
          >
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h1 style={{ color: "#fff" }}>Login</h1>
                  <hr className="hr-light" />
                  <h6 style={{ color: "#fff" }}>
                    กรุณาเข้าสู่ระบบ เพื่อใช้บริการจองโรงแรมไปกับ Hotel Del Luna
                  </h6>

                  <button type="button" className="btn btn-outline-primary">
                    SIGN UP
                  </button>
                </MDBAnimation>

                <MDBCol
                  md="8"
                  xl="4"
                  className="mb-4"
                  style={{ color: "#fff", fontSize: 16 }}
                >
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                        <h3 className="text-center">Login</h3>
                        <hr className="hr-light" />
                        <form onSubmit={this.handleSubmit}>
                          <label>Your Email: </label>
                          <input
                            type="email"
                            className="form-control form-control-sm"
                            id="email2"
                            placeholder="Enter email"
                            name="email"
                            required
                          ></input>

                          <label>Password: </label>
                          <input
                            type="password"
                            className="form-control form-control-sm"
                            id="password"
                            placeholder="Enter password"
                            name="password"
                            required
                          ></input>

                          <input
                            type="submit"
                            className="btn btn-primary mt-4"
                            value="LOGIN"
                          ></input>
                        </form>
                        <hr className="hr-light" />
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}


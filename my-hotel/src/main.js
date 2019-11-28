import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
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
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFormInline,
  MDBAnimation,
  MDBInputGroup
} from "mdbreact";
import "./index.css";
export default class App extends Component {
  render() {
    return (
      <div>
        {/* <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">Test</button> */}
        <ClassicFormPage />
      </div>
    );
  }
}

class ClassicFormPage extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    return (
      <div id="classicformpage">
        <Router>
          <div>
            <MDBNavbar
              class="shadow-lg p-3 mb-5 bg-white rounded"
              dark
              expand="md"
              fixed="top"
            >
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className="white-text">Bearden</strong>
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
                      <MDBNavLink class="nav-item nav-link" to="#!">Login</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapseID && overlay}
          </div>
        </Router>

        <MDBView>
          <MDBMask
            style={{ paddingTop: 116}}
            className="d-flex justify-content-center align-items-center gradient"
          >
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h1 style={{ color: "#fff" }}>Sign up right now!</h1>
                  <hr className="hr-light" />
                  <h6 style={{ color: "#fff" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae, quisquam iste, maiores. Nulla.
                  </h6>
                  <MDBBtn>
                    <button type="button" class="btn btn-outline-primary">
                      LEARNMORE
                    </button>
                  </MDBBtn>
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
                        <h3 className="text-center">Register:</h3>
                        <hr className="hr-light" />
                        <label>Your First and Last name: </label>
                        <MDBInputGroup
                          className="form-control-sm"
                          inputs={
                            <>
                              <MDBInput noTag type="text" hint="first name" />
                              <MDBInput noTag type="text" hint="last name" />
                            </>
                          }
                        />
                        <label>Your Email: </label>
                        <MDBInput
                          type="email"
                          className="form-control form-control-sm"
                          hint="a@b.com"
                        />
                        <label>Password: </label>
                        <MDBInput
                          type="password"
                          className="form-control form-control-sm"
                          hint="at least 6 digit"
                        />
                        <label>Confirm Password: </label>
                        <MDBInput
                          type="password"
                          className="form-control form-control-sm"
                          hint="at least 6 digit"
                        />
                        <div className="text-center mt-4 black-text">
                          {/* <MDBBtn color="indigo">Sign Up</MDBBtn> */}
                          <button
                            type="button"
                            class="btn btn-primary"
                            data-toggle="button"
                            aria-pressed="false"
                            autocomplete="off"
                          >
                            Sign Up
                          </button>
                          <hr className="hr-light" />
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

        <MDBContainer>
          <MDBRow className="py-5">
            <MDBCol md="12" className="text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

//   export default ClassicFormPage;

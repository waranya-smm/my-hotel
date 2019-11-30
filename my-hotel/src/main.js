import React, { Component } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
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

class Navbar extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  constructor() {
    super();
    this.state = { clicked: true };
  }

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    return (
      <div id="navBar">
        <LoginFormPage />
        <ProjectsPage />
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
                      <MDBNavLink className="nav-item nav-link" to="#!">
                        <div
                          onClick={() =>
                            this.setState({ clicked: !this.state.clicked })
                          }
                        >
                          {this.state.clicked ? "Login" : "Sign Up"}
                        </div>
                      </MDBNavLink>
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
          {" "}
          {/* sign up from*/}
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
                        <h3 className="text-center">Register</h3>
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

class ProjectsPage extends Component {
  constructor() {
    super();
    this.state = {
      hotel1: "A-One Star Hotel",
      hotel2: "D Varee Jomtien Beach, Pattaya",
      hotel3: "สวัสดี ซีวิว พัทยา",
      hotel4: "The Grass Serviced Suites by At Mind",
      hotel5: "Woraburi Pattaya Resort & Spa",
      hotel6: "โรงแรม ยู จอมเทียน"
    };
  }

  render() {
    return (
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
          Our Recommended Hotel
        </h2>
        {/* <p className="grey-text w-responsive mx-auto mb-5">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit est laborum.
      </p> */}

        <MDBRow className="text-center">
          <MDBCol lg="4" md="12" className="mb-lg-6 mb-4">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img
                src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000001000269798_wh_140"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <h4 className="font-weight-bold my-3">{this.state.hotel1}</h4>
              <p className="grey-text">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae.
              </p>
              <button type="button" className="btn btn-outline-primary">
                Information
              </button>
            </MDBCardBody>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img
                src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000001000268480_wh_66"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>

            <MDBCardBody className="pb-0">
              <h4 className="font-weight-bold my-3">
              {this.state.hotel2}
              </h4>
              <p className="grey-text">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae.
              </p>

              <button type="button" className="btn btn-outline-primary">
                Information
              </button>
            </MDBCardBody>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img
                src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/1627691941882777130_wh_16"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <h4 className="font-weight-bold my-3">{this.state.hotel3}</h4>
              <p className="grey-text">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae.
              </p>
              <button type="button" className="btn btn-outline-primary">
                Information
              </button>
            </MDBCardBody>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-6 mb-4">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img
                src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002100099866_wh_109"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <h4 className="font-weight-bold my-3">{this.state.hotel4}</h4>
              <p className="grey-text">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae.
              </p>
              <button type="button" className="btn btn-outline-primary">
                Information
              </button>
            </MDBCardBody>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img
                src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002100764572_wh_77"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>

            <MDBCardBody className="pb-0">
              <h4 className="font-weight-bold my-3">{this.state.hotel5}</h4>
              <p className="grey-text">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae.
              </p>

              <button type="button" className="btn btn-outline-primary">
                Information
              </button>
            </MDBCardBody>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img
                src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002100555532_wh_41"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <h4 className="font-weight-bold my-3">{this.state.hotel6}</h4>
              <p className="grey-text">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae.
              </p>
              <button type="button" className="btn btn-outline-primary">
                Information
              </button>
            </MDBCardBody>
          </MDBCol>
         
        </MDBRow>
      </section>
    );
  }
}

//   export default ClassicFormPage;

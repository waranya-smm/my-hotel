import React, { Component } from "react";
import BookingShow from "./bookingShow";

let informStyl = {
  width: "800px",
  maxWidth: "100%",
  margin: "0 auto",
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: "98",
  backgroundColor: "#eee",
  padding: "10px 20px 60px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "colum"
};

let informCloseButtonStyl = {
  marginButton: "15px",
  padding: "5px 8px",
  cursor: "pointer",
  borderRadius: "50%",
  border: "none",
  width: "40px",
  height: "40px",
  fontWeight: "bold",
  textAlign: "right",
  marginRight: "20px"
};

export default class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      phone: null,
      email: null,
      chkIn: null,
      chkOut: null,
      people: null,
      categoryArray: [],
    };
  }


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.phone]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.chkIn]: e.target.value,
      [e.target.chkOut]: e.target.value,
      [e.target.people]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const form = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      chkIn: this.state.chkIn,
      chkOut: this.state.chkOut,
      people: this.state.people
    };
  };

  render() {
    
    let boookingform = (
      <div style={informStyl}>
        <button style={informCloseButtonStyl} onClick={this.props.onClose}>
          x
        </button>
        <div>
          <form
            onSubmit={this.handleSubmit}
            style={{ padding: "1rem", backgroundColor: "#fff" }}
          >
            <h4>{this.props.children}</h4>
            <div className="form-row">
              <br></br>
              <label>ชื่อ-นามสกุลผู้เข้าพัก</label>
              <input
                value={this.state.name}
                onChange={e => this.handleChange(e)}
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter Name"
                required
              />

              <div className="col">
                <label>โทรศัพท์</label>
                <input
                  value={this.state.phone}
                  onChange={e => this.handleChange(e)}
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Enter phone"
                  required
                />
              </div>
              <div className="col">
                <label>อีเมลล์ผู้จอง</label>
                <input
                  value={this.state.email}
                  onChange={e => this.handleChange(e)}
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <label>เช็คอิน</label>
                <input
                  value={this.state.chkIn}
                  onChange={e => this.handleChange(e)}
                  type="date"
                  name="chkIn"
                  className="form-control"
                  required
                />
              </div>
              <div className="col">
                <label>เช็คเอ้าท์</label>
                <input
                  value={this.state.chkOut}
                  onChange={e => this.handleChange(e)}
                  type="date"
                  name="chkOut"
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="col">
                <label>จำนวนผู้เข้าพัก</label>
                <input
                  value={this.state.people}
                  onChange={e => this.handleChange(e)}
                  type="number"
                  name="people"
                  className="form-control"
                  required
                />
              </div>
            </div>

            <button
              style={{ marginTop: "30px" }}
              type="submit"
              className="btn btn-primary"
              value="Submit"
            >
              Submit
            </button>
           
          </form>
        </div>
        <BookingShow onChange={e => this.handleChange(e)}/>
      </div>
    );

    if (!this.props.formOpen) {
      boookingform = null;
    }

    return <div>{boookingform}</div>;
  }
}

import React, { Component } from "react";

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
  padding: "20px 40px 86px",
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
  textAlign: "center",
  marginRight: "20px"
};

export default class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      chkIn: "",
      chkOut: "",
      people: ""
    };

  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

onSubmit = (e) => {
  e.preventDefault();
  const form = {
   name: this.state.name,
   email: this.state.email,
   phone: this.state.phone,
   chkIn: this.state.chkIn,
   chkOut: this.state.chkOut,
   people: this.state.people
  }
    
}
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
            <div className="form-row">
              <label>ชื่อ-นามสกุลผู้เข้าพัก</label>
              <input
                value={this.state.value}
                onChange={e => this.handleChange(e)}
                type="text"
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
      </div>
    );

    if (!this.props.formOpen) {
      boookingform = null;
    }

    return <div>{boookingform}</div>;
  }
}

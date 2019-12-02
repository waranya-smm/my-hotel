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
  padding: "20px 20px 60px",
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

export default class BookingShow extends Component {
  render() {
    let boookingShow = (
      <div style={informStyl}>
        <button style={informCloseButtonStyl} onClick={this.props.onClose}>
          x
        </button>
        <div className="card">
          รายละเอียดการจอง
          <hr className="hr-light" />
          <table>
            <thead>
              <tr>
                <th>Hotel: </th>
                <th>...</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>เช็คอิน</td>
                <td>Table cell</td>
                
              </tr>
              <tr>
                <td>เช็คเอาท์</td>
                <td>Table cell</td>
                
              </tr>
              <tr>
                <td>จำนวนผู้เข้าพักต่อห้อง</td>
                <td>Table cell</td>
                
              </tr>
            </tbody>
           
          </table>
          
        </div>
      </div>
    );

    if (!this.props.isOpen) {
      boookingShow = null;
    }

    return <div>{boookingShow}</div>;
  }
}

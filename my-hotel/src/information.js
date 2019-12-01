import React, { Component } from "react";

let informStyl = {
  width: "800px",
  maxWidth: "100%",
  margin: "0 auto",
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: "99",
  backgroundColor: "#eee",
  padding: "10px 20px 40px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "colum"
};

let informCloseButtonStyl = {
  marginButton: "15px",
  padding: "3px 8px",
  cursor: "pointer",
  borderRadius: "50%",
  border: "none",
  width: "30px",
  height: "30px",
  fontWeight: "bold",
  textAlign: "center"
};

export default class Information extends Component {
  render() {
    let information = (
      <div style={informStyl}>
        <button style={informCloseButtonStyl} onClick={this.props.onClose}>
          x
        </button>
        <div>{this.props.children}</div>
      </div>
    );

    if (!this.props.isOpen) {
      information = null;
    }

    return <div>{information}</div>;
  }
}

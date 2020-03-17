import React, { CSSProperties } from "react";

interface Props {
  size: string;
  overflow: boolean;
}

interface State {}

class Header extends React.Component<Props, State> {


  get styleHeaderSize() {
    if (this.props.size === "desktop") {
      return HeaderStyle;
    } else if (this.props.size === "tablet") {
      return HeaderStyleTablet;
    } else {
      return HeaderStyleMobile;
    }
  }

  render() {
    if (!this.props.overflow) {
      return (
        <header style={this.styleHeaderSize}>
          <h1>SPACE APP</h1>
        </header>
      );
    } else {
      return null;
    }
  }
}

export default Header;

const HeaderStyle: CSSProperties = {
  height: "5rem",
  backgroundColor: "rgba(0, 0, 0, 0.35)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "whitesmoke",
  letterSpacing: "3px",
  fontSize: "1.8rem"
};

const HeaderStyleTablet: CSSProperties = {
  height: "5rem",
  backgroundColor: "rgba(0, 0, 0, 0.35)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "whitesmoke",
  letterSpacing: "1px",
  fontSize: "1.2rem"
};

const HeaderStyleMobile: CSSProperties = {
  height: "5rem",
  backgroundColor: "rgba(0, 0, 0, 0.35)",
  display: "flex",
  justifyContent: "flex-end",
  marginRight: "5%",
  alignItems: "center",
  color: "whitesmoke",
  letterSpacing: "1px",
  fontSize: "0.8rem"
};
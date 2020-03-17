import React, { CSSProperties } from "react";

interface Props {
  size: string;
  overflow: boolean;
}

interface State {}

class Footer extends React.Component<Props, State> {


  styleFooterSize() {
    if (this.props.size === "desktop") {
      return FooterStyleDesktop;
    } else if (this.props.size === "tablet") {
      return FooterStyleTablet;
    } else {
      return FooterStyleMobile;
    }
  }

  styleFooterIconSize() {
    if (this.props.size === "desktop") {
      return FooterIconStyleDesktop;
    } else if (this.props.size === "tablet") {
      return FooterIconStyleTablet;
    } else {
      return FooterIconStyleMobile;
    }
  }

  render() {
    if (!this.props.overflow) {
      return (
        <footer style={this.styleFooterSize()}>
          <p>
            <img
              style={this.styleFooterIconSize()}
              src="./../assets/info-solid.svg"
              alt="info"
            />
          </p>
          <p>
            <img
              style={this.styleFooterIconSize()}
              src="./../assets/instagram-brands.svg"
              alt="instagram"
            />
          </p>
          <p>
            <img
              style={this.styleFooterIconSize()}
              src="./../assets/comment-regular.svg"
              alt="chat"
            />
          </p>
        </footer>
      );
    } else {
      return null;
    }
  }
}

export default Footer;

const FooterStyleDesktop: CSSProperties = {
  height: "5rem",
  backgroundColor: "rgba(0, 0, 0, 0.45)",
  position: "absolute",
  bottom: "0",
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  color: "whitesmoke"
};

const FooterStyleTablet: CSSProperties = {
  height: "3.6rem",
  backgroundColor: "rgba(0, 0, 0, 0.45)",
  position: "absolute",
  bottom: "0",
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  color: "whitesmoke"
};

const FooterStyleMobile: CSSProperties = {
  height: "3.6rem",
  backgroundColor: "rgba(0, 0, 0, 0.45)",
  position: "absolute",
  bottom: "0",
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  color: "whitesmoke"
};

const FooterIconStyleDesktop: CSSProperties = {
  height: "2.5rem",
  width: "2.5rem"
};

const FooterIconStyleTablet: CSSProperties = {
  height: "2rem",
  width: "2rem"
};

const FooterIconStyleMobile: CSSProperties = {
  height: "1.5rem",
  width: "1.5rem"
};
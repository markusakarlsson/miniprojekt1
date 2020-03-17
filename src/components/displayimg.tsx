import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { PhotoData } from "../apiTypes";

interface Props {
  displayNone: () => void;
  size: string;
  photoData: PhotoData;
}

interface State {}

class DisplayImg extends React.Component<Props, State> {


  styleTextSize() {
    if (this.props.size === "desktop") {
      return TextStyleDesktop;
    } else if (this.props.size === "tablet") {
      return TextStyleTablet;
    } else {
      return TextStyleMobile;
    }
  }

  render() {
    return (
      <Link to={"/images"} style={LinkStyle}>
        <div
          style={BigImgDivStyle}
          onClick={this.props.displayNone}
          key={this.props.photoData.id}
        >
          <p style={this.styleTextSize()}>
            Earthdate {this.props.photoData.earth_date}
          </p>
          <img
            style={BigImgStyle}
            src={this.props.photoData.img_src}
            alt={this.props.photoData.earth_date}
          />
        </div>
      </Link>
    );
  }
}

export default DisplayImg;

const TextStyleDesktop: CSSProperties = {
  zIndex: 2500,
  marginTop: "2rem",
  marginBottom: "1rem",
  fontSize: "2rem",
  textDecoration: "none",
  color: "whitesmoke"
};

const TextStyleTablet: CSSProperties = {
  zIndex: 2500,
  marginTop: "2rem",
  marginBottom: "1rem",
  fontSize: "2rem",
  textDecoration: "none",
  color: "whitesmoke"
};

const TextStyleMobile: CSSProperties = {
  zIndex: 2500,
  marginTop: "2rem",
  marginBottom: "1rem",
  fontSize: "1rem",
  textDecoration: "none",
  color: "whitesmoke"
};

const LinkStyle: CSSProperties = {
  textDecoration: "none",
  color: "whitesmoke"
};

const BigImgDivStyle: CSSProperties = {
  zIndex: 2000,
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none"
};

const BigImgStyle: CSSProperties = {
  zIndex: 1000,
  border: "solid black 3px",
  height: "auto",
  width: "80%"
};
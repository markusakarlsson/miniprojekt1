import React, { CSSProperties } from "react";
import ErrorBoundary from "./../errorboundary";
import { Link } from "react-router-dom";
import { MetroSpinner } from "react-spinners-kit";

interface Props {
  displayFunc: () => void;
  size: string;
  dataImg: any;
}

interface State {
  isLoading: boolean;
}

class Item extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isLoading: true
    };
    const image = new Image();
    image.onload = () => this.doneLoading();
    image.src = props.dataImg.img_src;

    this.doneLoading = this.doneLoading.bind(this);
  }

  doneLoading() {
    this.setState(state => ({
      isLoading: !state.isLoading
    }));
  }

  styleItemSize() {
    if (this.props.size === "desktop") {
      return LiStyleDesktop;
    } else if (this.props.size === "tablet") {
      return LiStyleTablet;
    } else {
      return LiStyleMobile;
    }
  }

  render() {
    if (!this.state.isLoading) {
      return (
        <Link to={"/images/" + this.props.dataImg.id} style={LiStyleDesktop}>
          <ErrorBoundary>
            <li
              key={this.props.dataImg.id}
              onClick={this.props.displayFunc}
              style={this.styleItemSize()}
            >
              <p style={TitleStyle}>{this.props.dataImg.id}</p>
              <img
                style={
                  this.props.size === "desktop" ? ImgStyle : ImgStyleMobile
                }
                src={this.props.dataImg.img_src}
                alt={this.props.dataImg.id}
              />
            </li>
          </ErrorBoundary>
        </Link>
      );
    } else {
      return (
        <li key={this.props.dataImg.id} style={LiStyleDesktop}>
          <MetroSpinner />
        </li>
      );
    }
  }
}

export default Item;

const TitleStyle: CSSProperties = {
  textAlign: "center",
  color: "white",
  textDecoration: "none",
  paddingBottom: "1rem"
};

const LiStyleDesktop: CSSProperties = {
  textDecoration: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const LiStyleTablet: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const LiStyleMobile: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const ImgStyle: CSSProperties = {
  height: "auto",
  width: "100%",
  maxWidth: "15rem",
  overflow: "hidden",
  objectFit: "contain"
};

const ImgStyleMobile: CSSProperties = {
  height: "auto",
  width: "100%",
  maxWidth: "15rem",
  overflow: "hidden",
  objectFit: "contain"
};
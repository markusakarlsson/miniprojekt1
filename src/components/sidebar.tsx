import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";

interface Props {
  size: string;
  sidebarToggle: () => void;
  path: string;
}

interface State {}

class Sidebar extends React.Component<Props, State> {

  styleSidebarSize() {
    if (this.props.size === "desktop") {
      return SidebarStyleDesktop;
    } else if (this.props.size === "tablet") {
      return SidebarStyleTablet;
    } else {
      return SidebarStyleMobile;
    }
  }

  styleIconSize() {
    if (this.props.size === "desktop") {
      return IconStyleDesktop;
    } else if (this.props.size === "tablet") {
      return IconStyleTablet;
    } else {
      return IconStyleMobile;
    }
  }

  render() {
    return (
      <Link to={this.props.path} onClick={this.props.sidebarToggle}>
        <aside>
          <div style={this.styleSidebarSize()}>
            <div className="icon-move">
              <i style={this.styleIconSize()} className="fas fa-rocket"></i>
            </div>
          </div>
        </aside>
      </Link>
    );
  }
}

export default Sidebar;

const IconStyleDesktop: CSSProperties = {
  zIndex: 1500,
  color: "white",
  marginLeft: "-6.5rem",
  marginTop: "-2rem",
  fontSize: "3rem",
  transform: "rotate(225deg)"
};
const IconStyleTablet: CSSProperties = {
  zIndex: 1500,
  color: "white",
  marginLeft: "-6.5rem",
  marginTop: "-2rem",
  fontSize: "2.4rem",
  transform: "rotate(225deg)"
};
const IconStyleMobile: CSSProperties = {
  zIndex: 1500,
  color: "white",
  marginLeft: "-6.5rem",
  marginTop: "-2rem",
  fontSize: "2rem",
  transform: "rotate(225deg)"
};

const SidebarStyleDesktop: CSSProperties = {
  top: "-6.5rem",
  left: "-2rem",
  width: "0",
  height: "0",
  borderTop: "10rem solid transparent",
  borderBottom: "10rem solid transparent",
  borderLeft: "10rem solid var(--color4)",
  transform: "rotate(225deg)",
  position: "fixed"
};

const SidebarStyleTablet: CSSProperties = {
  top: "-6.5rem",
  left: "-2rem",
  width: "0",
  height: "0",
  borderTop: "8.5rem solid transparent",
  borderBottom: "8.5rem solid transparent",
  borderLeft: "8.5rem solid var(--color4)",
  transform: "rotate(225deg)",
  position: "fixed"
};

const SidebarStyleMobile: CSSProperties = {
  top: "-6rem",
  left: "-2rem",
  width: "0",
  height: "0",
  borderTop: "7.5rem solid transparent",
  borderBottom: "7.5rem solid transparent",
  borderLeft: "7.5rem solid var(--color4)",
  transform: "rotate(225deg)",
  position: "fixed"
};

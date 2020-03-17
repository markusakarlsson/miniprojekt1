import React, { CSSProperties } from "react";
import Item from "./item";
import DisplayImg from "./displayimg";
import ErrorBoundary from "./../errorboundary";
import { PhotoData } from "../apiTypes";
import { MetroSpinner } from "react-spinners-kit";

interface Props {
  size: string;
  data: PhotoData[];
  handleSliderChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
  max: number;
  defaulValue: number;
  isLoading: boolean;
}

interface State {
  toggle: boolean;
  index: number;
}

class Items extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      toggle: false,
      index: 0
    };

    this.displayImg = this.displayImg.bind(this);
    this.displayNone = this.displayNone.bind(this);
  }

  displayImg(id: number) {
    this.setState(state => ({
      toggle: true,
      index: id
    }));
  }

  displayNone() {
    this.setState(state => ({
      toggle: false
    }));
  }

  render() {
    if (!this.state.toggle) {
      return (
        <ErrorBoundary>
          <>
            <input
              defaultValue={this.props.defaulValue}
              style={RangeInput}
              onChange={this.props.handleSliderChanged}
              id="typeinput"
              type="range"
              min="0"
              max={this.props.max - 1}
              step="1"
            />
            {this.props.isLoading ? (
              <div style={SpinnerStyle}>
                <MetroSpinner />
              </div>
            ) : (
                <ul
                  style={this.props.size === "desktop" ? UlStyle : UlStyleMobile}
                >
                  {this.props.data.map((data, index) => (
                    <Item
                      size={this.props.size}
                      displayFunc={() => this.displayImg(index)}
                      dataImg={data}
                    />
                  ))}
                </ul>
              )}
          </>
        </ErrorBoundary>
      );
    } else {
      return (
        <ErrorBoundary>
          <DisplayImg
            size={this.props.size}
            photoData={this.props.data[this.state.index]}
            displayNone={this.displayNone}
          />
        </ErrorBoundary>
      );
    }
  }
}

export default Items;

const UlStyle: CSSProperties = {
  paddingTop: "5rem",
  height: "100%",
  width: "80%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
  gap: "5rem",
  padding: "2rem"
};

const UlStyleMobile: CSSProperties = {
  height: "100%",
  width: "80%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
  gap: "2rem",
  padding: "1rem"
};

const RangeInput: CSSProperties = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "80%",
  marginTop: "4rem",
  marginBottom: "4rem",
  color: 'white',
  backgroundColor: '#464646',
};
const SpinnerStyle: CSSProperties = {
  zIndex: 3000,
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  minHeight: "100vh"
};
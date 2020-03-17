import React, { CSSProperties } from "react";
import Items from "./items";
import { PhotoManifestData, ManifestData, PhotoData } from "../apiTypes";

interface Props {
  size: string;
}

interface State {
  isLoading: boolean;
  sol: number;
  items: [];
  data: PhotoData[];
  filteredList: PhotoManifestData[];
  value: number;
}

class SidebarDiv extends React.Component<Props, State> {
  private readonly APIKey: string = "hTSax0xjObcGX6GTkOEnKgLLmEALMhW0vuB7We8v";
  private readonly manifest: string = "manifests";
  private readonly camera: string = "NAVCAM";
  private readonly selectedRover: string = "Curiosity";
  private readonly URL: string =
    "https://api.nasa.gov/mars-photos/api/v1/" +
    this.manifest +
    "/" +
    this.selectedRover +
    "?api_key=" +
    this.APIKey;

  constructor(props: Props) {
    super(props);
    this.state = {
      isLoading: true,
      items: [],
      data: [],
      sol: 1,
      filteredList: [],
      value: 0
    };
  }

  async componentDidMount() {
    const response = await fetch(this.URL);
    const data: ManifestData = await response.json();
    const filteredList = this.filterManifest(data);
    this.setState({ filteredList }, () => {
      this.loadImages();
    });
  }

  filterManifest(data: ManifestData) {
    return data.photo_manifest.photos.filter(photo => {
      let cameraExists = false;
      photo.cameras.forEach(camera => {
        if (camera === "NAVCAM") {
          cameraExists = true;
        }
      });
      return cameraExists;
    });
  }

  async loadImages() {
    this.setState({ isLoading: true });

    const { filteredList } = this.state;
    const response = await fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/" +
      "curiosity/photos?sol=" +
      this.state.sol +
      "&page=1&camera=" +
      this.camera +
      "&api_key=" +
      this.APIKey
    );

    const data = await response.json();

    this.setState({
      data: data.photos,
      isLoading: false,
      filteredList: filteredList
    });
  }

  timer: any;
  handleSliderChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(this.timer);
    this.setState({ value: Number(event.target.value) });
    const value = Number(event.target.value);
    this.setState({ sol: this.state.filteredList[value].sol });
    this.timer = setTimeout(() => {
      this.loadImages();
    }, 2000);
  };

  render() {
    return (
      <div style={DisplayStyle}>
        <h3 style={H3Style}>Sol (day on Mars) {this.state.value}</h3>

        <Items
          isLoading={this.state.isLoading}
          handleSliderChanged={this.handleSliderChanged}
          defaulValue={this.state.value}
          max={this.state.filteredList.length}
          size={this.props.size}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default SidebarDiv;

const DisplayStyle: CSSProperties = {
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "rgba(0,0,0,0.5)",
  minHeight: "100vh"
};

const H3Style: CSSProperties = {
  color: "white",
  marginTop: "7rem"
};
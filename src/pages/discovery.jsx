import React from "react";
import HeaderBig from "../components/header/headerBig";
import SectionDiscovery from "../components/sectionDiscovery/sectionDiscovery";

class Discovery extends React.Component {
  render() {
    return (<>
      <HeaderBig src="./img/ellipse.svg" />
      <SectionDiscovery />
    </>)
  }
}

export default Discovery;
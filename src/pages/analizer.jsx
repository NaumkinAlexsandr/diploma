import React from "react";
import HeaderBig from "../components/header/headerBig";
import SectionAnalizer from "../components/sectionAnalizer/sectionAnalizer";

class Analizer extends React.Component {
    render() {
        return (<>
            <HeaderBig src="./img/rectangle.svg" />
            <SectionAnalizer />
        </>)
    }
}

export default Analizer;
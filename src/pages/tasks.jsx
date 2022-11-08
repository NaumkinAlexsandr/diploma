import React from "react";
import HeaderBig from "../components/header/headerBig";
import SectionTasks from "../components/sectionTasks/sectionTasks";

class Tasks extends React.Component {
    render() {
        return (<>
            <HeaderBig src="./img/polygon2.svg" />
            <SectionTasks />
        </>)
    }
}

export default Tasks;
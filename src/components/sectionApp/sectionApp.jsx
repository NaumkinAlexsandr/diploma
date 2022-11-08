import React from "react";
import { Link } from "react-router-dom";
import './_sectionApp.scss';

class SectionApp extends React.Component {
  render() {
    return (
        <section className="section-app">
          <div className="container">
            <p className="title">Apps</p>
            <ul className="section-app__nav">
              <li className="nav-ilem">
                <img src="./img/star.svg" className="nav-ilem__image" alt="app_img" />
                <Link to="/graduate_work_js/leadTable" className="subtitle nav-item__link">Lead Table</Link> 
              </li>
              <li className="nav-ilem">
                <img src="./img/polygon2.svg" className="nav-ilem__image" alt="app_img" />
                <Link to="/graduate_work_js/tasks" className="subtitle nav-item__link">Tasks</Link>
              </li>
              <li className="nav-ilem">
                <img src="./img/ellipse.svg" className="nav-ilem__image" alt="app_img" />
                <Link to="/graduate_work_js/discovery" className="subtitle nav-item__link">Discovery</Link>
              </li>
              <li className="nav-ilem">
                <img src="./img/rectangle.svg" className="nav-ilem__image" alt="app_img" />
                <Link to="/graduate_work_js/analizer" className="subtitle nav-item__link">Analizer</Link>
              </li>
            </ul>
          </div>
        </section>
      )
  }
}

export default SectionApp;
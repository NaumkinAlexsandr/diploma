import React from "react";
import "./_sectionDiscovery.scss"

class SectionDiscovery extends React.Component {
  render() {
    return (
      <section className="section-discovery">
        <div className="container">
          <div className="section-discovery__title">
            <p className="title">Discovery</p>
            <div className="title-image">
              <img src="./img/plus.png" alt="discovery_img" />
            </div>
          </div>
          <div className="section-discovery__list">
            <ul className="list-items">
              <li className="subtitle">Upwork</li>
              <li className="text">Upwork script 1</li>
              <li className="text">Upwork script 2. Link to filtered jobs</li>
              <li className="text">Upwork script 3. Check similar jobs</li>
            </ul>
            <ul className="list-items">
              <li className="subtitle">Telegram</li>
              <li className="text">Upwork script 1</li>
              <li className="text">Upwork script 2. Link to filtered jobs</li>
              <li className="text">Upwork script 3. Check similar jobs</li>
            </ul>
            <ul className="list-items">
              <li className="subtitle">Linkedin</li>
              <li className="text">Upwork script 1</li>
              <li className="text">Upwork script 2. Link to filtered jobs</li>
              <li className="text">Upwork script 3. Check similar jobs</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default SectionDiscovery;
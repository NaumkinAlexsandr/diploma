import React from "react";
import { TitleDiscovery } from "./titleDiscovery";
import { NewLi } from "../../core/newLI/newLI";
import "./titleDiscovery.scss";

function FormDiscovery(props) {
  return (
    <div id="discovery">
      <TitleDiscovery />
      <div id="social">
        <ul>
          Upwork
          <NewLi liText="Upwork script 1." />
          <NewLi liText="Upwork script 2. Link to filtered jobs" />
          <NewLi liText="Upwork script 3. Check similar jobs" />
        </ul>
        <ul>
          Telegram
          <NewLi liText="Upwork script 1." />
          <NewLi liText="Upwork script 2. Link to filtered jobs" />
          <NewLi liText="Upwork script 3. Check similar jobs" />
        </ul>
        <ul>
          Linkedin
          <NewLi liText="Upwork script 1." />
          <NewLi liText="Upwork script 2. Link to filtered jobs" />
          <NewLi liText="Upwork script 3. Check similar jobs" />
        </ul>
      </div>
    </div>
  );
}

export { FormDiscovery };

import React from "react";
import { NewLi } from "../../core/newLI/newLI";
import "./titleDiscovery.scss";
import { DiscoveryTask } from "./DiscoveryTask";

function FormDiscovery(props) {
  return (
    <>
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
        <DiscoveryTask></DiscoveryTask>
      </div>
    </>
  );
}

export { FormDiscovery };

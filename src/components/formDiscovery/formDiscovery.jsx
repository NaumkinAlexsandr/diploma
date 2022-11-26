import React from "react";
import "./titleDiscovery.scss";
import { DiscoveryTask } from "./DiscoveryTask";
import { DiscoveryList } from "./DiscoveryList";
import { useSelector } from "react-redux";

function FormDiscovery() {
  const scripts = useSelector((state) => state.scripts.scripts);
  const sources = useSelector((state) => state.sources.sources);

  const upworkLists = [
    {
      id: new Date().setUTCMilliseconds(1),
      title: "Upwork",
      scriptOne: "Upwork script 1",
      scriptTwo: "Upwork script 2. Link to filtered jobs",
      scriptThree: "Upwork script 3. Check similar jobs",
    },
    {
      id: new Date().setUTCMilliseconds(2),
      title: "Telegram",
      scriptOne: "Upwork script 1",
      scriptTwo: "Upwork script 2. Link to filtered jobs",
      scriptThree: "Upwork script 3. Check similar jobs",
    },
    {
      id: new Date().setUTCMilliseconds(3),
      title: "Linkedin",
      scriptOne: "Upwork script 1",
      scriptTwo: "Upwork script 2. Link to filtered jobs",
      scriptThree: "Upwork script 3. Check similar jobs",
    },
  ];

  return (
    <>
      <div id="social">
        {upworkLists.map((script) => (
          <ul className="list-items" key={script.id}>
            {script.title}
            <li className="text">{script.scriptOne}</li>
            <li className="text">{script.scriptTwo}</li>
            <li className="text">{script.scriptThree}</li>
          </ul>
        ))}
        <ul className="newSources">
          {sources.map((source) => (
            <DiscoveryList key={source.id} {...source} />
          ))}
          <>
            {scripts.map((script) => (
              <DiscoveryList key={script.id} {...script} />
            ))}
          </>
        </ul>
      </div>
    </>
  );
}

export { FormDiscovery };

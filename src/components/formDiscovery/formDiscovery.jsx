import React from "react";
import "./titleDiscovery.scss";
import { DiscoveryList } from "./DiscoveryList";
import { useSelector } from "react-redux";

function FormDiscovery() {
  const scripts = useSelector((state) => state.scripts.scripts);
  const leads = useSelector((state) => state.leads.leads);

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
          <ul key={script.id}>
            {script.title}
            <li>{script.scriptOne}</li>
            <li>{script.scriptTwo}</li>
            <li>{script.scriptThree}</li>
          </ul>
        ))}
        <>
          {scripts.map((script) => (
            <DiscoveryList key={script.id} {...script} />
          ))}
        </>
      </div>
    </>
  );
}

export { FormDiscovery };
/*
<>
  {leads.map((lead) => (
    <ul key={lead.id}>
      <DiscoveryTask {...lead} />
      {scripts.map((script) => (
        <li key={script.id}>
          <DiscoveryList {...script} />
        </li>
      ))}
    </ul>
  ))}
</>;
*/

/*
{scripts.map((script) => (
  <ul key={script.id}>
    {leads.map((lead) => (
      <DiscoveryTask key={lead.id} {...lead} />
    ))}
    <DiscoveryList {...script} />
  </ul>
))}
*/

import { useSelector } from "react-redux";
import { DiscoveryList } from "./DiscoveryList";
import React from "react";

const DiscoveryTask = () => {
  const scripts = useSelector((state) => state.scripts.scripts);

  return (
    <ul>
      <>
        {scripts.map((script) => (
          <DiscoveryList key={script.id} {...script} />
        ))}
      </>
    </ul>
  );
};

export { DiscoveryTask };

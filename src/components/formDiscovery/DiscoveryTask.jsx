import { DiscoveryList } from "./DiscoveryList";
import { useDispatch, useSelector } from "react-redux";

import React from "react";

const DiscoveryTask = ({ sources }) => {
  const dispatch = useDispatch();

  return <ul>{sources}</ul>;
};

export { DiscoveryTask };

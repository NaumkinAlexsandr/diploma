import React from "react";
import { Percent } from "../../core/percent/Percent";
import { Scale } from "../../core/scale/Scale";
import "./formAnalizer.scss";

function FormAnalizer() {
  return (
    <div id="analizerForm">
      <div>
        <Percent className="scale scale_one" percent="30" text="Make Offer" />
      </div>
      <div>
        <Percent className="scale scale_two" percent="28" text="Bid" />
      </div>
      <div>
        <Percent
          className="scale scale_three"
          percent="4"
          text="Invite for First Call"
        />
      </div>
    </div>
  );
}

export { FormAnalizer };

import React from "react";
import { Percent } from "../../core/percent/percent";
import { Scale } from "../../core/scale/scale";
import "./formAnalizer.scss";

function FormAnalizer(props) {
  return (
    <div id="analizerForm">
      <div>
        <Scale className="scale scale_one" />
        <Percent percent="30" text="Make Offer" />
      </div>
      <div>
        <Scale className="scale scale_two" />
        <Percent percent="28" text="Bid" />
      </div>
      <div>
        <Scale className="scale scale_three" />
        <Percent percent="4" text="Invite for First Call" />
      </div>
      <div>
        <Scale className="scale scale_three" />
        <Percent percent="4" text="Invite for First Call" />
      </div>
      <div>
        <Scale className="scale scale_three" />
        <Percent percent="4" text="Invite for First Call" />
      </div>
      <div>
        <Scale className="scale scale_three" />
        <Percent percent="4" text="Invite for First Call" />
      </div>
      <div>
        <Scale className="scale scale_three" />
        <Percent percent="4" text="Invite for First Call" />
      </div>
      <div>
        <Scale className="scale scale_three" />
        <Percent percent="4" text="Invite for First Call" />
      </div>
      <div>
        <Scale className="scale scale_three" />
        <Percent percent="4" text="Invite for First Call" />
      </div>
      <div>
        <Scale className="scale scale_three" />
        <Percent percent="4" text="Invite for First Call" />
      </div>
      <div>
        <Scale className="scale scale_three" />
        <Percent percent="4" text="Invite for First Call" />
      </div>
    </div>
  );
}

export { FormAnalizer };

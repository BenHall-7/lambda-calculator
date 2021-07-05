import React, {useState} from "react";
import {specials} from "../../../data";
import {SpecialButton} from "./SpecialButton";

export const Specials = () => {
  const [specialState, setSpecialState] = useState(specials);
  return (
    <div>
      {specialState.map((sp, i) => <SpecialButton sp={sp} key={i}/>)}
    </div>
  );
};

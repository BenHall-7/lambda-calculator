import React, {useState} from "react";
import {specials} from "../../../data";
import SpecialButton from "./SpecialButton";

const Specials = () => {
  const [specialState, setSpecialState] = useState[specials];
  return (
    <div>
      {specialState.map(sp => <SpecialButton sp={sp} />)}
    </div>
  );
};

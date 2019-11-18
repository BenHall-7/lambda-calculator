import React, {useState} from "react";
import {operators} from "../../../data";
import {OperatorButton} from "./OperatorButton";

export const Operators = () => {
  const [operatorState, setOperatorState] = useState[operators];
  return (
    <div>
      {operatorState.map(op => <OperatorButton op={op}/>)}
    </div>
  );
};

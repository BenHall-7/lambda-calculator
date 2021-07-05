import React, {useState} from "react";
import {numbers} from "../../../data";
import {NumberButton} from "./NumberButton";

export const Numbers = () => {
  const [numberState, setNumberState] = useState(numbers);
  return (
    <div>
      {numberState.map((num, i) => <NumberButton num={num} key={i}/>)}
    </div>
  );
};

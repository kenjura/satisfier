// @flow

import type { Part as PartType } from "../state/part";

import * as React from "react";
import { useState } from "react";
import { getAllParts } from "../model/getAllParts.js";

import { useStore } from "../store";

let allParts = getAllParts();

type Props = {
	onChangePartQuantity: (part:PartType, quantity:number) => void,
  part: PartType,
};

export default function Part(props: Props): React.MixedElement {

  const { part } = props;

  let [qty, setQty] = useState(part.quantity || 1);

  // const part = useStore(state => state.parts[props.uid]) || {};
  const changePart = useStore((state) => state.changePart);
//   const changePartQuantity = useStore((state) => state.changePartQuantity);
  const removePart = useStore((state) => state.removePart);


  return (
    <div className="part">
      <select
        // onChange={evt => changePart(props.uid, evt.target.value)}
        value={part.recipe}
      >
        <option>Choose a part</option>
        {allParts.map((p) => (
          <option key={p.recipe + p["Output qty/min"]}>{p.recipe}</option>
        ))}
      </select>
      <input
        type="number"
        default="1"
        min="0"
        value={part.quantity}
		onChange={evt => props.onChangePartQuantity(part, Number(evt.target.value))}
        //  onChange={evt => changePartQuantity(props.uid, evt.target.value)}
      />
      <button 
	//   onClick={() => removePart(props.uid)}
	  >remove part</button>
    </div>
  );
}

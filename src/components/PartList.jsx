// @flow
import type { Part as PartType } from '../state/part';

import * as React from 'react';
import { useCallback, useState } from "react";
import Part from './Part.jsx';

import { useStore } from '../store';
import * as part from "../state/part";
import { partListAtom } from '../state/part';
import { useRecoilState } from "recoil";

type Props = {}

export default function PartList(props:Props):React.MixedElement {
	// expected props: parts, addPart

	const [ partList, setPartList ] = useRecoilState(partListAtom);
	console.log('partList length ', partList.size);
	console.log('HMF quantity ', partList.get('Heavy Modular Frame')?.quantity);

	// const parts = useStore(state => state.parts);
	// const addPart = useStore(state => state.addPart);
	const calculate = useStore(state => state.calculate);

	const addPart = () => {
		const newPart = { recipe:'New Part', quantity: 1 };
		setPartList(oldPartList => {
			oldPartList.set('New Part', newPart);
			return oldPartList;
		});
	};

	const onChangePartQuantity = (part:PartType, quantity:number) => {
		const newPart = { ...part, quantity };
		console.log('new part quantity ', quantity);
		partList.set(part.recipe, newPart);
		setPartList(partList);
	};

	return <div className="part-list">
 		{ 
 			Array.from(partList.keys()).map(key => <Part part={partList.get(key)} onChangePartQuantity={onChangePartQuantity} key={key} />)
 		}
		<button onClick={addPart}>Add Part</button>
		<button onClick={calculate}>Calculate</button>


	</div>	
}

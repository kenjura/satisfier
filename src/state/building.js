// @flow

import type { RecoilState } from "recoil";

import { atom } from 'recoil';

export type Building = {
    recipe: string,
    quantity: number,
}

const tempDefault = new Map();
tempDefault.set('Modular Frame', { recipe:'Modular Frame', quantity:1 });
tempDefault.set('Computer', { recipe:'Computer', quantity:1 });

export const buildingList:RecoilState<Map<string, Building>> = atom<Map<string, Building>>({
    key: 'buildingList', // unique ID (with respect to other atoms/selectors)
    // default: new Map(), // default value (aka initial value)
    default: tempDefault,
});
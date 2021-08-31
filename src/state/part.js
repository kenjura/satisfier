// @flow

import type { RecoilState } from "recoil";

import { atom } from 'recoil';

export type Part = {
    recipe: string,
    quantity: number,
}

const tempDefault = new Map();
tempDefault.set('Heavy Modular Frame', { recipe:'Heavy Modular Frame', quantity:1 });
tempDefault.set('Computer', { recipe:'Computer', quantity:1 });

export const partListAtom:RecoilState<Map<string, Part>> = atom<Map<string, Part>>({
    key: 'partList', // unique ID (with respect to other atoms/selectors)
    // default: new Map(), // default value (aka initial value)
    default: tempDefault,
});
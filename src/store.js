import create from 'zustand';
import produce from 'immer';
import uid from './helper/uid';

const useStore = create(set => ({
  parts: { 1234: { uid:1234, Recipe:'blarg', buildingQty:1 } },
  addPart: newRecipe => set(state => {
  	const newPart = { uid:uid(), Recipe:'', buildingQty:1 };
  	const newState = produce(state, draft => {
  		draft.parts[newPart.uid] = newPart;
  	});
  	return newState;
  }),
  changePart: (uid, newRecipe) => set(state => {
  	const newState = produce(state, draft => {
  		draft.parts[uid].Recipe = newRecipe;
  	});
  	return newState;
  }),
  changePartQuantity: (uid, buildingQty) => set(state => {
  	return produce(state, draft => {
  		draft.parts[uid].buildingQty = buildingQty
  	});
  }),
  buildings: [],
  dump: () => JSON.stringify(state),
}))

export { useStore }


function addPart() {

}
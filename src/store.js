import calculate from './helper/calculate';
import create from 'zustand';
import produce from 'immer';
import uid from './helper/uid';

const useStore = create(set => ({
  parts: { 
  	1234: { uid:1234, recipe:'Computer', buildingQty:1 },
  	4567: { uid:4567, recipe:'Heavy Modular Frame', buildingQty:1 },
  },
  addPart: newRecipe => set(state => {
  	const newPart = { uid:uid(), recipe:'', buildingQty:1 };
  	const newState = produce(state, draft => {
  		draft.parts[newPart.uid] = newPart;
  	});
  	return newState;
  }),
  changePart: (uid, newRecipe) => set(state => {
  	const newState = produce(state, draft => {
  		draft.parts[uid].recipe = newRecipe;
  	});
  	return newState;
  }),
  changePartQuantity: (uid, buildingQty) => set(state => {
  	return produce(state, draft => {
  		draft.parts[uid].buildingQty = buildingQty
  	});
  }),
  calculate: () => set(state => {
  	return produce(state, draft => {
  		const newBuildings = calculate(state.parts, state.enabledAlts);
  		draft.buildings = newBuildings;
  	});
  }),
  buildings: {
  	'Heavy Modular Frames': { uid:123, recipe:'Heavy Modular Frames', buildingQty:3 },
  	'Computer': { uid:456, recipe:'Computer', buildingQty:33 },
  },
  enabledAlts: { 'Heavy Encased Frame':true },
  setEnabledAlt: (recipe, value) => set(state => {
    return produce(state, draft => {
      draft.enabledAlts[recipe] = value;
    });
  }),
  dump: () => JSON.stringify(state),
}))

export { useStore }


function addPart() {

}
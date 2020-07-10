import { IStack, StacksAction, ActionTypes } from '../actions';

const INITIAL_STATE: IStack[] = [];

const stacksReducer = (state = INITIAL_STATE, action: StacksAction) => {
	switch (action.type) {
		case ActionTypes.loadStacks:
			return action.payload;
		case ActionTypes.addStack:
			return [...state, action.payload];

		default:
			return state;
	}
};

export default stacksReducer;

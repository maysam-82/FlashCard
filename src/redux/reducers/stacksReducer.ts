import { IStack, Action, ActionTypes } from '../actions';

const INITIAL_STATE: IStack[] = [];

const stacksReducer = (state = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case ActionTypes.loadStacks:
			return action.payload;

		default:
			return state;
	}
};

export default stacksReducer;

import { IStack, Action, ActionTypes } from '../actions';

const INITIAL_STATE: IStack = {
	title: null,
	id: null,
	cards: null,
};

export const stackReducer = (state = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case ActionTypes.setStack:
			const { title, id, cards } = action.payload;
			return { ...state, title, id, cards };

		default:
			return state;
	}
};

export default stackReducer;

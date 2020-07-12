import { IStack, StackAction, ActionTypes } from '../actions';

const INITIAL_STATE: IStack = {
	title: null,
	id: 0,
	cards: null,
};

export const stackReducer = (state = INITIAL_STATE, action: StackAction) => {
	switch (action.type) {
		case ActionTypes.setStack:
			const { title, id, cards } = action.payload;
			return { ...state, title, id, cards };

		default:
			return state;
	}
};

export default stackReducer;

import { combineReducers } from 'redux';
import stackReducer from './stackReducer';
import { IStack } from '../actions';
import stacksReducer from './stacksReducer';

export interface IStoreState {
	stack: IStack;
	stacks: IStack[];
}

export const reducers = combineReducers<IStoreState>({
	stack: stackReducer,
	stacks: stacksReducer,
});

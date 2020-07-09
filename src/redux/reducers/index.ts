import { combineReducers } from 'redux';
import stackReducer from './stackReducer';
import { IStack } from '../actions';

export interface IStoreState {
	stack: IStack;
}

export const reducers = combineReducers<IStoreState>({
	stack: stackReducer,
});

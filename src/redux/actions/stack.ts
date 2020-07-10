import { ActionTypes } from './actionTypes';
import { ICard } from '../../types/card';

export interface IStack {
	title: string | null;
	id: number | null;
	cards: ICard[] | null;
}

export interface ISetStack {
	type: ActionTypes.setStack;
	payload: IStack;
}
export interface ILoadStacks {
	type: ActionTypes.loadStacks;
	payload: IStack[];
}
export interface IAddStack {
	type: ActionTypes.addStack;
	payload: IStack;
}

export const setStack = (stack: IStack): ISetStack => {
	return {
		type: ActionTypes.setStack,
		payload: stack,
	};
};
export const addStack = (stack: IStack): IAddStack => {
	return {
		type: ActionTypes.addStack,
		payload: stack,
	};
};
export const loadStacks = (stacks: IStack[]): ILoadStacks => {
	return {
		type: ActionTypes.loadStacks,
		payload: stacks,
	};
};

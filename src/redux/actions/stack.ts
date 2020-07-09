import { ActionTypes } from './actionTypes';

interface ICard {
	id: number;
	prompt: string;
	answer: string;
}

export interface IStack {
	title: string | null;
	id: number | null;
	cards: ICard[] | null;
}

export interface ISetStack {
	type: ActionTypes.setStack;
	payload: IStack;
}

export const setStack = (stack: IStack): ISetStack => {
	return {
		type: ActionTypes.setStack,
		payload: stack,
	};
};

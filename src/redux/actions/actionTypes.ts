import { ISetStack, ILoadStacks, IAddStack } from './stack';

export enum ActionTypes {
	setStack,
	loadStacks,
	addStack,
}

export type StackAction = ISetStack;
export type StacksAction = ILoadStacks | IAddStack;

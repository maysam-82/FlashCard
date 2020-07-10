import { ISetStack, ILoadStacks } from './stack';

export enum ActionTypes {
	setStack,
	loadStacks,
}

export type Action = ISetStack | ILoadStacks;

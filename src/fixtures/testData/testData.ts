import { IStack } from '../../redux/actions';

export const testStack: IStack = {
	id: 500,
	title: 'test title stack',
	cards: [{ id: 2, prompt: 'test prompt', answer: 'test answer' }],
};
const testStackSecond: IStack = {
	id: 600,
	title: 'second test title stack',
	cards: [
		{ id: 200, prompt: 'second test prompt', answer: 'second test answer' },
	],
};

export const testStacks: IStack[] = [testStack, testStackSecond];

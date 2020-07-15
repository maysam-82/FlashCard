import { stackReducer } from '../stackReducer';
import { setStack, StackAction } from '../../actions';
import { testStack } from '../../../fixtures/testData/testData';

describe('root Reducer', () => {
	const testInitialState = { title: null, id: 0, cards: [] };
	const emptyAction = {} as StackAction;
	it('should return an initial state', () => {
		expect(stackReducer(undefined, emptyAction)).toEqual(testInitialState);
	});
	it('should return the new stack', () => {
		expect(stackReducer(testInitialState, setStack(testStack))).toEqual(
			testStack
		);
	});
});

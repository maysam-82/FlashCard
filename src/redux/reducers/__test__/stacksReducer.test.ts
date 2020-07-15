import stacksReducer from '../stacksReducer';
import { loadStacks, addStack, StacksAction } from '../../actions';
import { testStack, testStacks } from '../../../fixtures/testData/testData';
import { IStack } from '../../actions/stack';
describe('root Reducer', () => {
	const testInitialState = [] as IStack[];
	const emptyAction = {} as StacksAction;
	it('should return an initial state', () => {
		expect(stacksReducer(undefined, emptyAction)).toEqual(testInitialState);
	});
	it('should add new stack', () => {
		expect(stacksReducer(testInitialState, addStack(testStack))).toEqual([
			testStack,
		]);
	});
	it('should load stacks', () => {
		expect(stacksReducer(testInitialState, loadStacks(testStacks))).toEqual(
			testStacks
		);
	});
});

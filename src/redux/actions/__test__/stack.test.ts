import * as stack from '../stack';
import { testStack } from '../../../components/StackList/__test__/StackList.test';
import { ActionTypes } from '../actionTypes';
const testStacks = [testStack, testStack];
describe('action creators', () => {
	it('should create an action to set the main stack', () => {
		const expectedAction = {
			type: ActionTypes.setStack,
			payload: testStack,
		};
		expect(stack.setStack(testStack)).toEqual(expectedAction);
	});
	it('should create an action to add new stack', () => {
		const expectedAction = {
			type: ActionTypes.addStack,
			payload: testStack,
		};
		expect(stack.addStack(testStack)).toEqual(expectedAction);
	});
	it('should create an action to load stacks', () => {
		const expectedAction = {
			type: ActionTypes.loadStacks,
			payload: testStacks,
		};
		expect(stack.loadStacks(testStacks)).toEqual(expectedAction);
	});
});

import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { StackList, IProps } from '../StackList';
import { IStack } from '../../../redux/actions';

const stack: IStack = {
	id: 500,
	title: 'test title stack',
	cards: [{ id: 2, prompt: 'test prompt', answer: 'test answer' }],
};

const mockSetStack = jest.fn();
const mockLoadStacks = jest.fn();
const props: IProps = {
	setStack: mockSetStack,
	loadStacks: mockLoadStacks,
	stacks: [stack],
};

describe('StackList component', () => {
	let component: ShallowWrapper<IProps, {}, StackList>;
	beforeEach(() => {
		component = shallow<StackList, IProps, {}>(<StackList {...props} />);
	});
	it('should render StackList properly', () => {
		expect(component).toMatchSnapshot();
	});
	// ComponentDidMount with not empty stacks
	describe('When StackList is mounted with not empty stacks', () => {
		it('should not call `loadStacks`', () => {
			expect(component.instance().props.loadStacks).toHaveBeenCalledTimes(0);
		});
		describe('When `Link` component is clicked', () => {
			beforeEach(() => {
				component.find('Link').simulate('click');
			});
			it('should call `setStack` function with `stack[0]` argument', () => {
				expect(component.instance().props.setStack).toHaveBeenCalledWith(
					props.stacks[0]
				);
			});
		});
	});
	// ComponentDidMount with an empty stacks
	describe('When StackList is mounted with an empty stacks', () => {
		beforeEach(() => {
			component = shallow<StackList, IProps, {}>(
				<StackList
					stacks={[]}
					setStack={props.setStack}
					loadStacks={props.loadStacks}
				/>
			);
		});
		it('should call `loadStacks`', () => {
			expect(component.instance().props.loadStacks).toHaveBeenCalledTimes(1);
		});
	});
});

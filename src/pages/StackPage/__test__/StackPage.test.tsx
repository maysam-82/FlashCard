import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { StackPage } from '../StackPage';
import { testStack } from '../../../components/StackList/__test__/StackList.test';

describe('StackPage component', () => {
	let component: ShallowWrapper;
	beforeEach(() => {
		component = shallow(<StackPage stack={testStack} />);
	});
	it('should render StackPage correctly', () => {
		expect(component).toMatchSnapshot();
	});
	it('should render 1 Card component', () => {
		expect(component.find('Card').length).toEqual(1);
	});
	describe('When there is no `card` in `stack.cards`', () => {
		beforeEach(() => {
			component = shallow(<StackPage stack={testStack} />);
			component.setProps({ stack: { ...testStack, cards: [] } });
		});
		it('should render no Card', () => {
			expect(component.find('Card')).toHaveLength(0);
		});
	});
});

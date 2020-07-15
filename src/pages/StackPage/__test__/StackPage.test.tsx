import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { StackPage } from '../StackPage';
import { testStack } from '../../../fixtures/testData/testData';

describe('StackPage component', () => {
	let component: ShallowWrapper;
	beforeEach(() => {
		component = shallow(<StackPage stack={testStack} />);
	});
	it('should render StackPage correctly', () => {
		expect(component).toMatchSnapshot();
	});
	it('should render 1 Card component', () => {
		expect(component.find('Cards').length).toEqual(1);
	});
	describe('When there is no `card` in `stack.cards`', () => {
		beforeEach(() => {
			component = shallow(<StackPage stack={testStack} />);
			component.setProps({ stack: { ...testStack, cards: [] } });
		});
		it('should render no Cards', () => {
			expect(component.find('Cards')).toHaveLength(0);
		});
	});
});

import React from 'react';
import Card, { IProps, IState } from '../Card';
import { shallow } from 'enzyme';

describe('Card component', () => {
	const component = shallow<Card, IProps, IState>(
		<Card answer="test answer" prompt="test prompt" />
	);
	it('should render Card correclty', () => {
		expect(component).toMatchSnapshot();
	});

	describe('Before user clicks on `Card`', () => {
		it('should not show the answer', () => {
			expect(component.find('.text-hidden').exists()).toBeTruthy();
		});
	});

	describe('When user clicks on `Card`', () => {
		it('should show the answer', () => {
			component.find('.card').simulate('click');
			expect(component.find('.text-revealed').exists()).toBeTruthy();
		});
	});
});

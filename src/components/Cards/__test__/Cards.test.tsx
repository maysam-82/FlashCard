import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Cards, { IProps } from '../Cards';

const props: IProps = {
	cards: [
		{
			id: 560,
			prompt: '560 prompt test',
			answer: '560 answer test',
		},
		{
			id: 670,
			prompt: '670 prompt test',
			answer: '670 answer test',
		},
	],
};

describe('Cards component', () => {
	let component: ShallowWrapper;
	beforeEach(() => {
		component = shallow(<Cards {...props} />);
	});
	it('should render Cards', () => {
		expect(component).toMatchSnapshot();
	});
	it('should have two `Card` component', () => {
		expect(component.find('Card').length).toEqual(2);
	});
});

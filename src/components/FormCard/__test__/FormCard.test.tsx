import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import FormCard, { IProps } from '../FormCard';

const props: IProps = {
	id: 600,
	prompt: 'sample p',
	answer: 'sample a',
	updateCard: jest.fn(),
};
describe('FormCard component', () => {
	let component: ShallowWrapper;
	beforeEach(() => {
		component = shallow(<FormCard {...props} />);
	});
	it('should render FormCard', () => {
		expect(component).toMatchSnapshot();
	});
	it('should update `prompt` input value equal to `sample p`', () => {
		expect(component.find('FormControl').at(0).props().value).toEqual(
			props.prompt
		);
	});
	it('should update `answer` input value equal to `sample a`', () => {
		expect(component.find('FormControl').at(1).props().value).toEqual(
			props.answer
		);
	});

	describe('When `prompt` input is changed ', () => {
		beforeEach(() => {
			component = shallow(<FormCard {...props} />);
		});
		// Clear all mock functions after each test
		afterEach(() => {
			jest.clearAllMocks();
		});
		it('should call `updateCard` in `prompt` field ', () => {
			component
				.find('FormControl')
				.at(0)
				.simulate('change', { target: { value: props.prompt } });
			expect(props.updateCard).toHaveBeenCalledTimes(1);
		});
	});
	describe('When `answer` input is changed ', () => {
		beforeEach(() => {
			component = shallow(<FormCard {...props} />);
		});
		// Clear all mock functions after each test
		afterEach(() => {
			jest.clearAllMocks();
		});
		it('should call `updateCard` in `answer` field ', () => {
			component
				.find('FormControl')
				.at(1)
				.simulate('change', { target: { value: props.answer } });
			expect(props.updateCard).toHaveBeenCalledTimes(1);
		});
	});
});

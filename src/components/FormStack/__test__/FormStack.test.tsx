import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { RouteComponentProps, match } from 'react-router-dom';
import * as H from 'history';
import { FormStack, IProps, IState } from '../FormStack';

// Shallow test with ReactRouter and white box test
const props: IProps & RouteComponentProps = {
	addStack: jest.fn(),
	history: {
		push: (path: '') => {},
	} as H.History,
	location: {} as H.Location,
	match: {} as match,
};

describe('FormStack component', () => {
	let component: ShallowWrapper<IProps, IState, FormStack>;
	component = shallow<FormStack, IProps, IState>(<FormStack {...props} />);
	it('should render FormStack', () => {
		expect(component).toMatchSnapshot();
	});
	it('should render `Form` component', () => {
		expect(component.find('Form').exists()).toBeTruthy();
	});
	it('should render `Add Card` `Button`', () => {
		expect(component.find('Button').at(0).props().children).toEqual('Add Card');
	});
	it('should render `Save And Add Stack` `Button` ', () => {
		expect(component.find('Button').at(1).props().children).toEqual(
			'Save And Add Stack'
		);
	});
	describe('When user change value in `FormControl`', () => {
		beforeEach(() => {
			component
				.find('FormControl')
				.simulate('change', { target: { value: 'test title stack' } });
		});
		afterEach(() => {
			component
				.find('FormControl')
				.simulate('change', { target: { value: '' } });
		});
		it('should update `title` in the `state`', () => {
			expect(component.state().title).toEqual('test title stack');
		});
	});
	describe('When user clicks on `Add Card` `Button`', () => {
		beforeEach(() => {
			component.find('Button').at(0).simulate('click');
		});
		afterEach(() => {
			component.setState({ cards: [] });
		});
		it('should add one new card to `cards` in `state`', () => {
			expect(component.state().cards.length).toEqual(1);
		});
	});
	describe('When user clicks on `Save And Add Stack` `Button` When `state.title` is empty', () => {
		beforeEach(() => {
			component.find('Button').at(1).simulate('click');
		});
		it('should not update state', () => {
			expect(component.state()).toEqual({ title: '', cards: [], id: 0 });
		});
		describe('When user clicks on `Save And Add Stack` `Button` When `state.title` is not empty', () => {
			beforeEach(() => {
				component.find('Button').at(1).simulate('click');
				component
					.find('FormControl')
					.simulate('change', { target: { value: 'test title stack' } });
			});
			it('should not call `addStack`', () => {
				expect(component.instance().props.addStack).toHaveBeenCalledTimes(0);
			});
			describe('When there is an object inside `cards` in `state` but its contains is not verified', () => {
				beforeEach(() => {
					component.find('Button').at(0).simulate('click');
				});
				it('should not call `addStack`', () => {
					expect(component.instance().props.addStack).toHaveBeenCalledTimes(0);
				});
				describe('When `cards` contains verified objects', () => {
					beforeEach(() => {
						const mockEventChangePrompt: any = {
							target: { value: 'test prompt value' },
						};
						const mockEventChangeAnswer: any = {
							target: { value: 'test answer value' },
						};
						component
							.instance()
							.updateCardHandler(mockEventChangePrompt, 0, 'prompt');
						component
							.instance()
							.updateCardHandler(mockEventChangeAnswer, 0, 'answer');
					});
					it('should create a unique `id` in the state', () => {
						component.find('Button').at(1).simulate('click');
						expect(component.state().id).not.toBe(0);
					});
				});
			});
		});
	});
});

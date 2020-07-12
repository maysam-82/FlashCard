import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import StackRegister from '../StackRegister';
import { RouteComponentProps } from 'react-router-dom';

let props: RouteComponentProps;

describe('StackRegister component', () => {
	let component: ShallowWrapper;
	beforeEach(() => {
		component = shallow(<StackRegister {...props} />);
	});
	it('should render StackRegister', () => {
		expect(component).toMatchSnapshot();
	});
});

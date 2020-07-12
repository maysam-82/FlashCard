import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

describe('Home component', () => {
	const component = shallow(<Home />);
	it('should render Home component correctly', () => {
		expect(component).toMatchSnapshot();
	});
});

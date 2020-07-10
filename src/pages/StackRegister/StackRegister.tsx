import React from 'react';
import FormStack from '../../components/FormStack/FormStack';

class StackRegister extends React.Component {
	render() {
		return (
			<div className="container border rounded p-0 pb-2">
				<h4 className="text-center pt-2 pb-2 border-bottom  bg-primary rounded-top text-white">
					Create a New Stack
				</h4>
				<FormStack />
			</div>
		);
	}
}

export default StackRegister;

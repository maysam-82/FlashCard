import React from 'react';
import FormStack from '../../components/FormStack/FormStack';
import { RouteComponentProps } from 'react-router-dom';

const StackRegister: React.SFC<RouteComponentProps> = (props) => {
	return (
		<div className="container border rounded p-0 pb-2">
			<h4 className="text-center pt-2 pb-2 border-bottom  bg-primary rounded-top text-white">
				Create a New Stack
			</h4>
			<FormStack {...props} />
		</div>
	);
};

export default StackRegister;

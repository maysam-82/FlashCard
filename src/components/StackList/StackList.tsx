import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setStack } from '../../redux/actions/stack';
import stacks from '../../data/stacks.json';

interface IProps {
	setStack: typeof setStack;
}

const StackTitleList: React.SFC<IProps> = ({ setStack }) => {
	const renderStackTitleList = () => {
		return stacks.map((stack) => (
			<Link to="/stack" key={stack.id} onClick={() => setStack(stack)}>
				<h4>{stack.title}</h4>
			</Link>
		));
	};
	return <div>{renderStackTitleList()}</div>;
};

export default connect(null, { setStack })(StackTitleList);

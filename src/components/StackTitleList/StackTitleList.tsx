import React from 'react';
import { Link } from 'react-router-dom';
import stacks from '../../data/stacks.json';

const StackTitleList = () => {
	const renderStackTitleList = () => {
		return stacks.map(({ title, id }) => (
			<Link to="/stack">
				<h4 key={id}>{title}</h4>
			</Link>
		));
	};
	return <div>{renderStackTitleList()}</div>;
};

export default StackTitleList;

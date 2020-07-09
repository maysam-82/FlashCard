import React from 'react';

import stacks from '../../data/stacks.json';

const StackList = () => {
	const renderStackList = () => {
		return stacks.map(({ title, id }) => <h4 key={id}>{title}</h4>);
	};
	return <div className="border-top pt-2">{renderStackList()}</div>;
};

export default StackList;

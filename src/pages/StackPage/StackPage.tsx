import React from 'react';
import { connect } from 'react-redux';
import { IStoreState } from '../../redux/reducers/index';
import { IStack } from '../../redux/actions';

interface IProps {
	stack: IStack;
}

const StackPage: React.SFC<IProps> = ({ stack }) => {
	const renderCards = () => {
		return stack.cards?.map(({ prompt, id, answer }) => (
			<li key={id}>
				<div>{prompt}</div> <div>{answer}</div>
			</li>
		));
	};
	return (
		<div>
			<h4>{stack.title}</h4>
			<ul>{renderCards()}</ul>
		</div>
	);
};

const mapStateToProps = (state: IStoreState) => ({
	stack: state.stack,
});
export default connect(mapStateToProps)(StackPage);

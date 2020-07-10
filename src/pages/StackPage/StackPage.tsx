import React from 'react';
import { connect } from 'react-redux';
import { IStoreState } from '../../redux/reducers/index';
import { IStack } from '../../redux/actions';
import Card from '../../components/Card';

interface IProps {
	stack: IStack;
}

const StackPage: React.SFC<IProps> = ({ stack }) => {
	const renderCards = () => {
		return stack.cards?.map(({ prompt, id, answer }) => (
			<Card key={id} prompt={prompt} answer={answer} />
		));
	};
	return (
		<div>
			<h4>{stack.title}</h4>
			<div>{renderCards()}</div>
		</div>
	);
};

const mapStateToProps = (state: IStoreState) => ({
	stack: state.stack,
});
export default connect(mapStateToProps)(StackPage);

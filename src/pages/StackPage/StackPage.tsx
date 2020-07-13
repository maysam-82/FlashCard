import React from 'react';
import { connect } from 'react-redux';
import { IStoreState } from '../../redux/reducers/index';
import { IStack } from '../../redux/actions';
import Cards from '../../components/Cards';

export interface IProps {
	stack: IStack;
}

export const StackPage: React.SFC<IProps> = ({ stack }) => {
	const { cards, title } = stack;
	return (
		<div>
			<h4>{title}</h4>
			{cards.length > 0 ? <Cards cards={stack.cards} /> : null}
		</div>
	);
};

const mapStateToProps = (state: IStoreState) => ({
	stack: state.stack,
});
export default connect(mapStateToProps)(StackPage);

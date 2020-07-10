import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setStack, loadStacks, IStack } from '../../redux/actions/stack';
import stacks from '../../data/stacks.json';
import { IStoreState } from '../../redux/reducers/index';

interface IProps {
	setStack: typeof setStack;
	loadStacks: typeof loadStacks;
	stacks: IStack[];
}

class StackList extends React.Component<IProps, {}> {
	componentDidMount() {
		if (this.props.stacks.length === 0) {
			this.props.loadStacks(stacks);
		}
	}

	renderStackList = () => {
		const { stacks, setStack } = this.props;
		if (this.props.stacks.length > 0) {
			return stacks.map((stack, index) => (
				<Link
					to="/stack"
					key={stack.id ? stack.id : index}
					onClick={() => setStack(stack)}
				>
					<h4>{stack.title}</h4>
				</Link>
			));
		}
	};
	render() {
		return <div>{this.renderStackList()}</div>;
	}
}

const mapStateToProps = (state: IStoreState) => ({
	stacks: state.stacks,
});

export default connect(mapStateToProps, { setStack, loadStacks })(StackList);

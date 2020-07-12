import React from 'react';
import {
	Form,
	FormControl,
	Button,
	FormGroup,
	FormLabel,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { ICard } from '../../types/card';
import { addStack } from '../../redux/actions';
import { cardVerificationResult } from './formStackUtils';
import FormCard from '../FormCard/FormCard';

export interface IState {
	id: number;
	title: string;
	cards: ICard[];
}

export interface IProps {
	addStack: typeof addStack;
}

export class FormStack extends React.Component<
	IProps & RouteComponentProps,
	IState
> {
	constructor(props: IProps & RouteComponentProps) {
		super(props);

		this.state = {
			title: '',
			cards: [],
			id: 0,
		};
	}

	addCardHandler = () => {
		if (!cardVerificationResult(this.state.cards)) {
			this.setState((prevState) => {
				const newCard: ICard = {
					id: prevState.cards.length,
					prompt: '',
					answer: '',
				};
				return { cards: [...prevState.cards, newCard] };
			});
		}
	};

	updateCardHandler = (
		event: React.ChangeEvent<HTMLInputElement>,
		id: number,
		key: keyof ICard
	) => {
		const { value } = event.target;
		this.setState((prevState) => {
			const { cards } = prevState;
			// https://github.com/microsoft/TypeScript/issues/31663#issuecomment-519563197
			(cards[id][key] as any) = value;
			return { cards: [...cards] };
		});
	};
	renderCards = () => {
		const { cards } = this.state;
		return cards.map(({ id }) => {
			return (
				<FormCard
					updateCard={this.updateCardHandler}
					prompt={cards[id].prompt}
					answer={cards[id].answer}
					id={id}
					key={id}
				/>
			);
		});
	};

	addStackHandler = () => {
		const { title, cards } = this.state;
		if (
			title &&
			cards.length > 0 &&
			!cardVerificationResult(this.state.cards)
		) {
			const id = Date.now();
			this.setState({ id }, () => {
				this.props.addStack(this.state);
				this.props.history.push('/');
			});
		}
	};

	render() {
		const { title } = this.state;
		return (
			<div className="form-stack-container">
				<Form inline className="p-2 border-bottom mb-2">
					<FormGroup className="mb-2">
						<FormLabel className="mr-2">Title:</FormLabel>
						<FormControl
							placeholder="Enter title of card"
							value={title}
							onChange={(event) => this.setState({ title: event.target.value })}
						/>
					</FormGroup>
				</Form>
				<div className="cards-list">{this.renderCards()}</div>
				<Button onClick={this.addCardHandler} className="ml-2">
					Add Card
				</Button>
				<Button onClick={this.addStackHandler} className="ml-2 bg-success">
					Save And Add Stack
				</Button>
			</div>
		);
	}
}

export default connect(null, { addStack })(FormStack);

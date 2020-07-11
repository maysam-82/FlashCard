import React from 'react';
import './card.css';
export interface IProps {
	prompt: string;
	answer: string;
}
export interface IState {
	isAnswerHidden: boolean;
}

class Card extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			isAnswerHidden: false,
		};
	}

	render() {
		const { answer, prompt } = this.props;
		const { isAnswerHidden } = this.state;
		return (
			<div
				className="card border rounded m-2 p-2 d-flex  flex-row justify-content-between align-items-center"
				onClick={() => this.setState({ isAnswerHidden: true })}
			>
				<div className="card-prompt text-left">
					<h4 className="m-0">{prompt}</h4>
				</div>
				<div className="card-answer text-right">
					<h4
						className={`m-0 ${
							isAnswerHidden ? 'text-revealed' : 'text-hidden'
						}`}
					>
						{answer}
					</h4>
				</div>
			</div>
		);
	}
}
export default Card;

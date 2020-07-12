import React from 'react';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { ICard } from '../../types/card';

export interface IProps {
	id: number;
	prompt: string;
	answer: string;
	updateCard: (
		event: React.ChangeEvent<HTMLInputElement>,
		id: number,
		key: keyof ICard
	) => void;
}

const FormCard: React.SFC<IProps> = ({ id, updateCard, prompt, answer }) => {
	return (
		<FormGroup
			key={id}
			className="border-bottom p-2 mb-2 d-flex align-items-center"
		>
			<FormLabel className="m-0">Prompt:</FormLabel>
			<FormControl
				onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
					updateCard(event, id, 'prompt')
				}
				value={prompt}
				className="ml-2 mr-4"
			/>
			<FormLabel className="m-0 ml-2">Answer:</FormLabel>
			<FormControl
				onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
					updateCard(event, id, 'answer')
				}
				value={answer}
				className="ml-2"
			/>
		</FormGroup>
	);
};

export default FormCard;

import React from 'react';
import Card from '../Card';
import { ICard } from '../../types/card';

export interface IProps {
	cards: ICard[];
}
const Cards: React.SFC<IProps> = ({ cards }) => {
	return (
		<div>
			{cards.map(({ prompt, id, answer }) => (
				<Card key={id} prompt={prompt} answer={answer} />
			))}
		</div>
	);
};

export default Cards;

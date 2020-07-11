import { ICard } from '../../types/card';

export const cardVerificationResult = (cards: ICard[]): boolean => {
	if (cards.length > 0) {
		return !!cards.find((card) => !card.prompt || !card.answer);
	}
	return false;
};

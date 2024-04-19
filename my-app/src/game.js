import { Field, Information } from './compinents';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { createUniqueNumber } from './compinents/helpers/createUniqueNumber';
import styles from './game.module.css';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const GameLayout = ({
	field,
	isDraw,
	isGameEnded,
	currentPlayer,
	handleClick,
	resetGame,
}) => {
	return (
		<div className={styles.wrapper} key={createUniqueNumber()}>
			<Information
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			/>
			<div className={styles.field} key={createUniqueNumber()}>
				<Field field={field} handleClick={handleClick} />
			</div>
			<button className={styles.btnResetGame} onClick={() => resetGame()}>
				Начать с начала
			</button>
		</div>
	);
};

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(''));

	const handleClick = (index) => {
		if (field[index] || isGameEnded) return;
		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);
		const winnerExisted = checkWinner(newField);

		if (winnerExisted) {
			setIsGameEnded(true);
		} else if (!newField.includes('')) {
			setIsDraw(true);
		} else {
			setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
		}
	};

	const checkWinner = (field) => {
		return WIN_PATTERNS.some((pattern) => {
			const [a, b, c] = pattern;
			return field[a] && field[a] === field[b] && field[a] === field[c];
		});
	};

	const resetGame = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(Array(9).fill(''));
	};

	return (
		<GameLayout
			field={field}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
			handleClick={handleClick}
			resetGame={resetGame}
		/>
	);
};

GameLayout.propTypes = {
	field: PropTypes.array,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	handleClick: PropTypes.func,
	resetGame: PropTypes.func,
};

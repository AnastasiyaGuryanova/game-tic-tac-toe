import styles from './information.module.css';
import PropTypes from 'prop-types';

const InformationLayout = ({ children }) => {
	return <div className={styles.information}>{children}</div>;
};

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
	let state;
	if (isDraw) {
		state = 'Ничья';
	} else if (!isDraw) {
		state = isGameEnded ? `Победа: ${currentPlayer}` : `Ходит: ${currentPlayer}`;
	}

	return <InformationLayout>{state}</InformationLayout>;
};

InformationLayout.propTypes = {
	children: PropTypes.string,
};

Information.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};

import styles from './field.module.css';
import { createUniqueNumber } from '../helpers/createUniqueNumber';
import PropTypes from 'prop-types';

const FieldLayout = ({ value, handleClick, id }) => {
	return (
		<button onClick={() => handleClick(id)} className={styles.btn} id={id}>
			{value}
		</button>
	);
};

export const Field = ({ field, handleClick }) => {
	return field.map((item, index) => {
		return (
			<FieldLayout
				value={item}
				handleClick={handleClick}
				id={index}
				key={createUniqueNumber()}
			/>
		);
	});
};

FieldLayout.propTypes = {
	value: PropTypes.string,
	id: PropTypes.number,
	handleClick: PropTypes.func,
};

Field.propTypes = {
	field: PropTypes.array,
	handleClick: PropTypes.func,
};

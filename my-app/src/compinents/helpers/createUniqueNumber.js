export const createUniqueNumber = () => {
	const uniqueNumber = `${Math.random().toString(36).slice(2)}`;
	return uniqueNumber;
};

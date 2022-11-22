import { useEffect } from 'react';

export const Alert = ({ type, msg, removeAlert }) => {
	useEffect(() => {
		const timeOut = setTimeout(() => {
			removeAlert();
		}, 3000);
		return () => clearTimeout(timeOut);
	}, []);

	return (
		<>
			<p className={`alert alert-${type}`}>{msg}</p>
		</>
	);
};

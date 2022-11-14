import { useEffect, useState } from 'react';
import rgbToHex from '../utils';

export const SingleColor = ({ rgb, weight, hexColor, index }) => {
	console.table(hexColor);
	const [alert, setAlert] = useState(false);

	const bcg = rgb.join(',');
	// console.table(bcg);

	const hex = rgbToHex(...rgb); // created hex value manually
	const hexValue = `#${hexColor}`;

	useEffect(() => {
		const timeOut = setTimeout(() => {
			setAlert(false);
		}, 2000);
		return () => clearTimeout(timeOut);
	}, [alert]);

	return (
		<>
			<article
				onClick={() => {
					setAlert(true);
					navigator.clipboard.writeText(hexValue).then(() => setAlert(true));
				}}
				className={`color ${index > 10 && 'color-light'}`}
				style={{ backgroundColor: `rgb(${bcg})` }}
			>
				<p className="percent-value">{weight}%</p>
				<p className="color-value">{hexValue}</p>
				{alert && <p className="alert">copied to clipboard</p>}
			</article>
		</>
	);
};

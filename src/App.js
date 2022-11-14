import { useState } from 'react';
import { SingleColor } from './components/SingleColor';
import Values from 'values.js';

const App = () => {
	const [color, setColor] = useState('');
	const [error, setError] = useState(false);
	const [list, setList] = useState(new Values('#3C4048').all(10));

	const handleSubmit = (e) => {
		e.preventDefault();

		try {
			let colors = new Values(color).all(10);
			setList(colors);
			setError(false);

			console.table(colors);
		} catch (error) {
			setError(true);
			console.table(error);
			setColor('');
		}
		setColor('');
	};

	return (
		<>
			<section className="container">
				<h3>color generator</h3>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="color"
						id="color"
						value={color}
						onChange={(e) => setColor(e.target.value)}
						placeholder="#0000"
						className={`${error ? 'error' : null}`}
					/>
					<button className="btn" type="submit">
						submit
					</button>
				</form>
			</section>
			<section className="colors">
				{list.map((color, index) => {
					return (
						<SingleColor
							key={index}
							{...color}
							index={index}
							hexColor={color.hex}
						/>
					);
				})}
			</section>
		</>
	);
};

export default App;

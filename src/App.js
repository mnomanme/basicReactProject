import { useState } from 'react';
import { List } from './components/List';
import { data } from './data';

const App = () => {
	const [people, setPeople] = useState(data);

	return (
		<main>
			<section className="container">
				<h3>{people.length} birthday today</h3>
				<List people={people} />
				<button onClick={() => setPeople([])} className="">
					clear all
				</button>
			</section>
		</main>
	);
};

export default App;

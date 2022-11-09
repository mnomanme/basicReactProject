import { useState } from 'react';
import { Categories } from './components/Categories';
import { Menu } from './components/Menu';
import items from './data';

const App = () => {
	const [menuItems, setMenuItems] = useState(items);
	const [categories, setCategories] = useState([]);

	const filterItems = (category) => {
		if (category === 'all') {
			setMenuItems(items);
			return;
		}
		const newItems = items.filter((item) => item.category === category);
		setMenuItems(newItems);
	};

	return (
		<>
			<main>
				<section className="menu section">
					<div className="title">
						<h2>our menu</h2>
						<div className="underline"></div>
					</div>
					<Categories filterItems={filterItems} />
					<Menu items={menuItems} />
				</section>
			</main>
		</>
	);
};

export default App;

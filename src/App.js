import { CartContainer } from './components/CartContainer';
import { Navbar } from './components/Navbar';
import { useGlobalContext } from './context';

const App = () => {
	return (
		<>
			<main>
				<Navbar />
				<CartContainer />
			</main>
		</>
	);
};

export default App;

import { useEffect, useState } from 'react';
import { Loading } from './components/Loading';
import { Tours } from './components/Tours';

const url = `https://course-api.com/react-tours-project`;

const App = () => {
	return (
		<>
			<h2>tour project setup</h2>
			<Loading />
			<Tours />
		</>
	);
};

export default App;

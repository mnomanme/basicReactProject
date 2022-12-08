import phoneImg from '../assests/phone.svg';
import { useGlobalContext } from '../context';

export const Hero = () => {
	const data = useGlobalContext();
	console.log(data);

	return (
		<>
			<h2>hero component</h2>
		</>
	);
};

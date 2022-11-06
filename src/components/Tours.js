import { Tour } from './Tour';

export const Tours = ({ tours, removeTour }) => {
	const title = `our tours`;

	return (
		<>
			<section>
				<div className="title">
					<h2>{title}</h2>
					<div className="underline"></div>
				</div>
				<div>
					{tours.map((tour) => {
						const { id } = tour;
						return <Tour key={id} {...tour} removeTour={removeTour}></Tour>;
					})}
				</div>
			</section>
		</>
	);
};

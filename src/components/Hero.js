import phoneImg from '../assests/phone.svg';
import { useGlobalContext } from '../context';

export const Hero = () => {
	const { closeSubmenu } = useGlobalContext();

	return (
		<>
			<section className="hero">
				<div className="hero-center">
					<article className="hero-info">
						<h1>payments infrastructure for the internet</h1>
						<p>
							Millions of compaines of all sizes-from startups to Fortune
							500s-use Stripe's software and APIs to accept payments, send
							payouts, and manage their businesses online.
						</p>
						<button className="btn">Start Now</button>
					</article>
					<article className="hero-images">
						<img src={phoneImg} className="phone-img" alt="phone-img" />
					</article>
				</div>
			</section>
		</>
	);
};

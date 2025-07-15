export default function Footer() {
	return (
		<footer className="mt-5 bg-green-600 text-white">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
				<path
					fill="#0099ff"
					fillOpacity="1"
					d="M0,96L40,96C80,96,160,96,240,122.7C320,149,400,203,480,208C560,213,640,171,720,144C800,117,880,107,960,117.3C1040,128,1120,160,1200,165.3C1280,171,1360,149,1400,138.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
				></path>
			</svg>
			<div className="container-fluid flex justify-center pb-4">
				<div>
					<i className="icon-at"></i> Next.js - The React Framework for the Web.
				</div>
			</div>
		</footer>
	);
}

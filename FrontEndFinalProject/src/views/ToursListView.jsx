import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import toursServerCalls from '../services/toursServerCalls.js';
import NavBar from '../components/NavBar';
import FooterBar from '../components/FooterBar';

const baseDomain = 'http://localhost:3000';
function ToursListView() {
	const [tours, setTours] = useState([]);

	useEffect(() => {
		async function fetchALLTours() {
			const results = await toursServerCalls.getAllTours();
			setTours(results);
		}
		fetchALLTours();
	}, []);

	return (
		<>
			<NavBar />
			<div className='mainTitle'>
				<h1>Tours List</h1>
				<div>
					<table className='table'>
						<thead>
							<tr>
								<th>Name</th>

								<th>Price per person</th>
								<th>Duration</th>

								<th>Picture</th>
								<th>Details</th>
							</tr>
						</thead>
						<tbody>
							{tours.map(tour => (
								<tr key={tour.tour_id}>
									<td>{tour.tour_name}</td>

									<td>{tour.price_person} €</td>
									<td>{tour.duration} hour(s)</td>

									<td>
										<img src={`${baseDomain}${tour.images}`} alt={`${tour.tour_name} image`} style={{ maxWidth: '70%' }} />
									</td>
									<td>
										<Link href={`/tours/${tour.tour_id}`}>
											<button className='button'>Click here for + info</button>
										</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<Link href={'/home'}>
						<button className='button'>Return main page</button>
					</Link>
				</div>
			</div>
			<FooterBar />
		</>
	);
}
export default ToursListView;
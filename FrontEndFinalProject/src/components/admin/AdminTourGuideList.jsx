import { useEffect, useState } from 'react';
import toursGuidesServerCalls from '../../services/toursGuidesServerCalls.js';
import AdminTourGuideRegistration from './AdminTourGuideRegistration.jsx';
import AdminTourGuideDelete from './AdminTourGuideDelete.jsx';
import { Link } from 'wouter';

function toggleTable() {
	const tableContainer = document.getElementById('table-container-tourGuides');
	if (tableContainer.classList.contains('hidden')) {
		tableContainer.classList.remove('hidden');
	} else {
		tableContainer.classList.add('hidden');
	}
}

function toggleAddTourGuides() {
	const containerAddTourGuides = document.getElementById('containerAddTourGuides');
	if (containerAddTourGuides.classList.contains('hidden')) {
		containerAddTourGuides.classList.remove('hidden');
	} else {
		containerAddTourGuides.classList.add('hidden');
	}
}

function AdminTourGuideList() {
	const [tourGuides, setTourGuides] = useState([]);

	useEffect(() => {
		async function fetchAllTourGuides() {
			const results = await toursGuidesServerCalls.getAllToursGuides();
			setTourGuides(results);
		}
		fetchAllTourGuides();
	}, []);

	return (
		<>
			<div className='mainTitle'>
				<h1>
					Tour & Guides Relation&nbsp;&nbsp;
					<button onClick={toggleTable} className='button'>
						Show/Hide Table
					</button>
				</h1>
				<div id='table-container-tourGuides' className='hidden'>
					<table className='table'>
						<thead>
							<tr>
								<th>Tour Name</th>

								<th>Guide Name</th>
								<th>Delete Relation</th>
							</tr>
						</thead>
						<tbody>
							{tourGuides?.map((tourGuide, index) => (
								<tr key={index}>
									<td>
										{tourGuide.tour_id},<br />
										{tourGuide.tour_name}
									</td>

									<td>
										{tourGuide.guide_id},<br />
										{tourGuide.guide_name}
									</td>

									<td>
										<Link href={`/admin/tour-guide/${tourGuide.tour_id}/${tourGuide.guide_id}`}>
											<button className='button'>Edit</button>
										</Link>
										<AdminTourGuideDelete tour_id={tourGuide.tour_id} guide_id={tourGuide.guide_id} tourGuides={tourGuides} setTourGuides={setTourGuides} />
									</td>
								</tr>
							))}

							<tr>
								<td colSpan='3'>
									<button className='button_yellow' onClick={toggleAddTourGuides}>
										Add New Relation
									</button>
									<div id='containerAddTourGuides' className='hidden'>
										<AdminTourGuideRegistration setTourGuides={setTourGuides} />
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default AdminTourGuideList;

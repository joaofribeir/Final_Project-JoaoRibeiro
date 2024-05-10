import { Route, Switch, Link } from 'wouter';
import './App.css';
import HomeView from './views/HomeView';
import ClientLoginView from './views/ClientLoginView';
import ToursListView from './views/ToursListView';
import TourDetailsView from './views/TourDetailsView';
import ClientBookingDetailsView from './views/ClientBookingDetailsView';
import AboutUsView from './views/AboutUsView';
import BookingsListView from './views/BookingsListView';
import NotFoundPageView from './views/NotFoundPageView';

function App() {
	return (
		<>
			<Switch>
				<Route path='/' component={ClientLoginView} />

				<Route path='/home' component={HomeView} />

				<Route path='/tours' component={ToursListView} />

				<Route path='/tours/:tour_id' component={TourDetailsView} />

				<Route path='/aboutus' component={AboutUsView} />

				<Route path='/bookings' component={BookingsListView} />

				<Route path='/bookings/client/:client_id' component={ClientBookingDetailsView} />

				<Route component={NotFoundPageView} />
			</Switch>
		</>
	);
}

export default App;

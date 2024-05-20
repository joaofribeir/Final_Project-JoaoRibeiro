import { Route, Switch } from 'wouter';
import './App.css';
import HomePageView from './views/HomePageView';
import HomeView from './views/HomeView';
import ClientLoginView from './views/ClientLoginView';
import ClientRegistrationView from './views/ClientRegistrationView';
import ClientUpdatePasswordView from './views/ClientUpdatePasswordView';
import ClientUpdateInfoView from './views/ClientUpdateInfoView';
import ClientInfoView from './views/ClientInfoView';
import ClientBookingDetailsView from './views/ClientBookingDetailsView';
import ClientsShoppingCartView from './views/ClientsShoppingCartView';
import ToursListView from './views/ToursListView';
import TourDetailsView from './views/TourDetailsView';
import AboutUsView from './views/AboutUsView';
import BookingsListView from './views/BookingsListView';
import NotFoundPageView from './views/NotFoundPageView';
import AdminLoginView from './views/AdminLoginView';
import AdminHomeView from './views/AdminHomeView';
import AdminUpdateClientInfoView from './views/AdminUpdateClientInfoView';
import AdminUpdateBookingInfoView from './views/AdminUpdateBookingInfoView';
import AdminUpdateGuideInfoView from './views/AdminUpdateGuideInfoView';
import AdminUpdateTourInfoView from './views/AdminUpdateTourInfoView';
import AdminUpdateAdminInfoView from './views/AdminUpdateAdminInfoView';

function App() {
	return (
		<>
			<Switch>
				<Route path='/' component={HomePageView} />
				<Route path='/home' component={HomeView} />
				<Route path='/client/login' component={ClientLoginView} />
				<Route path='/client/registration' component={ClientRegistrationView} />
				<Route path='/client/:client_id' component={ClientInfoView} />
				<Route path='/client/newPassword/:client_id' component={ClientUpdatePasswordView} />
				<Route path='/client/updateInfo/:client_id' component={ClientUpdateInfoView} />
				<Route path='/clients/shopingcart/' component={ClientsShoppingCartView} />
				<Route path='/bookings/client/:client_id' component={ClientBookingDetailsView} />
				<Route path='/tours' component={ToursListView} />
				<Route path='/tours/:tour_id' component={TourDetailsView} />
				<Route path='/aboutus' component={AboutUsView} />
				<Route path='/bookings' component={BookingsListView} />
				<Route path='/admin/login' component={AdminLoginView} />
				<Route path='/admin/home' component={AdminHomeView} />
				<Route path='/admin/client/:client_id' component={AdminUpdateClientInfoView} />
				<Route path='/admin/booking/:booking_id' component={AdminUpdateBookingInfoView} />
				<Route path='/admin/guide/:guide_id' component={AdminUpdateGuideInfoView} />
				<Route path='/admin/tour/:tour_id' component={AdminUpdateTourInfoView} />
				<Route path='/admin/admin/:admin_id' component={AdminUpdateAdminInfoView} />

				<Route component={NotFoundPageView} />
			</Switch>
		</>
	);
}

export default App;

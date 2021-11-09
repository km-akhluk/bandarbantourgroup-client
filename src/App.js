
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Tours from './components/Tours/Tours';
import Login from './components/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import BookTour from './components/BookTour/BookTour';
import MyOrders from './components/MyOrders/MyOrders';
import AddTour from './components/AddTour/AddTour';
import Footer from './components/Footer/Footer';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import ManageOrders from './components/ManageOrders/ManageOrders';
import NotFound from './components/Notfound/NotFound';

function App() {
  return (


<AuthProvider>
<BrowserRouter>
<Header></Header>
<Switch>
<Route exact path='/'>
  <Home></Home>
</Route>

<Route exact path='/home'>
  <Home></Home>
</Route>

<Route exact path='/tours'>
<Tours></Tours>
</Route>

<PrivetRoute exact path='/bookTour/:tourId'>
<BookTour></BookTour>
</PrivetRoute>
<PrivetRoute path='/myOrders'>
<MyOrders></MyOrders>
</PrivetRoute>
<PrivetRoute exact path='/addTour'>
<AddTour></AddTour>
</PrivetRoute>
<PrivetRoute exact path='/manageOrders'>
<ManageOrders></ManageOrders>
</PrivetRoute>

<Route exact path='/login'>
<Login></Login>
</Route>

<Route exact path='*'>
<NotFound></NotFound>
</Route>

</Switch>
<Footer></Footer>
</BrowserRouter>
</AuthProvider>



  );
}

export default App;

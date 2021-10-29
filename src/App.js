import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Register from './components/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import Mybooking from './components/Mybooking/Mybooking';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path='/'>
          <Home></Home>
          </Route>
          <Route path='/home'>
          <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
          <Register></Register>
          </Route>
          <PrivateRoute path="/placeorder/:planid">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <PrivateRoute path="/mybooking">
            <Mybooking></Mybooking>
          </PrivateRoute>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;

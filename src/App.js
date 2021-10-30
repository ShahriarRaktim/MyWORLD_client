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
import Mybooked from './components/MyBooked/Mybooked';
import Allplan from './components/Allplan/Allplan';
import Allplans from './components/Allplans/Allplans';
import Notfound from './components/Notfound/Notfound';
import Addplan from './components/Addplan/Addplan';
import Ourtour from './components/Ourtour/Ourtour';
import Tour from './components/Tour/Tour';
import Help from './components/Help/Help';

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
          <Route path="/ourtour">
            <Ourtour></Ourtour>
          </Route>
          <Route path="/help">
            <Help></Help>
          </Route>
          <Route path="/tour">
            <Tour></Tour>
          </Route>
          <PrivateRoute path="/placeorder/:planid">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <PrivateRoute path="/mybooking">
            <Mybooking></Mybooking>
          </PrivateRoute>
          <PrivateRoute path="/mybooked">
            <Mybooked></Mybooked>
          </PrivateRoute>
          <PrivateRoute path="/allplans">
            <Allplans></Allplans>
          </PrivateRoute>
          <PrivateRoute path="/allplan">
            <Allplan></Allplan>
          </PrivateRoute>
          <PrivateRoute path="/addplan">
            <Addplan></Addplan>
          </PrivateRoute>
        <Route path="*">
          <Notfound></Notfound>
        </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;

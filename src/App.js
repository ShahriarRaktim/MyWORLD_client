import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Register from './components/Register/Register';

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
        </Switch>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;

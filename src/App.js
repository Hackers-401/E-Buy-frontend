import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './components/HomePage';
import ServicePage from './components/ServicePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (

    <>

      <Router>
        <Navbar/>
        <Switch>

          <Route exact path="/">
            <HomePage/>
          </Route >

          <Route exact path="/servicepage">
            <ServicePage/>
          </Route >

        </Switch>

        <Footer/>
      </Router>
    </>
  );
}

export default App;

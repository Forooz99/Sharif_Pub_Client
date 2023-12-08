import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
      </Routes>
        
      <Footer />
    </Router>
  );
}

export default App;

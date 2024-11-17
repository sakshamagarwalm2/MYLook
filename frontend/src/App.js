import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './components/Home/Home';
import NavBar from './components/Header/NavBar';
import Footer from './components/Header/Footer';
import About from './components/About/About';
import Project from './components/Project/Project';

function App() {
  return <Router className="overflow-hidden">
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/project' element={<Project />} />
    </Routes>
    <Footer/>
  </Router>
}

export default App;

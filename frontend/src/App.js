import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './components/Home/Home';
import NavBar from './components/Header/NavBar';

function App() {
  return <Router className="overflow-hidden">
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  </Router>
}

export default App;

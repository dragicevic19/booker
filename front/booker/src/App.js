import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/login" element = {<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

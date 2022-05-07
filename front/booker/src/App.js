import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Registration from './components/registration/Registration';
import { useState } from "react"
import ShowMyProperty from './components/showMyProperty/ShowMyProperty';


function App() {

  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Navbar loggedInUser={loggedInUser} />
        <div className="content">
          <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/login" element = {<Login onLogin={setLoggedInUser}/>} />
            <Route path='/register' element = {<Registration />} />
            <Route path='/my-offers' element = {<ShowMyProperty user={loggedInUser} onLogin={setLoggedInUser}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

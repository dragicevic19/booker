import Home from './components/Home';
//import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { useState } from "react"
import NavbarHome from './components/navbarHome/Navbar';


function App() {

  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Router>
      <div className="App">  
        <div className="content">
          <Routes>
            <Route path="/" element= {<Home />} />
            {/* <Route path="/login" element = {<Login onLogin={setLoggedInUser}/>} />
            <Route path='/register' element = {<Registration />} />
            <Route path='/my-offers' element = {<ShowMyProperty user={loggedInUser} onLogin={setLoggedInUser}/>} />
            <Route path='/add-cottage' element = {<NewCottage user={loggedInUser}/>} /> */}

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

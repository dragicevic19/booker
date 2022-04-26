import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Registration from './components/registration/Registration';
import SideNavbar from './components/navbar/SideNavbar';
import { useState } from "react"
import ShowMyProperty from './components/showMyProperty/ShowMyProperty';


function App() {

  const [loggedInUser, setLoggedInUser] = useState(null);

  const onUserLogin = (user) => {
    setLoggedInUser(user)
  }

  return (
    <Router>
      <div className="App">
        { loggedInUser ? <SideNavbar user={loggedInUser} /> : null }

        <Navbar loggedInUser={loggedInUser} />
        <div className="content">
          <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/login" element = {<Login onLogin={onUserLogin}/>} />
            <Route path='/register' element = {<Registration />} />
            <Route path='/myBoats' element = {<ShowMyProperty />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

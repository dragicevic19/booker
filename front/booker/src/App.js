import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Registration from './components/registration/Registration';
import Validation from './components/add_fishing_lesson/FishingLessonValidation'
import { useState } from 'react';
import ShowMyProperty from './components/showMyProperty/ShowMyProperty';
import NewCottage from './components/addCottage/NewCottage';


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
            <Route path='/add-lesson' element = {<Validation  user={loggedInUser}/>}/>
            <Route path='/my-offers' element = {<ShowMyProperty user={loggedInUser} onLogin={setLoggedInUser}/>} />
            <Route path='/add-cottage' element = {<NewCottage user={loggedInUser}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

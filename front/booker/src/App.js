import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Registration from './components/registration/Registration';
import Validation from './components/add_fishing_lesson/FishingLessonValidation'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/login" element = {<Login />} />
            <Route path='/register' element = {<Registration />} />
            <Route path='/FishingLessonValidation' element = {<Validation />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

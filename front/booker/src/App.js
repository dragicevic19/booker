import Home from './client/components/Home';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { useState } from "react"
import DashboardHome from './dashboard/pages/home/DashboardHome';
import Registration from './pages/registration/Registration';


function App() {

  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/logout' element={<></>} />
        <Route path='/service-reg' element={<Registration />} />

        <Route path='/dashboard'>
              <Route index element={<DashboardHome />} />
              <Route path='my-offers' element={<></>}/>
              <Route path='res-hist' element={<></>} />
              <Route path='future-res' element={<></>} />
              <Route path='reports' element={<></>} />
              <Route path='profile' element={<></>} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  )
  //   <Router>
  //     <div className="App">
  //       <Navbar loggedInUser={loggedInUser} />
  //       <div className="content">
  //         <Routes>
  //           <Route path="/" element= {<Home />} />
  //           <Route path="/login" element = {<Login onLogin={setLoggedInUser}/>} />
  //           <Route path='/register' element = {<Registration />} />
  //           <Route path='/my-offers' element = {<ShowMyProperty user={loggedInUser} onLogin={setLoggedInUser}/>} />
  //           <Route path='/add-cottage' element = {<NewCottage user={loggedInUser}/>} />

  //           <Route path='/dashboard'>
  //             <Route index element={<DashboardHome />} />
  //           </Route>
  //         </Routes>
  //       </div>
  //     </div>
  //   </Router>
  // );
}

export default App;

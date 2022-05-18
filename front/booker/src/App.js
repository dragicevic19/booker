import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Registration from "./pages/registration/Registration"
import DashboardHome from "./dashboard/pages/home/DashboardHome"
import List from './dashboard/pages/list/List';
import New from './dashboard/pages/new/New';
// import NewCottage from './dashboard/pages/newCottage/NewCottage';

function App() {

  return (
    <Router>
      <div className="App">  
        <div className="content">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path='logout' element={<></>}/>
              <Route path='logout' element={<></>} />
              <Route path='host-register' element={<Registration />} />
            </Route>

            <Route path='/dashboard'>
              <Route index element={<DashboardHome />} />
              <Route path='my-offers'>
                <Route index element={<List />} />
                <Route path=':id' element />
                <Route path='new' element={<New />} />
              </Route> 
              <Route path='res-hist' element={<></>} />
              <Route path='future-res' element={<></>} />
              <Route path='reports' element={<></>} />
              <Route path='profile' element={<></>} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

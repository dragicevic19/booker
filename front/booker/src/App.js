import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Registration from "./pages/registration/Registration"
import DashboardHome from "./dashboard/pages/home/DashboardHome"
import List from './dashboard/pages/list/List';
import RegReqList from './dashboard/pages/list/RegReqList';
import Login from './pages/login/Login';
 
// import NewCottage from './dashboard/pages/newCottage/NewCottage';
import New from './dashboard/pages/new/New';
import NotificationProvider from './components/notification/NotificationProvider';


function App() {

  return (
    <Router>
      <div className="App">  
        <div className="content">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<Login/>}/>
              <Route path='service-reg' element={<Registration />} />
            </Route>

            <Route path='/dashboard'>
              <Route index element={<DashboardHome />} />
              <Route path='my-offers'>
                <Route index element={<List />} />
                <Route path=':id' element />
                <Route path='new' element={<NotificationProvider><New /></NotificationProvider>} />
              </Route> 
              <Route path='res-hist' element={<></>} />
              <Route path='future-res' element={<></>} />
              <Route path='reports' element={<></>} />
              <Route path='profile' element={<></>} />
              <Route path="reg-req" element={<RegReqList />}/>
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Registration from "./pages/registration/Registration"
import DashboardHome from "./dashboard/pages/home/DashboardHome"
import List from './dashboard/pages/list/List';
import RegReqList from './dashboard/pages/list/RegReqList';
import Login from './pages/login/Login';
import New from './dashboard/pages/new/New';
import NotificationProvider from './components/notification/NotificationProvider';
import Single from './dashboard/pages/single/Single';
import Hotels from './pages/hotels/Hotels';
import Cottage from './pages/cottage/Cottage';
import { Switch } from '@mui/material';
import UserProfile from '../src//userProfile/UserProfile';
import DeleteReqList from './dashboard/pages/list/DeleteReqList';
import PasswordChange from './pages/login/PasswordChange';

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
              <Route path='host-register' element={<NotificationProvider><Registration /></NotificationProvider>} />
              <Route path="/cottages" element={<Hotels/>}/>
              <Route path="/cottages/:id" element={<Cottage/>}/>
            </Route>

            <Route path='/client-profile' element={<NotificationProvider><UserProfile authOrApi={"auth"}/>
              </NotificationProvider>}/>

            <Route path='/dashboard'>
              <Route index element={<DashboardHome />} />
              <Route path='my-offers'>
                <Route index element={<List adminRequest={false} serviceType={"offers"}/>} />
                <Route path=':id' element={<Single />} />
                <Route path='new' element={<NotificationProvider><New edit={false} title={'Add New Cottage'}/></NotificationProvider>} />
                <Route path='edit/:id' element={<NotificationProvider><New edit={true} title={'Edit Cottage'}/></NotificationProvider>} />
              </Route> 
              <Route path='res-hist' element={<></>} />
              <Route path='future-res' element={<></>} />
              <Route path='reports' element={<></>} />
              <Route path='profile' element={<NotificationProvider><UserProfile authOrApi={"api"}/>
              </NotificationProvider>}/>
              <Route path="reg-req" element={<RegReqList />}/>
              <Route path="del-req" element={<DeleteReqList />}/>
              
              <Route path="cottages"> 
                <Route index element={<List adminRequest={true} userType={'ROLE_COTTAGE_OWNER'} entityType={"cottages"}/>}/>
                <Route path=':id' element={<Single singleType="single_cottage"/>} />
              </Route> 

              <Route path="boats">
                <Route index element={<List adminRequest={true} userType={'ROLE_BOAT_OWNER'} entityType={"boats"}/>}/>
                <Route path=':id' element={<Single singleType="single_boat"/>} />
              </Route> 
              
              <Route path="lessons">
                <Route index element={<List adminRequest={true} userType={'ROLE_INSTRUCTOR'} entityType={"lessons"}/>}/>
                <Route path=':id' element={<Single singleType="single_lesson"/>} />
              </Route> 

              <Route path="service_providers">
                <Route index element={<List adminRequest={true} userType={'ROLE_ADMIN'} entityType={"service_providers"}/>}/>
                <Route path=':id' element={<Single singleType="single_service_provider"/>} />
              </Route> 

              <Route path="clients">
                <Route index element={<List adminRequest={true} userType={'ROLE_ADMIN'} entityType={"clients"}/>}/>
                <Route path=':id' element={<Single singleType="single_client"/>} />
              </Route> 

              <Route path="administrators">
                <Route index element={<List adminRequest={true} userType={'ROLE_SUPER_ADMIN'} entityType={"administrators"}/>}/>
                <Route path=':id' element={<Single singleType="single_administrator"/>} />
              </Route> 

            </Route>
            <Route path="/password-change" element={<NotificationProvider>
              <PasswordChange/>
            </NotificationProvider>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

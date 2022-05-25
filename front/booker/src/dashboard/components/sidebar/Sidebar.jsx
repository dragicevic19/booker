import "./sidebar.scss"
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import PhishingOutlinedIcon from '@mui/icons-material/PhishingOutlined';
import DirectionsBoatFilledOutlinedIcon from '@mui/icons-material/DirectionsBoatFilledOutlined';
import {Link} from "react-router-dom"
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PhishingIcon from '@mui/icons-material/Phishing';
import SailingIcon from '@mui/icons-material/Sailing';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import GroupIcon from '@mui/icons-material/Group';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const Sidebar = () => {
  const user = {type:'COTTAGE_OWNER'}

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/dashboard" style={{textDecoration: "none"}}>
          <span className="logo">the booker</span>
        </Link>
      </div>
      <hr />
      <div className="center">

        { user.type !== 'ADMIN' && user.type!=='CLIENT' && (<><ul>
        <p className="title">LISTS</p>
        
        <Link to="/dashboard/my-offers" style={{textDecoration: "none"}}>
          <li>
            { user.type === 'COTTAGE_OWNER' && <CottageOutlinedIcon className="icon" /> }
            { user.type === 'BOAT_OWNER' && <PhishingOutlinedIcon className="icon" /> }
            { user.type === 'INSTRUCTOR' && <DirectionsBoatFilledOutlinedIcon className="icon" /> }
            <span>My Offers</span>
          </li>
        </Link>
        <Link to="/dashboard/res-hist" style={{textDecoration: "none"}}>
          <li>
            <ViewListOutlinedIcon className="icon" />
            <span>Reservations History</span>
          </li>
        </Link>
        <Link to="/dashboard/future-res" style={{textDecoration: "none"}}>
          <li>
            <ViewListOutlinedIcon className="icon" />
            <span>Future Reservations</span>
          </li>
        </Link>
        <p className="title">REPORTS</p>
        <Link to="/dashboard/reports" style={{textDecoration:"none"}}>
          <li>
            <AssessmentOutlinedIcon className="icon" />
            <span>Reports</span>
          </li>
        </Link>

        <p className="title">USER</p>

        <li>
          <NotificationsActiveOutlinedIcon className="icon" />
          <span>Notifications</span>
        </li>
        <Link to="/dashboard/profile" style={{textDecoration: "none"}}>
          <li>
            <PersonOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
        </Link>
        <Link to="/logout" style={{textDecoration: "none"}}>
          <li>
            <LogoutOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </Link>
      </ul></>)}
          
      { user.type === 'ADMIN' && (<><ul>
      <p className="title">OFFERS</p>

      <li>
        <CottageOutlinedIcon className="icon" />
        <span>Cottages</span>
      </li>
      <li>
        <SailingIcon className="icon" />
        <span>Boats</span>
      </li>
      <li>
        <PhishingIcon className="icon" />
        <span>Fishing Lessons</span>
      </li>

      <p className="title">USERS</p>
      <li>
        <GroupIcon className="icon" />
        <span>Clients</span>
      </li>
      <li>
        <SupervisedUserCircleIcon className="icon" />
        <span>Service Providers</span>
      </li>
      <li>
        <AdminPanelSettingsIcon className="icon" />
        <span>Administrators</span>
      </li>

      <p className="title">REQUESTS</p>
      <Link to="/dashboard/reg-req" style={{textDecoration: "none"}}>
        <li>
          <ContactMailIcon className="icon" />
          <span>Registration Requests</span>
        </li>
      </Link>
      <li>
        <ThumbDownAltIcon className="icon" />
        <span>Complaints</span>
      </li>
      
      <p className="title">FINANCIAL</p>
      <li>
        <AttachMoneyIcon className="icon" />
        <span>Financial</span>
      </li>

      <p className="title">LOYALTY PROGRAM</p>
      <li>
        <MilitaryTechIcon className="icon" />
        <span>Loyalty Program</span>
      </li>

      <p className="title">REPORTS</p>
      <li>
        <AssessmentOutlinedIcon className="icon" />
        <span>Reports</span>
      </li>

      <p className="title">USER</p>
      <li>
        <NotificationsActiveOutlinedIcon className="icon" />
        <span>Notifications</span>
      </li>
      <li>
        <PersonOutlinedIcon className="icon" />
        <span>Profile</span>
      </li>
      <li>
        <LogoutOutlinedIcon className="icon" />
        <span>Logout</span>
      </li>
    </ul></>)}
    </div> 
  </div>
  )
}

export default Sidebar
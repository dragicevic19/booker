import ComplaintTable from "./ComplaintTable"
import DashNavbar from "../../dashboard/components/navbar/DashNavbar"
import Sidebar from "../../dashboard/components/sidebar/Sidebar"
import "./list.scss"

const ComplaintList = () => {
  return (
    <div className="dashList">
      <Sidebar/>
      <div className="dashListContainer">
        <DashNavbar/>
            <ComplaintTable/>
      </div>
    </div>
  )
}

export default ComplaintList
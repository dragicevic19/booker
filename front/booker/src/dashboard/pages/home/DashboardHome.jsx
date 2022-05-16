import DashNavbar from "../../components/navbar/DashNavbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.scss"

const DashboardHome = () => {
  return (
    <div className="dashHome">
      <Sidebar />
      <div className="dashHomeContainer">
        <DashNavbar />
      </div>
    </div>
  )
}

export default DashboardHome
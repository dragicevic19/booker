import React from 'react'
 
import DashNavbar from "../../../dashboard/components/navbar/DashNavbar"
import Sidebar from "../../../dashboard/components/sidebar/Sidebar"
import ReservationsOfClient from './ReservationsOfClient'

const UserReservationList = ({history}) => {
  return (
    <div className="dashList">
      <Sidebar/>
      <div className="dashListContainer">
        <DashNavbar/>
        <ReservationsOfClient history={history} />
      </div>
    </div>
  )
}

export default UserReservationList
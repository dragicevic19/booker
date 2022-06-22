import React from 'react'
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import useFetch from "../../../hooks/useFetch";
import { DataGrid } from "@mui/x-data-grid";
import "../../../dashboard/components/datatable/datatable.scss"
import { AuthContext } from "../../../components/context/AuthContext";
import { reservationColumnsForClient } from '../../../dashboard/resColumns';
import FillReport from '../../../dashboard/components/fillReport/FillReport';
import NotificationProvider from '../../../components/notification/NotificationProvider';
import ComplaintForm from '../../complaints/ComplaintForm';
import RatingForm from './RatingForm';


const ReservationsOfClient = ({history,typeOfRes}) => {// tip rezervacije brod,vikendica,cas
  const navigate = useNavigate();
  const location = useLocation();
  
  const path = location.pathname.split("/")[2];
  const [list, setList] = useState();
	const { user } = useContext(AuthContext);
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${user.accessToken}`,
  }

  const link = history ? `http://localhost:8080/api/reservations-of-user/history/${user.id}/${typeOfRes}` : `http://localhost:8080/api/reservations-of-user/future/${user.id}/0`

  const { data, loading, error } = useFetch(link);
  console.log(data);

  
  useEffect(() => {
    setList(data);
  }, [data]);

  const columns = reservationColumnsForClient;

  


  // const [showReportModal, setShowReportModal] = useState(false);
  // const [showUsersInfoModal, setShowUsersInfoModal] = useState(false);
  const [selectedReservationId, setSelectedReservationId] = useState();

  const [selectedItem, setSelectedItem] = useState();

  // const handleOnCellClick = (params) => {
  //   if (params.field !== 'client'){
  //     return;
  //   }
  //   console.log(params.id);
  //   setSelectedReservationId(params.id);
  //   setShowUsersInfoModal(!showUsersInfoModal);
  // };

 

  // const newReportClick = (id) => {
  //   setSelectedItem(id);
  //   setShowReportModal(!showReportModal);
  // }

  const findReservationDataById = (id) =>
  {
    for (let i of list)
    {
      if (i.id === id)
        return i; 
    }
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div 
              //onClick={()=> newReportClick(params.row.id)}
              disabled = {history === false || params.row.status === "now"}
            >
              <NotificationProvider>
                <ComplaintForm reservationId={params.row.id}/>
              </NotificationProvider>
            </div>
            <div>
              <NotificationProvider>
                 <RatingForm reservationId={params.row.id} hasClientRated={findReservationDataById(params.row.id).hasClientRated}/>
              </NotificationProvider>
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        <h1>Reservations</h1>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        getRowId={(row) => row.id}
        // onCellClick={handleOnCellClick}
      />

 

      {/* {showReportModal && <><NotificationProvider>
        <FillReport
          reservationId={selectedItem} 
          showReportModal={showReportModal}
          setShowReportModal={setShowReportModal}
      /></NotificationProvider></>} */}

    
    </div>
  );
}

export default ReservationsOfClient
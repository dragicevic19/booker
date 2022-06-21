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
              className="viewButton"
              disabled = {history === false || params.row.status === "now"}
            >Fill Report
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
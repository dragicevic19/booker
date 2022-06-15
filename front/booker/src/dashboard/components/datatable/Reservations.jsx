import React from 'react'
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import useFetch from "../../../hooks/useFetch";
import { DataGrid } from "@mui/x-data-grid";
import "./datatable.scss"
import { AuthContext } from "../../../components/context/AuthContext";
import { reservationColumns } from '../../resColumns';

const Reservations = ({history}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [list, setList] = useState();
	const { user } = useContext(AuthContext);
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${user.accessToken}`,
  }

  const link = history ? `http://localhost:8080/api/reservations/history/${user.id}` : `http://localhost:8080/api/reservations/future/${user.id}`

  const { data, loading, error } = useFetch(link);
  
  useEffect(() => {
    setList(data);
  }, [data]);

  const columns = reservationColumns;

  const [showNewResModal, setShowNewResModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const handleOnCellClick = (params) => {
    if (params.field === 'client'){
      console.log("PROSAO");
    }
  };

  const newReservationClick = (id) => {
    setSelectedItem(id);
    setShowNewResModal(!showNewResModal);
  }

  const newReportClick = (id) => {
    setSelectedItem(id);
    setShowReportModal(!showReportModal);
  }

  console.log(data);
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div 
              onClick={()=> newReportClick(params.row.id)}
              className="viewButton"
              disabled = {history === false || params.row.status === "now"}
            >Fill Report
            </div>
            <div 
              onClick={()=>newReservationClick(params.row.id)}
              className="newActionButton"
              disabled={params.row.status !== "now"}
            >New Reservation
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
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row.id}
        onCellClick={handleOnCellClick}
      />

      {/* {selectedItem && <>
      <FillReport
        offerId={selectedItem}
        showAddActionModal={showAddActionModal}
        setShowAddActionModal={setShowAddActionModal}
      />
      <NewReservationOwner 

      />
      </>} */}
    </div>
  );
}

export default Reservations
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { DataGrid } from "@mui/x-data-grid";
import "./datatable.scss"
import { columnsData } from "../../datatablesource";
import FormDialog from "../datatable/ExplanationDialog";


const RegRequests = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [list, setList] = useState();
  const user = {id: 4, type: 'admin'} // ...

  const { data, loading, error } = useFetch(`http://localhost:8080/auth/user/requests?enabled=false`);

  const columns = columnsData[user.type];

  useEffect(() => {
    setList(data);
  }, [data]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = (id) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAccept = async (id) => {
    fetch(`http://localhost:8080/auth/user/enable/${id}`, {
        //uspeo sam azurirati i bez method: PUT (sa tim sam imao problema pa sam ga pokusao izbeci)
      })
      try {
        setList(list.filter((item) => item.id !== id));
      } catch (err) {}
  };

  const handleReject = async (id) => {

    fetch(`http://localhost:8080/auth/user/reject-request/${id}`, {
        
      })
    try {
      setList(list.filter((item) => item.id !== id));
    } catch (err) {}
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 140,
      renderCell: (params) => {
        return (
          <FormDialog userId={params.row.id} handleAccept={handleAccept} handleReject={handleReject}/>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Registration requests
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row.id}
      />
    </div>
  );
};

export default RegRequests
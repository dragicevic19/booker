import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { DataGrid } from "@mui/x-data-grid";
import "./datatable.scss"
import { columnsData } from "../../datatablesource";


const Datatable = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [list, setList] = useState();
  const user = {id: 3, type: 'instructor'} // ...
  const { data, loading, error } = useFetch(`http://localhost:8080/auth/${path}/${user.id}`);

  const columns = columnsData[user.type];


  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id) => {
    console.log('tralla');
    try {
      await axios.delete(`http://localhost:8080/api/${path}/${id}`);
      setList(list.filter((item) => item.id !== id));
    } catch (err) {}
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div 
              onClick={()=>navigate(`/dashboard/${path}/${params.row.id}`)}
              className="viewButton"
            >View
            </div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
              disabled={params.row.status === "reserved"}
            >
              Delete
            </div>
            <Link to={`/dashboard/${path}/new-action/${params.row.id}`} style={{ textDecoration: "none"}}>
              <div className="newActionButton">New Action</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        <Link to={`/dashboard/${path}/new`} className="link">
          Add New
        </Link>
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

export default Datatable
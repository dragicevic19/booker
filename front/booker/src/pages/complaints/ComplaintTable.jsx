import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { DataGrid } from "@mui/x-data-grid";
import "./complaintTable.scss"
import { columnsData } from "../../dashboard/datatablesource";
import { AuthContext } from "../../components/context/AuthContext";
import NewActionModal from "../../dashboard/components/newActionModal/NewActionModal";
import { Identity } from "@mui/base";
import ComplaintForm from "./ComplaintForm";
import NotificationProvider from "../../components/notification/NotificationProvider";


const ComplaintTable = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [list, setList] = useState();
	const { user } = useContext(AuthContext);
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${user.accessToken}`,
  }

  const [showAddActionModal, setShowAddActionModal] = useState(false);
  const [action, setAction] = useState({})

  const { data, loading, error } = useFetch(`http://localhost:8080/auth/entities-for-complaints/${user.id}`);

  const columns = columnsData[user.type];

  const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
    setList(data);
  }, [data]);


  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 280,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <div 
              onClick={()=>handleViewBtnClick(params.row.id)}
              className="viewButton"
            >View
            </div>   ako bude zatrebalo kasnije mozda*/} 
            <div>
              <NotificationProvider>
                <ComplaintForm offerId={params.row.id}/>
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
        <h1>Attended Offers</h1>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row.id}
      />

      {selectedItem && <NewActionModal
        offerId={selectedItem}
        showAddActionModal={showAddActionModal}
        setShowAddActionModal={setShowAddActionModal}
      />}
    </div>
  );
};

export default ComplaintTable
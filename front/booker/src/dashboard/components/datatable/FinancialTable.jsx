import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { DataGrid } from "@mui/x-data-grid";
import "./datatable.scss"
import { columnsData } from "../../datatablesource";
import { AuthContext } from "../../../components/context/AuthContext";
import ChangeProfitPercentage from "./ChangeProfitPercentage";
import DateBox from "devextreme-react/date-box";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


const FinancialTable = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [list, setList] = useState();
  const [totalInfo, setTotalInfo] = useState();
	const { user } = useContext(AuthContext);
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${user.accessToken}`,
  }

  const { data, loading, error } = useFetch(`http://localhost:8080/api/reservations-profit`);
  
  const columns = columnsData[user.type + "/FINANCIAL"];

  useEffect(() => {
    setList(data);
  }, [data]);
  
  const [startDate, setStartDate] = useState(Date.now());
  const [endDate, setEndDate] = useState(Date.now());
  const [startDatePicked, setStartDatePicked] = useState(false);
  const [endDatePicked, setEndDatePicked] = useState(false);

  const calculateTotalFlow = () =>
  {
    var totalCashFlow = 0;
    for(let reservation of data)
    {
      var cashFlow = parseInt(reservation.cashFlow.slice(1));
      totalCashFlow += cashFlow;
    }

    return '$ ' + totalCashFlow;
  }

  const calculateTotalExpenses = () =>
  {
    var totalExpenses = 0;
    for(let reservation of data)
    {
      var cashFlow = parseInt(reservation.cashFlow.slice(1));
      var profit = parseInt(reservation.profit.slice(1));
      var expenses = cashFlow - profit
      totalExpenses += expenses;
    }

    return '$ ' + totalExpenses;
  }

  const calculateTotalProfit = () =>
  {
    var totalProfit = 0;
    for(let reservation of data)
    {
      var profit = parseInt(reservation.profit.slice(1));
      totalProfit += profit;
    }

    return '$ ' + totalProfit;
  }

  return (
    <div className="datatable">
        <div className="datatableTitle">
            <h2>Income From Reservations</h2>
            <ChangeProfitPercentage/>
                <div className="inputs">
                    <label>Start Date</label>
                    <DateBox 
                    defaultValue={new Date()}
                    type="date"
                    onValueChanged={(e)=>{setStartDatePicked(true); setStartDate(e.value);}}
                    />
                </div>
                <div className="inputs">
                    <label>End Date</label>
                    <DateBox 
                    defaultValue={new Date()}
                    type="date"
                    min={startDate}
                    onValueChanged={(e)=>{setEndDatePicked(true); setEndDate(e.value);}}
                    />
            </div>
        </div>
        
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row.id}
      />
      <div>{totalInfo}</div>
      <div className="dashboard-financial-footer">
        <div>
          <h2>Total Cash Flow</h2>
          <h1 style={{color: '#006400'}}><b>{calculateTotalFlow()}</b></h1>
        </div>
        <div>
          <h2>Total Expenses</h2>
          <h1 style={{color: '#8B0000'}}><b>{calculateTotalExpenses()}</b></h1>
        </div>
        <div>
          <h2>Total Profit</h2>
          <h1 style={{color: '#DAA520'}}><b>{calculateTotalProfit()}</b></h1>
        </div>
      </div>
    </div>
  );
};

export default FinancialTable
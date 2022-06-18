import axios from "axios"
import { useContext, useEffect } from "react"
import { useState } from "react"
import { AuthContext } from "../../../components/context/AuthContext"
import useFetch from "../../../hooks/useFetch"
import Chart from "../../components/charts/Chart"
import Dropdown from "../../components/dropdownCheckboxes/Option"
import DashNavbar from "../../components/navbar/DashNavbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.scss"

const DashboardHome = () => {

  const {user} = useContext(AuthContext)
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${user.accessToken}`,
  }

  const [selectedYear, setSelectedYear] = useState();

  const [monthlyData, setMonthlyData] = useState([]);
  const [yearlyData, setYearlyData] = useState([]);

  const onMonthSelected = async (selectedMonth) => {
    const res = await axios.get(`http://localhost:8080/api/reservations/monthly/${user.id}/${selectedMonth.value}`, {
      headers: headers
    })
    console.log(res.data);
    setMonthlyData(res.data);
  }

  const onYearSelected = async (selectedYear) => {
    const res = await axios.get(`http://localhost:8080/api/reservations/yearly/${user.id}/${selectedYear}`, {
      headers: headers
    })
    console.log(res);
  }

  const monthOptions = [
    {value:1, label: 'January'},
    {value:2, label: 'February'},
    {value:3, label: 'March'},
    {value:4, label: 'April'},
    {value:5, label: 'May'},
    {value:6, label: 'June'},
    {value:7, label: 'July'},
    {value:8, label: 'August'},
    {value:9, label: 'September'},
    {value:10, label: 'October'},
    {value:11, label: 'November'},
    {value:12, label: 'December'},
  ];

  const yearOptions = [
    {value:2022, label: '2022'},
    {value:2021, label: '2021'},
    {value:2020, label: '2020'},
  ];

  return (
    <div className="dashHome">
      <Sidebar />
      <div className="dashHomeContainer">
        <DashNavbar />
        <div className="datePicker">
          <label>Select month</label>
          <Dropdown options={monthOptions} setSelected={onMonthSelected} multiSelect={false}/>
        </div>
        <div className="charts">
          <Chart title="Monthlty Revenue" aspect={3 / 1} data={monthlyData} />
        </div>
        <div className="datePicker year">
          <label>Select year</label>
          <Dropdown options={yearOptions} setSelected={onYearSelected} multiSelect={false}/>
        </div>
        <div className="charts">
          <Chart title="Yearly Revenue" aspect={3 / 1} data={yearlyData}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          {/* <Table /> */}
        </div>
      </div>
    </div>
  )
}

export default DashboardHome
import { useContext, useState } from "react";
import "./NewActionModal.scss";
import DateBox from 'devextreme-react/date-box';
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Calendar from "../calendar/Calendar"
import FormInput from "../../../components/formInput/FormInput";
import { SelectBox } from "devextreme-react";
import axios from "axios";
import { AuthContext } from "../../../components/context/AuthContext";

const NewActionModal = ({offerId, setAction, showAddActionModal, setShowAddActionModal}) => {

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  const { user } = useContext(AuthContext);
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${user.accessToken}`,
  }
  
  const addBtnClick = (e) => {
    e.preventDefault();
    try{
      let newPeriod = null;
      if (type==='SALE - Fast Reservation'){
        newPeriod = {
          startDate: startDate,
          endDate: endDate,
          price: price,
        }
        axios.post(`http://localhost:8080/api/newDiscount/${offerId}`, newPeriod, {
          headers: headers
        });
      }
      else{
        newPeriod = {
          startDate: startDate,
          endDate: endDate
        }
        axios.post(`http://localhost:8080/api/unavailable-period/${offerId}`, newPeriod, {
          headers: headers
        });
      }
      
    } catch(error){
      console.log(error)
    }
  }

  const handleSubmit = () => {
  }

  const onClose = () => {
    setStartDate("");
    setEndDate("");
    setPrice("");
    setType("");
    setShowAddActionModal(!showAddActionModal);
  }

  return (
    <>
    <Dialog fullWidth maxWidth="xl" className="dialog" open={showAddActionModal} onClose={onClose} onSubmit={handleSubmit}>
      <DialogTitle className="dialogTitle">Add new period of occupancy</DialogTitle>
      <hr/>
      <DialogContent className="dialogContent">
        <form onSubmit={addBtnClick}>
          <div className="formWrapper">
            <div className="inputsWrapper">
              <div className="inputs">
                <label>Start Date</label>
                <DateBox 
                  defaultValue={new Date()}
                  type="date"
                  min={Date.now()}
                  onValueChanged={(e)=>{setStartDate(e.value)}}
                />
              </div>
              <div className="inputs">
                <label>End Date</label>
                <DateBox 
                  defaultValue={new Date()}
                  type="date"
                  min={startDate}
                  onValueChanged={(e)=>{setEndDate(e.value)}}
                />
              </div>
            </div>
            <div className="inputsWrapper">
              <div className="inputs">
                <label>Type</label>
                <SelectBox 
                  width={215}
                  items={['SALE - Fast Reservation', 'Unavailable Period']}
                  onValueChange={(e)=>{setType(e)}}
                 />
              </div>
              {type==='SALE - Fast Reservation' && <div className="inputs">
                <label>Price [$]</label>
                <input className="input"
                  name={"price"}
                  type={"number"}
                  placeholder={"1000"}
                  required={true}
                  min={0}
                  onChange={(e)=>{setPrice(e.target.value)}}
                />
              </div>}
            </div>
            <button className="addBtn">ADD</button>
          </div>
        </form>
        <Calendar />
      </DialogContent>

    </Dialog>
    </>
  )
}

export default NewActionModal
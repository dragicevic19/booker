import axios from 'axios';
import { DateBox, SelectBox } from 'devextreme-react'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../components/context/AuthContext';
import { useNotification } from '../../../components/notification/NotificationProvider';

const NewActionDetails = ({offerId, discounts, setDiscounts, unavailablePeriods, setUnavailablePeriods}) => {

  const [startDate, setStartDate] = useState(Date.now());
  const [endDate, setEndDate] = useState(Date.now());
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  const { user } = useContext(AuthContext);
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${user.accessToken}`,
  }
  const dispatch = useNotification();

  
  const addBtnClick = async (e) => {
    e.preventDefault();
    try{
      let newPeriod = null;
      if (type==='SALE - Fast Reservation'){
        newPeriod = {
          startDate: startDate,
          endDate: endDate,
          price: price,
        }
        await axios.post(`http://localhost:8080/api/newDiscount/${offerId}`, newPeriod, {
          headers: headers
        });
        newPeriod.typeId = 2;
        newPeriod.text = 'SALE - Fast Reservation';
        setDiscounts([...discounts, newPeriod]);
      }
      else{
        newPeriod = {
          startDate: startDate,
          endDate: endDate
        }
        await axios.post(`http://localhost:8080/api/unavailable-period/${offerId}`, newPeriod, {
          headers: headers
        });
        newPeriod.typeId = 4;
        newPeriod.text = 'Unavailable Period';
        setUnavailablePeriods([...unavailablePeriods, newPeriod]);
      }

      sendNotification("success", 'Period is successfully added!');
    } catch(error){

      sendNotification("error", 'Entered period is unavailable!');
    }
  }

  const sendNotification = (type, message) => {
    dispatch({
      type: type,
      message: message,
      navigateTo: false
    });
  }

  return (
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
  )
}

export default NewActionDetails
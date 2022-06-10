import { useState } from "react";
import "./NewActionModal.scss";
import DateBox from 'devextreme-react/date-box';
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Calendar from "../calendar/Calendar"
import FormInput from "../../../components/formInput/FormInput";
import { SelectBox } from "devextreme-react";

const NewActionModal = ({action, setAction, showAddActionModal, setShowAddActionModal}) => {

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  
  const [showPrice, setShowPrice] = useState(false);
  const addBtnClick = (e) => {
    e.preventDefault();
  }

  const handleSubmit = () => {

  }

  const handleSelect = () => {

  }

  return (
    <>
    <Dialog fullWidth maxWidth="xl" className="dialog" open={showAddActionModal} onClose={() => setShowAddActionModal(!showAddActionModal)} onSubmit={handleSubmit}>
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
                />
              </div>

              <div className="inputs">
                <label>End Date</label>
                <DateBox 
                  defaultValue={new Date()}
                  type="date"
                  min={Date.now()}
                />
              </div>
            </div>
            <div className="inputsWrapper">
              <div className="inputs">
                <label>Type</label>
                <SelectBox 
                  width={215}
                  items={['fast', 'nofast']}
                  onValueChange={(e)=>{setType(e.value); setShowPrice(true);}}
                 />
                {/* <select onChange={handleSelect}>
                  <option value="SALE - Fast Reservation">
                    SALE - Fast Reservation
                  </option>
                  <option value="Unavaliable">
                    Unavaliable
                  </option>
                </select> */}
              </div>
              {showPrice && <div className="inputs">
                <label>Price</label>
                <input className="input"
                  name={"price"}
                  type={"number"}
                  placeholder={"1500"}
                  required={true}
                  min={0}
                />
              </div>}
            </div>
          </div>
          <button className="addBtn">ADD</button>
        </form>

        <Calendar />

      </DialogContent>

    </Dialog>
    </>
  )
}

export default NewActionModal
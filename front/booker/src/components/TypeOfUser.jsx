import { Button } from "@mui/material";
import { useState } from "react";

const TypeOfUser = ({ nextStep, handleChange, setType, values }) => {

  const [isActiveBoat, setActiveBoat] = useState(false);
  const [isActiveCottage, setActiveCottage] = useState(false);
  const [isActiveInstructor, setActiveInstructor] = useState(false);
  const [isActiveClient, setActiveClient] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);


  const toggleBoatClass = () => {
    setType(1)
    setActiveBoat(true)
    setActiveCottage(false)
    setActiveInstructor(false)
    setActiveClient(false)
    setBtnDisabled(false)
  }
  const toggleCottageClass = () => {
    setType(2)
    setActiveCottage(true)
    setActiveBoat(false)
    setActiveInstructor(false)
    setActiveClient(false)
    setBtnDisabled(false)
  }
  const toggleInstructorClass = () => {
    setType(3)
    setActiveInstructor(true)
    setActiveBoat(false)
    setActiveCottage(false)
    setActiveClient(false)
    setBtnDisabled(false)
  }
  const toggleClientClass = () => {
    setType(4)    
    setActiveClient(true)
    setActiveInstructor(false)
    setActiveBoat(false)
    setActiveCottage(false)
    setBtnDisabled(false)
  }

  return (
    <div className="user-type-picker">
      <h1>Step 1 of 4 - Select user type</h1>
      <div className= {isActiveBoat ? 'boat-owner-active' : 'boat-owner-inactive'} onClick={toggleBoatClass}>
        <div className="boat-owner-pic" >
          <img src="https://thassosboatsneorion.gr/wp-content/uploads/2021/04/home-about.jpg" alt="boat_owner_reg_pic" />
        </div>
        <label>Rent a Boat</label>
      </div>

      <div className= { isActiveCottage ? 'cottage-owner-active' : 'cottage-owner-inactive' } onClick= {toggleCottageClass}>
        <div className="cottage-owner-pic">
          <img src="https://www.arts.gov/sites/default/files/styles/nea_media_large_16x9/public/CottageTomMarks.jpeg?h=52605a11&itok=0gO-wCVA" alt="cottage_owner_pic" />
        </div>
      <label>Rent a Cottage</label>
      </div>

      <div className= { isActiveInstructor ? 'instructor-active' : 'instructor-inactive' } onClick= {toggleInstructorClass}>
        <div className="instructor-pic">
          <img src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2020/09/931/524/fisherman-istock.jpg?ve=1&tl=1" alt="instructor_pic" />
        </div>
        <label>Offer fishing tours</label>
      </div>

      <div className= { isActiveClient ? 'client-active' : 'client-inactive' } onClick= {toggleClientClass}>
        <div className="instructor-pic">
          <img src="https://www.trisearch.com.au/wp-content/uploads/2020/07/Depositphotos_151249562_m-2015.jpg" alt="client_pic" />
        </div>
        <label>Client</label>
      </div>

      <Button
       style={{
        borderRadius: 5,
        }} 
        className="btnNext"
        variant="contained"
        color="success"
        disabled={btnDisabled}
        onClick={nextStep}
      >NEXT</Button>

    </div>

  )
}

export default TypeOfUser
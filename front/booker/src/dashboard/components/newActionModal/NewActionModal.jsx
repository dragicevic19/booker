import { useState } from "react";
import "./NewActionModal.scss";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Calendar from "../calendar/Calendar"
import NewActionDetails from "./NewActionDetails";
import { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";

const NewActionModal = ({offerId, showAddActionModal, setShowAddActionModal}) => {

  const [discounts, setDiscounts] = useState();
  const [reservedDiscounts, setReservedDiscounts] = useState();
  const [reservations, setReservations] = useState();
  const [unavailablePeriods, setUnavailablePeriods] = useState();


  const [loading, setLoading] = useState(true)
  const [offer, setOffer] = useState();

  const { data, load, error, reFetch} = useFetch(`http://localhost:8080/api/offer/${offerId}`);

  useEffect(() => {
    setOffer(data);
    if (offer) {
      setDiscounts(offer.periodsOfOccupancy.discounts);
      //setReservedDiscounts(offer) ... kad dodas na beku ubaci i ovo
      // i ostale periode.. 
      setLoading(false);
    }
  }, [data]);

  const handleSubmit = () => {
  }

  const onClose = () => {
    setShowAddActionModal(!showAddActionModal);
  }

  return (
    <>
    <Dialog fullWidth maxWidth="xl" className="dialog" open={showAddActionModal} onClose={onClose} onSubmit={handleSubmit}>
      <DialogTitle className="dialogTitle">Add new period of occupancy</DialogTitle>
      <hr/>
      <DialogContent className="dialogContent">
        <NewActionDetails 
          offerId={offerId} 
          discounts={discounts} 
          setDiscounts={setDiscounts} 
          unavailablePeriods={unavailablePeriods}
          setUnavailablePeriods={setUnavailablePeriods}
        />

        <Calendar data={discounts} />
      </DialogContent>

    </Dialog>
    </>
  )
}

export default NewActionModal
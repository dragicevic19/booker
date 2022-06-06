import DashNavbar from "../../../components/navbar/DashNavbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import "./singleLesson.scss"

import Gallery from "../../../../components/gallery/Gallery";
import Rating from "../../../components/rating/Rating";
import useFetch from "../../../../hooks/useFetch"
import { useLocation } from "react-router"
import { useState, useEffect } from "react"
import BookingCalendar from "../../../components/calendar/BookingCalendar"
import { Link } from "react-router-dom";

const SingleLesson = () => {

  const location = useLocation();

  const id = location.pathname.split("/")[3];

  const [offer, setOffer] = useState();

  const [loading, setLoading] = useState(true);

  const { data, load, error} = useFetch(`http://localhost:8080/api/lesson/${id}`)

  useEffect(() => {
    setOffer(data);
    if (offer) {
      setLoading(false);
    }
  }, [data])

  console.log(offer);

  // samo za prikaz jer nemamo jos uvek rezervacije uradjene
  const bookings = [
    new Date(2022, 4, 21),
    new Date(2022, 4, 22),
    new Date(2022, 4, 23),
    new Date(2022, 4, 29),
    new Date(2022, 4, 30),
    new Date(2022, 4, 31),
    new Date(2022, 5, 1),
  ];
  
  
  return (
    <div className="singleLesson">
      <Sidebar />
      {!loading && <div className="singleContainer">
        <DashNavbar />
        <div className="top">
          <div className="left">
            {/* <Link to={`/dashboard/my-offers/edit/${id}`} style={{textDecoration: "none"}}> */}
              {/* <div disabled className="editButton">Edit</div> */}
            {/* </Link> */}
            <h1 className="title">Informations</h1>
            <div className="item">
              <div className="details">
                <h1 className="itemTitle">{offer.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{offer.address.country}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">City:</span>
                  <span className="itemValue">{offer.address.city}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Street:</span>
                  <span className="itemValue">{offer.address.street}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Capacity:</span>
                  <span className="itemValue">{offer.capacity}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Price:</span>
                  <span className="itemValue">{offer.price}$</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Cancellation Fee:</span>
                  <span className="itemValue">{offer.cancellationFee}$</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Regulations:</span>
                  <span className="itemValue">{offer.regulations}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Description:</span><br/>
                  <span className="itemValue">{offer.description}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Included equipment:</span><br/>
                  <span className="itemValue">{offer.fishingEquipment}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <h1 className="title">Rating</h1>
            <Rating rating={offer.rating}/>
          </div>
        </div>

        <div className="bottom">
          <div className="bottomTop">
            <h1 className="title">Gallery</h1>
            <Gallery photos={offer.images}/> 
          </div>
          <div className="bottomBottom">
            <h1 className="title">Calendar</h1>
            <BookingCalendar bookings={bookings} />
          </div>
        </div>
      </div>}
    </div>
  )
}

export default SingleLesson
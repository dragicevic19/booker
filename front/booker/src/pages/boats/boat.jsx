import "./boat.css";
import Navbar from "../../components/navbarHome/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
  faSailboat,
  faShip,
  faRulerHorizontal,
  faGaugeHigh,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../components/context/SearchContext";
import { AuthContext } from "../../components/context/AuthContext";
import Gallery from "../../components/gallery/Gallery";
import Footer from "../../components/footer/Footer";

const Boat = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error} = useFetch(`http://localhost:8080/auth/boat/${id}`)

    console.log(data);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

   const { dates, options } = useContext(SearchContext);

  // const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  // function dayDifference(date1, date2) {
  //   const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  //   const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  //   return diffDays;
  // }
  

  // const days = dayDifference(dates[0].endDate, dates[0].startDate);
  const days =5;
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };


  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading"
      ) : (
        <div className="boatContainer">
          <div className="boatWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="boatTitle">{data.name}</h1>
            <div className="boatAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              {data.address.city}, {data.address.street}
            </div>
            <span className="boatDistance">
              Excellent location – {}m from center
            </span>
            <span className="boatPriceHighlight">
              Book a stay for ${data.price} at this property.
            </span>
            <div className="boatImages">
              <Gallery photos={data.images}/> 
              
            </div>
            <div className="boatDetails">
              <div className="boatDetailsTexts">
                <h1 className="boatTitle">{data.title}</h1>
                <p className="boatDesc">
                    {data.description}<br/>
                    <FontAwesomeIcon icon ={faSailboat}/>Engine number- {data.engineNum}<br/>
                    <FontAwesomeIcon icon ={faShip}/>Engine power- {data.enginePow}kW<br/>
                    <FontAwesomeIcon icon ={faRulerHorizontal}/>Boat lenght- {data.length}m<br/>
                    <FontAwesomeIcon icon ={faGaugeHigh}/>Max speed- {data.maxSpeed}knots<br/>
                    <FontAwesomeIcon icon ={faPeopleGroup}/>Capacity- {data.capacity} people<br/>
                    <FontAwesomeIcon icon ={faPeopleGroup}/>Capacity-{data.fishingEquipment.map((t) => ({t}))} people<br/>
                    
               
                </p>
              </div>
              <div className="boatDetailsPrice">
                <h1>Perfect for a {days}-night stay!</h1>
                  
                <h2>
                  <b>${days * data.price }</b> ({days}{" "}
                  nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          
         <Footer/>
        </div>
      )}
  
    </div>
  );
};

export default Boat;
import "./fishinglesson.css";
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
  faFishFins,
  faLocationCrosshairs,
  faFileLines,
  faMoneyCheck,
  faMoneyBill1Wave,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../components/context/SearchContext";
import { AuthContext } from "../../components/context/AuthContext";
import Gallery from "../../components/gallery/Gallery";
import Footer from "../../components/footer/Footer";
import Rating from "../../dashboard/components/rating/Rating"

const FishingLesson = () => {
  const location = useLocation();
  const id = location.pathname.split("/").pop();
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error} = useFetch(`http://localhost:8080/auth/fishinglesson/${id}`)

 

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

   const { dates, options } = useContext(SearchContext);
  console.log(data);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  

  const days = dayDifference(dates[0].endDate, dates[0].startDate);
  // const days =5;
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
      <Header type="list" activePage="3" />
      {loading ? (
        "loading"
      ) : (
        <div className=" fishinglessonContainer">
          <div className=" fishinglessonWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
             
            <h1 className=" fishinglessonTitle">{data.name}</h1>
            <div className=" fishinglessonAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              {data.address.city}, {data.address.street}
            </div>
            <span className=" fishinglessonDistance">
              Excellent location – {}m from center
            </span>
            <span className=" fishinglessonPriceHighlight">
              Book a stay for ${data.price} at this property.
            </span>
            <div className=" fishinglessonImages">
             
              <Gallery photos={data.images}/> 
              
              
              
            </div>
            <div className=" fishinglessonDetails">
              <div className=" fishinglessonDetailsTexts">
                <h1 className=" fishinglessonTitle">{data.title}</h1>
                <p className=" fishinglessonDesc">
                    <FontAwesomeIcon size="2x" icon ={faFileLines}/> Description- {data.description}<br/><br/><br/>
                    <FontAwesomeIcon size="2x" icon ={faPeopleGroup}/> Capacity- {data.capacity} people<br/>
                    <FontAwesomeIcon size="2x" icon ={faCircleXmark}/> Regulations- {data.regulations}<br/>
                    <FontAwesomeIcon size="2x" icon ={faFishFins}/> Fishing equipment- {data.fishingEquipment.map(t => {return t+", " })}<br/>
                    <FontAwesomeIcon size="2x" icon ={faMoneyBill1Wave}/> Price per day- {data.price}$<br/>
                    <FontAwesomeIcon size="2x" icon ={faMoneyCheck}/> Cancellation fee- {data.cancellationFee}$<br/>
                    <FontAwesomeIcon size="2x" icon ={faCartPlus}/> Additional services- {data.additionalServices.map(t => {return (<div className="addser"><h>{t.name}</h><br/>   Price- {t.price}$<br/>  Description- {t.description}</div>)})}
       
                  </p>
              </div>
              <div className=" fishinglessonDetailsPrice">
              <Rating className="rating" rating = {data.rating}></Rating>
              
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

export default FishingLesson;
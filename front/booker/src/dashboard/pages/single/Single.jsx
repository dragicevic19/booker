import DashNavbar from "../../components/navbar/DashNavbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./single.scss"

import Gallery from "../../../components/gallery/Gallery";
import Rating from "../../components/rating/Rating";
import Calendar from "../../components/calendar/Calendar";
// import { Calendar } from "react-date-range";


const Single = () => {
  
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <DashNavbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Informations</h1>
            <div className="item">
              <div className="details">
                <h1 className="itemTitle">Naziv vikendice</h1>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Serbia</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">City:</span>
                  <span className="itemValue">Novi Sad</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Street:</span>
                  <span className="itemValue">Nova ulica 1</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Number of Rooms:</span>
                  <span className="itemValue">5</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Capacity:</span>
                  <span className="itemValue">10</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Price:</span>
                  <span className="itemValue">100$</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Cancellation Fee:</span>
                  <span className="itemValue">50$</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Regulations:</span>
                  <span className="itemValue">No regulations</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Description:</span><br/>
                  <span className="itemValue">Long lognlasdlkajsdlkj aklsjdlkaj lkasjdlk ajlks jadklj laksjdklaj kldjlkajdlk ajlksjdlka jlkdjalk jskld jalkj kade description jdslkaj lkasjlkjaslkdj laksdkl askldjaj lkjs</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <h1 className="title">Rating</h1>
            <Rating />
          </div>
        </div>

        <div className="bottom">
          <div className="bottomTop">
            <h1 className="title">Gallery</h1>
            <Gallery /> 
          </div>

          <div className="bottomBottom">
            <h1 className="title">Calendar</h1>
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Single
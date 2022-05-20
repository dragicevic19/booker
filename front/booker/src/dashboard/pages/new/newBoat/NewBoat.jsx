import { DriveFolderUploadOutlined } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import AdditionalServicesModal from "../../../../components/additionalServicesModal/AdditionalServicesModal";
import FormInput from "../../../../components/formInput/FormInput";
import FormTextArea from "../../../../components/formTextArea/FormTextArea";
import GearModalInput from "../../../../components/gearModal/gearModalInput/GearModalInput";
import DashNavbar from "../../../components/navbar/DashNavbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import { boatInputs } from "../../../formSource";
import {boatTypes} from "../../../formSource";
import "./newBoat.scss"

const NewBoat = () => {
  const navigate = useNavigate();

  const user = {id: 1, type:"boat_owner"}

  const [showAddServices, setShowAddServices] = useState(false);
  const [showFishingGear, setShowFishingGear] = useState(false);
  const [showNavGear, setShowNavGear] = useState(false);

  const [services, setServices] = useState([])
  const [fishingGear, setFishingGear] = useState([])
  const [navGear, setNavGear] = useState([])

  const [files, setFiles] = useState("");
  
  const [values, setValues] = useState({
    name: "",
    country: "",
    city: "",
    street: "",
    description: "",
    capacity: "",
    regulations: "",
    price: "",
    fee: "",
    boatType: "",
    length: "",
    engineNum: "",
    enginePow: "",
    maxSpeed: "",
  })

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/bookerapp/image/upload",
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      const newBoat = {
        ...values,
        additionalServices: services.map(function(item){
          delete item.id;
          return item;
        }),
        navGear: navGear.map(({name}) => name),
        fishingGear: fishingGear.map(({name}) => name),
        photos: list,
        owner_id: user.id,
      };

      console.log(newBoat)

      await axios.post("http://localhost:8080/auth/add-boat", newBoat);

      navigate('/dashboard/my-offers')
    } catch (err) {console.log(err)}
  };


  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const additionalServices = (e) => {
    e.preventDefault();
    setShowAddServices(!showAddServices);
  }

  const navGearModal = (e) => {
    e.preventDefault();
    setShowNavGear(!showNavGear);
  }

  const fishingGearModal = (e) => {
    e.preventDefault();
    setShowFishingGear(!showFishingGear);
  }

  const handleSelect = (e) => {
    setValues({...values, ["boatType"]: e.target.value}); 
  }

  // const handleImages = async (e) => {
  //   console.log("handleImages");
  //   console.log(files);
    
  //   try {
  //     const list = await Promise.all(
  //       Object.values(files).map(async (file) => {
  //         console.log('usao ovde')
  //         const data = new FormData();
  //         data.append("file", file);
  //         data.append("upload_preset", "upload");
  //         const uploadRes = await axios.post(
  //           "https://api.cloudinary.com/v1_1/bookerapp/image/upload",
  //           data
  //         );

  //         const { url } = uploadRes.data;
  //         return url;
  //       })
  //     ).then((list) => {
  //       setValues({ ['images']: list })
  //       console.log(values.images)
  //     });
      
  //   } catch (err) {console.log(err)}
  // };

  // const onBtn = (e) => {
  //   e.preventDefault();
  //   console.log('btn')
  //   console.log(files)
  // }

  return (
    <div className="newBoat">
      <Sidebar />
      <div className="newContainer">
        <DashNavbar />
        <div className="top">
          <h1>Add New Boat</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="images">
              <span>Uploaded images:</span>
              {/* {values.images.map((photo, i) => (
                <div className="imgWrapper" key={i}>
                  <img
                    className="img"
                    src={URL.createObjectURL(photo)}
                    alt=""  
                  />
                </div>
              ))} */}
              <img
                src={
                  files
                    ? URL.createObjectURL(files[0])
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
              />

            </div>
          </div>
          <div className="right">
            <form onSubmit={handleClick}>
              {boatInputs.map((input) => (
                !input.multiline ? (<>
                  {!input.select ? <FormInput 
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                  :
                  <div className="boatTypeSelect"> 
                    <label>Boat Type</label>
                    <select onChange={handleSelect}>
                      {boatTypes.map((type) => (
                        <option key={type.id} value={type.value}>
                          {type.type}
                        </option>
                      ))}
                    </select>
                  </div>
                  }
                  
                </>)
                :
                  <FormTextArea 
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  /> 
              ))}
              <div className="formInput">
                <label htmlFor="file">
                  Upload images: <DriveFolderUploadOutlined className="icon" />
                </label>
                <input
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>
              <div className="buttons">
                <div className="modalsBtns">
                  <button onClick={navGearModal}>Navigation Equipment</button> 
                  <button onClick={fishingGearModal}>Fishing Equipment</button> 
                  <button onClick={additionalServices}>Additional Services</button>
                </div>
                <div className="sendBtnWrapper">
                  <button className="sendBtn">ADD</button>
                </div>
              </div>
            </form>
            <AdditionalServicesModal 
              services={services} 
              setServices={setServices}
              showAddServices={showAddServices}
              setShowAddServices={setShowAddServices}
            />
            <GearModalInput
              title="Add Navigation Equipment"
              gear={navGear}
              setGear={setNavGear}
              showGear={showNavGear}
              setShowGear={setShowNavGear}
            />
            <GearModalInput
              title="Add Fishing Equipment"
              gear={fishingGear}
              setGear={setFishingGear}
              showGear={showFishingGear}
              setShowGear={setShowFishingGear}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewBoat
import "./newCottage.scss"
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import axios from 'axios';
import React, { useState } from 'react'
import DashNavbar from '../../../components/navbar/DashNavbar';
import Sidebar from '../../../components/sidebar/Sidebar';
import { cottageInputs } from "../../../formSource";
import FormInput from '../../../../components/formInput/FormInput';
import FormTextArea from "../../../../components/formTextArea/FormTextArea";
import AdditionalServicesModal from "../../../../components/additionalServicesModal/AdditionalServicesModal";
import { useNotification } from "../../../../components/notification/NotificationProvider";

const NewCottage = () => {

  const dispatch = useNotification();

  const user = {id: 2, type:"cottage_owner"}

  const [showAddServices, setShowAddServices] = useState(false);
  const [services, setServices] = useState([])

  const [files, setFiles] = useState("");
  
  const [values, setValues] = useState({
    cottageName: "",
    country: "",
    city: "",
    street: "",
    description: "",
    numOfRooms: "",
    capacity: "",
    regulations: "",
    price: "",
    fee: "",
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

      const newCottage = {
        ...values,
        additionalServices: services.map(function(item){
          delete item.id;
          return item;
        }),
        photos: list,
        owner_id: user.id,
      };

      await axios.post("http://localhost:8080/auth/add-cottage", newCottage);
      sendNotification("success", "You successfully added a new boat!");

    } catch (err) {
      console.log(err)
      sendNotification("error", err.message);
    }
  };


  const sendNotification = (type, message) => {
    dispatch({
      type: type,
      message: message,
      navigateTo: '/dashboard/my-offers'
    });
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const additionalServices = (e) => {
    e.preventDefault();
    setShowAddServices(!showAddServices);
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
    <div className="newCottage">
      <Sidebar />
      <div className="newContainer">
        <DashNavbar />
        <div className="top">
          <h1>Add New Cottage</h1>
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
              {cottageInputs.map((input) => (
                  !input.multiline ? <FormInput 
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
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
                <button onClick={additionalServices}>Additional Services</button>
                <button className="sendBtn">ADD</button>
              </div>
            </form>
            <AdditionalServicesModal 
              services={services} 
              setServices={setServices}
              showAddServices={showAddServices}
              setShowAddServices={setShowAddServices}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCottage
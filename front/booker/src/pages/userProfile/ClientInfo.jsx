 
import FormInput from '../../components/formInput/FormInput'
 
import { useNotification } from "../../components/notification/NotificationProvider";
import useFetch from "../../hooks/useFetch"
import { useEffect } from 'react';
import { AuthContext } from '../../components/context/AuthContext';
import { useState, useContext } from 'react';
import "./clientInfo.css"
import { blue } from '@mui/material/colors';
const ClientInfo = () => {

  const dispatch = useNotification();

   const { data, loading, error } = useFetch(`http://localhost:8080/api/whoami`);
 
 
   const { user } = useContext(AuthContext);

  const [values, setValues] = useState({
    email:"",
    firstName:"",
    lastName:"",
    country:"",
    city:"",
    street:"",
    phoneNumber:"",
    type:"clients",
    password:"",
  })
 
  
  useEffect(() => {
    setValues({["email"]:data.email,["firstName"]:data.firstName,["lastName"]:data.lastName,["phoneNumber"]:data.phoneNumber,
    ["country"]:data.country,["city"]:data.city,["street"]:data.street,["password"]:"",});
  }, [data]);


  const inputs = [
    
   
      {
      id:1,
      name:"firstName",
      type:"text",
      placeholder:"First Name",
      errorMessage:"Invalid input!",
      label:"First Name",
      required: true,
      pattern: `^[A-Z][a-z ,.'-]+$`
    },
    {
      id:2,
      name:"lastName",
      type:"text",
      placeholder:"Last Name",
      errorMessage:"Invalid input!",
      label:"Last Name",
      required: true,
      pattern: `^[A-Z][a-z ,.'-]+$`
    },
  
  
  ]

  const inputsSecondRow = [
    {
      id:3,
      name:"country",
      type:"text",
      placeholder:"Country",
      errorMessage:"Invalid input!",
      label:"Country",
      required: true,
      pattern: `^.{1,}$`
    },
    {
      id:4,
      name:"city",
      type:"text",
      placeholder:"City",
      errorMessage:"Invalid input!",
      label:"City",
      required: true,
      pattern: `^.{1,}$`
    },
    {
      id:5,
      name:"street",
      type:"text",
      placeholder:"Street",
      errorMessage:"Invalid input!",
      label:"Street",
      required: true,
      pattern: `^.{1,}$`
    },
    {
      id:6,
      name:"phoneNumber",
      type:"text",
      placeholder:"Phone Number",
      errorMessage:"Invalid input!",
      label:"Phone Number",
      required: true,
      pattern: "^[0-9]{9,13}$"
    },
  ]
  

  const handleSubmit = (e) => {
    e.preventDefault()

    
    fetch('http://localhost:8080/api/change', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.accessToken}`,
          },
        body: JSON.stringify(values)
      })
       
        .then(data => {
          sendNotification("success", "You successfully");
        })
        .catch(err => {
          sendNotification("error", err.message)
        })

   

  }

  const sendNotification = (type, message) => {
    dispatch({
      type: type,
      message: message,
      navigateTo: '/'
    });
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <div className="info">
      <div className="form">
        <h1>Profile info</h1>
        <form onSubmit={handleSubmit}>
          <div className="formElements">
            <div className="row">
            <label  >Email :</label><br/>
            <label style={{fontSize: '24px' ,color:'blue' }}>  {data.email}</label><br/><br/>
              {inputs.map((input) => (
                <FormInput 
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                  
                   
                />
              ))}
              <br/>
               <label style={{fontSize: '24px' , color:'blue'}} >Num of penalties : {data.numOfPenalties}</label><br/>
               <label style={{fontSize: '24px' , color:'blue'}} >Loyalty rank : {data.rank}</label>
            </div>
            <div className="row">
              {inputsSecondRow.map((input) => (
                <FormInput 
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange} 
                />
              ))}

              
               
            </div>
          </div>
          <button>Change info</button>
        </form>
      </div>
    </div>

  )
}

export default ClientInfo
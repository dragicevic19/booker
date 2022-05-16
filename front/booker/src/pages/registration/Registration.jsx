import "./registration.css"
import FormInput from '../../client/components/formInput/FormInput'
import { useRef, useState } from "react"
import { TuneTwoTone } from "@mui/icons-material"

const Registration = () => {

  const [values, setValues] = useState({
    email:"",
    firstName:"",
    lastName:"",
    password:"",
    confirmPassword:"",
    country:"",
    city:"",
    street:"",
    phoneNumber:"",
    type:""
    //img?
  })

  const inputs = [
    {
      id:1,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"It should be a valid email address!",
      label:"Email",
      required: true, 
    },
    {
      id:2,
      name:"firstName",
      type:"text",
      placeholder:"First Name",
      errorMessage:"Invalid input!",
      label:"First Name",
      required: true,
      pattern: `^[A-Z][a-z ,.'-]+$`
    },
    {
      id:3,
      name:"lastName",
      type:"text",
      placeholder:"Last Name",
      errorMessage:"Invalid input!",
      label:"Last Name",
      required: true,
      pattern: `^[A-Z][a-z ,.'-]+$`
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"Password should be at least 8 characters!",
      label:"Password",
      required: true,
      pattern: `^.{8,}$`
    },    
    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      errorMessage:"Passwords don't match!",
      label:"Confirm Password",
      required: true,
      pattern: values.password
    },
  ]

  const inputsSecondRow = [
    {
      id:6,
      name:"country",
      type:"text",
      placeholder:"Country",
      errorMessage:"Invalid input!",
      label:"Country",
      required: true,
      pattern: `^.{1,}$`
    },
    {
      id:7,
      name:"city",
      type:"text",
      placeholder:"City",
      errorMessage:"Invalid input!",
      label:"City",
      required: true,
      pattern: `^.{1,}$`
    },
    {
      id:8,
      name:"street",
      type:"text",
      placeholder:"Street",
      errorMessage:"Invalid input!",
      label:"Street",
      required: true,
      pattern: `^.{1,}$`
    },
    {
      id:9,
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
    console.log(values)
    e.preventDefault()
    fetch('http://localhost:8080/auth/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values)
      })
        .then(res => {
          if (!res.ok){
            if (res.status == 409){
              console.log('email exists error');
            }
            throw Error('could not fetch data')
          } 
          return res.json()
        })
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err.message)
        })
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <div className="registration">
      <div className="form">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="formElements">
            <div className="row">
              {inputs.map((input) => (
                <FormInput 
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange} 
                />
              ))}
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
              <div className="userType">
                <label>User Type</label>
                <select name="type" onChange={onChange}>
                  <option value="cottage_owners">Cottage Owner</option>
                  <option value="boat_owners">Boat Owner</option>
                  <option value="instructors">Fishing Instructor</option>
                </select>
              </div>
            </div>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>

  )
}

export default Registration
import { Link } from "react-router-dom";

const Confirmation = ({ prevStep, nextStep, handleChange, values, userType }) => {
  return (
    <div>
      <h1>Step 3 - Register as {userType}</h1>
      <div className="confirmation-container">
        <p>Please click the activation link we sent to your email.</p>
        <Link to="/">Home Page</Link>
      </div>
    </div>
  )
}

export default Confirmation
import { Button, TextField } from "@mui/material"

const UserDetails = ({ prevStep, nextStep, handleChange, values }) => {
  return (
    <div>
      <h1>Step 2 - Register as {values.type}</h1>
      <div className="reg-container">

        <div className="reg-first_name">
          <TextField
            required
            placeholder="First Name"
            label="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />
        </div>

        <div className="reg-last_name">
          <TextField
            required
            placeholder="Last Name"
            label="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />
        </div>

        <div className="reg-country">
          <TextField
            required
            placeholder="Country"
            label="Country"
            onChange={handleChange('country')}
            defaultValue={values.country}
          />
        </div>

        <div className="reg-city">
          <TextField
            required
            placeholder="City"
            label="City"
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
        </div>

        <div className="reg-street">
          <TextField
            required
            placeholder="Street"
            label="Street"
            onChange={handleChange('street')}
            defaultValue={values.street}
          />
        </div>

        <div className="reg-email">
          <TextField
            required
            placeholder="Email Address"
            label="Email Address"
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
        </div>

        <div className="reg-password">
          <TextField
            required
            placeholder="Password"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={handleChange('password')}
            defaultValue={values.password}
          />
        </div>

        <div className="reg-rep-password">
          <TextField
            required
            placeholder="Repeat Password"
            label="Repeat Password"
            type="password"
            autoComplete="current-password"
            onChange={handleChange('repPassword')}
            defaultValue={values.repPassword}
          />
        </div>

        <div className="reg-phoneNum">
        <TextField
            required
            placeholder="Phone Number"
            label="Phone Number"
            onChange={handleChange('phoneNumber')}
            defaultValue={values.phoneNumber}
          />
        </div>

        { values.type !== 'Client' && 
          <div className="reg-explanation">
            <TextField
              label="Explanation of Registration"
              multiline
              fullWidth
              rows={3}
              onChange={handleChange('explanation')}
              defaultValue={values.explanation}
            />
        </div>
        }

        <Button
          style={{
            marginTop: 10,
            marginLeft: 30,
            borderRadius: 5,
          }} 
          className="btnBackReg"
          variant="contained"
          // color="error"
          // disabled={btnDisabled}
          onClick={prevStep}
        >BACK
        </Button>

        <Button
          style={{
            marginTop: 10,
            marginRight: 30,
            borderRadius: 5,
          }} 
          className="btnNextReg"
          variant="contained"
          color="success"
          //disabled={btnDisabled}
          onClick={nextStep}
        >NEXT
        </Button>
      </div>
    </div>
  )
}

export default UserDetails
import { Button, TextField } from "@mui/material"

const UserDetails = ({ prevStep, nextStep, handleChange, values, validation }) => {
  return (
    <div>
      <h1>Step 2 - Register as {values.type}</h1>
      <div className="reg-container">

        <div className="reg-first_name">
          <TextField
            fullWidth
            error={!validation.firstNameValid}
            required
            placeholder="First Name"
            label="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
            helperText={validation.firstNameValid ? '' : validation.formErrors.firstName}
          />
        </div>

        <div className="reg-last_name">
          <TextField
            fullWidth
            error={!validation.lastNameValid}
            required
            placeholder="Last Name"
            label="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
            helperText={validation.lastNameValid ? '' : validation.formErrors.lastName}

          />
        </div>

        <div className="reg-country">
          <TextField
            fullWidth
            error={!validation.countryValid}
            required
            placeholder="Country"
            label="Country"
            onChange={handleChange('country')}
            defaultValue={values.country}
            helperText={validation.countryValid ? '' : validation.formErrors.country}

          />
        </div>

        <div className="reg-city">
          <TextField
            fullWidth
            error={!validation.cityValid}
            required
            placeholder="City"
            label="City"
            onChange={handleChange('city')}
            defaultValue={values.city}
            helperText={validation.cityValid ? '' : validation.formErrors.city}
          />
        </div>

        <div className="reg-street">
          <TextField
            fullWidth
            error={!validation.streetValid}
            required
            placeholder="Street"
            label="Street"
            onChange={handleChange('street')}
            defaultValue={values.street}
            helperText={validation.streetValid ? '' : validation.formErrors.street}

          />
        </div>

        <div className="reg-email">
          <TextField
            fullWidth
            error={!validation.emailValid}
            required
            placeholder="Email Address"
            label="Email Address"
            onChange={handleChange('email')}
            defaultValue={values.email}
            helperText={validation.emailValid ? '' : validation.formErrors.email}

          />
        </div>

        <div className="reg-password">
          <TextField
            fullWidth
            error={!validation.passwordValid}
            required
            placeholder="Password"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={handleChange('password')}
            defaultValue={values.password}
            helperText={validation.passwordValid ? '' : validation.formErrors.password}

          />
        </div>

        <div className="reg-rep-password">
          <TextField
            fullWidth
            error={!validation.repPasswordValid}
            required
            placeholder="Repeat Password"
            label="Repeat Password"
            type="password"
            autoComplete="current-password"
            onChange={handleChange('repPassword')}
            defaultValue={values.repPassword}
            helperText={validation.repPasswordValid ? '' : validation.formErrors.repPassword}

          />
        </div>

        <div className="reg-phoneNum">
        <TextField
            fullWidth
            error={!validation.phoneNumberValid}
            required
            placeholder="Phone Number"
            label="Phone Number"
            onChange={handleChange('phoneNumber')}
            defaultValue={values.phoneNumber}
            helperText={validation.phoneNumberValid ? '' : validation.formErrors.phoneNumber}

          />
        </div>

        { values.type !== 'Client' && 
          <div className="reg-explanation">
            <TextField
              fullWidth
              label="Explanation of Registration"
              multiline
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
          disabled={!validation.formValid}
          onClick={nextStep}
        >NEXT
        </Button>
      </div>
    </div>
  )
}

export default UserDetails
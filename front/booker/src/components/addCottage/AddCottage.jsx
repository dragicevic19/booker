import { NavigateBeforeTwoTone } from '@mui/icons-material'
import { Button, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

const AddCottage = ({ user, values, validation, handleChange }) => {

	const navigate = useNavigate()

	const addBtnClick = () => {
		values.owner_id = user.id
		console.log(values)
		fetch('http://localhost:8080/api/add-cottage', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${user.accessToken}`
			},
			body: JSON.stringify(values)
		})
			.then(res => {
				if (!res.ok) {
					throw Error('could not fetch data')
				}
				return res.json()
			})
			.then(data => {
				navigate('/my-offers')
			})
			.catch(err => {
				console.log(err.message);
			})
	}

	const backBtnClick = () => {
		navigate('/')
	}

  return (
    <div>
        <h2>Add New Cottage</h2>
        <div className='red-container'>

            <div className='cottage-name'>
							<TextField
								fullWidth
								required
								placeholder="Cottage Name"
								label="Cottage Name"
								onChange={handleChange('cottageName')}
								defaultValue={values.cottageName}
								// helperText={ !validation.firstNameValid.value && validation.firstNameValid.enable ? validation.formErrors.firstName : ''}
							/>
            </div>
						<div className='cottage-country'>
							<TextField
								fullWidth
								required
								placeholder="Country"
								label="Country"
								onChange={handleChange('country')}
								defaultValue={values.country}
								// helperText={ !validation.firstNameValid.value && validation.firstNameValid.enable ? validation.formErrors.firstName : ''}
							/>
						</div>
						<div className='cottage-city'>
							<TextField
								fullWidth
								required
								placeholder="City"
								label="City"
								onChange={handleChange('city')}
								defaultValue={values.city}
								// helperText={ !validation.firstNameValid.value && validation.firstNameValid.enable ? validation.formErrors.firstName : ''}
							/>
						</div>
						<div className='cottage-street'>
							<TextField
								fullWidth
								required
								placeholder="Street"
								label="Street"
								onChange={handleChange('street')}
								defaultValue={values.street}
								// helperText={ !validation.firstNameValid.value && validation.firstNameValid.enable ? validation.formErrors.firstName : ''}
							/>
						</div>
						<div className='cottage-rooms'>
							<TextField
								fullWidth
								required
								type="number"
								placeholder="Number of Rooms"
								label="Number of Rooms"
								onChange={handleChange('numOfRooms')}
								defaultValue={values.numOfRooms}
								// InputLabelProps={{shrink: true}}
								// helperText={ !validation.firstNameValid.value && validation.firstNameValid.enable ? validation.formErrors.firstName : ''}
							/>
						</div>
						<div className='cottage-capacity'>
							<TextField
								fullWidth
								required
								type="number"
								placeholder="Capacity"
								label="Capacity"
								onChange={handleChange('capacity')}
								defaultValue={values.capacity}
								// helperText={ !validation.firstNameValid.value && validation.firstNameValid.enable ? validation.formErrors.firstName : ''}
							/>
						</div>
						<div className='cottage-price'>
							<TextField
								fullWidth
								required
								type="number"
								placeholder="Price per Night [€]"
								label="Price per Night [€]"
								onChange={handleChange('price')}
								defaultValue={values.price}
								// helperText={ !validation.firstNameValid.value && validation.firstNameValid.enable ? validation.formErrors.firstName : ''}
							/>
						</div>
						<div className='cottage-fee'>
							<TextField
								fullWidth
								required
								type="number"
								placeholder="Cancellation Fee[€]"
								label="Cancellation Fee[€]"
								onChange={handleChange('fee')}
								defaultValue={values.fee}
								// helperText={ !validation.firstNameValid.value && validation.firstNameValid.enable ? validation.formErrors.firstName : ''}
							/>
						</div>
						<div className='cottage-description'>
						<TextField
              fullWidth
              label="Description"
              multiline
              rows={10}
              onChange={handleChange('description')}
              defaultValue={values.description}
            />
						</div>

						<Button
							style={{
								marginTop: 10,
								marginLeft: 30,
								borderRadius: 5,
							}} 
							className="btnBack"
							variant="contained"
							onClick={backBtnClick}
						>BACK
						</Button>

						<Button
          		style={{
								marginTop: 10,
								marginRight: 30,
								borderRadius: 5,
							}} 
							className="btnNext"
							variant="contained"
							color="success"
							// disabled={!validation.formValid}
							onClick={addBtnClick}
						>ADD
						</Button>
						 

        </div>

    </div>
  )
}

export default AddCottage
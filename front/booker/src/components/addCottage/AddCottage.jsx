import { LineAxisOutlined, NavigateBeforeTwoTone } from '@mui/icons-material'
import { Button, FormControl, Input, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'

const AddCottage = ({ user, values, validation, handleChange, handleImages }) => {


	const navigate = useNavigate()

	const addBtnClick = () => {
		values.owner_id = user.id

		let images = new FormData()
		for(var i = 0; i < values.images.length; i++) {
			images.append("images", values.images[i])
		}

		fetch('http://localhost:8080/api/upload', {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${user.accessToken}`
			},
			body: images
		}).then(function (res) {
			if (res.ok) {
				return res.json()
			} else {throw Error('failed to save images')}
		}).then(function(data) {
			values.images = data
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
			})
	}

	const backBtnClick = () => {
		navigate('/')
	}

  return (
    <div>
        <h2>Add New Cottage</h2>
        <div className='new-cottage-container'>

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

						<div className='cottage-regulations'>
						<TextField
							fullWidth
							label="Regulations"
							multiline
							rows={3}
							onChange={handleChange('regulations')}
							defaultValue={values.regulations}
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

						<div className='cottage-images'>
							Select images:<br/>
							<input 
								type="file" 
								// inputProps={{ multiple: true }} 
								accept="image/*"
								multiple
								onChange={handleImages('images')}
							/>
							{/* <Button onClick={fileUploadHandler}>Upload</Button> */}
							{/* <TextField
								fullWidth
								required
								type="file"
								multiple
								placeholder="Cancellation Fee[€]"
								// label="Cancellation Fee[€]"
								onChange={handleChange('images')}
								// defaultValue={values.fee}
								// helperText={ !validation.firstNameValid.value && validation.firstNameValid.enable ? validation.formErrors.firstName : ''}
							/> */}
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
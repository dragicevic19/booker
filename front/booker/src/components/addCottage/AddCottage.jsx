import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router'

const AddCottage = ({ user, values, validation, handleChange, handleImages }) => {

	const navigate = useNavigate()

	const addBtnClick = () => {
		values.owner_id = user.id

		let images = new FormData()
		for(var i = 0; i < values.images.length; i++) {
			images.append("images", values.images[i])
		}

		//PRVI DEO: slanje samo slika
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

		// DRUGI DEO: slanje svih ostalih podataka sa jedinstvenim nazivima slika koji su na beku
		}).then(function(data) {
			values.images = data
			fetch('http://localhost:8080/api/add-cottage', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${user.accessToken}`
				},
				body: JSON.stringify(values)
			}).then(res => {
				if (!res.ok) {
					throw Error('could not fetch data')
				}
				return res.json()
			}).then(data => {
				navigate('/my-offers')
			}).catch(err => {
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
								error={ !validation.cottageNameValid.value && validation.cottageNameValid.enable }
								placeholder="Cottage Name"
								label="Cottage Name"
								onChange={handleChange('cottageName')}
								defaultValue={values.cottageName}
								helperText={ !validation.cottageNameValid.value && validation.cottageNameValid.enable ? validation.formErrors.cottageName : ''}
							/>
            </div>
						<div className='cottage-country'>
							<TextField
								fullWidth
								required
								error={ !validation.countryValid.value && validation.countryValid.enable }
								placeholder="Country"
								label="Country"
								onChange={handleChange('country')}
								defaultValue={values.country}
								helperText={ !validation.countryValid.value && validation.countryValid.enable ? validation.formErrors.country : ''}
							/>
						</div>
						<div className='cottage-city'>
							<TextField
								fullWidth
								required
								error={ !validation.cityValid.value && validation.cityValid.enable }
								placeholder="City"
								label="City"
								onChange={handleChange('city')}
								defaultValue={values.city}
								helperText={ !validation.cityValid.value && validation.cityValid.enable ? validation.formErrors.city : ''}
							/>
						</div>
						<div className='cottage-street'>
							<TextField
								fullWidth
								required
								error={ !validation.streetValid.value && validation.streetValid.enable }
								placeholder="Street"
								label="Street"
								onChange={handleChange('street')}
								defaultValue={values.street}
								helperText={ !validation.streetValid.value && validation.streetValid.enable ? validation.formErrors.street : ''}
							/>
						</div>
						<div className='cottage-rooms'>
							<TextField
								fullWidth
								required
								error={ !validation.numOfRoomsValid.value && validation.numOfRoomsValid.enable }
								// type="number"
								placeholder="Number of Rooms"
								label="Number of Rooms"
								onChange={handleChange('numOfRooms')}
								defaultValue={values.numOfRooms}
								// InputLabelProps={{shrink: true}}
								helperText={ !validation.numOfRoomsValid.value && validation.numOfRoomsValid.enable ? validation.formErrors.numOfRooms : ''}
							/>
						</div>
						<div className='cottage-capacity'>
							<TextField
								fullWidth
								required
								error={ !validation.capacityValid.value && validation.capacityValid.enable }
								// type="number"
								placeholder="Capacity"
								label="Capacity"
								onChange={handleChange('capacity')}
								defaultValue={values.capacity}
								helperText={ !validation.capacityValid.value && validation.capacityValid.enable ? validation.formErrors.capacity: ''}
							/>
						</div>
						<div className='cottage-price'>
							<TextField
								fullWidth
								required
								error={ !validation.priceValid.value && validation.priceValid.enable }
								// type="number"
								// value={values.price}
								placeholder="Price per Night [€]"
								label="Price per Night [€]"
								onChange={handleChange('price')}
								defaultValue={values.price}
								helperText={ !validation.priceValid.value && validation.priceValid.enable ? validation.formErrors.price : ''}
							/>
						</div>
						<div className='cottage-fee'>
							<TextField
								fullWidth
								required
								error={ !validation.feeValid.value && validation.feeValid.enable }
								// type="number"
								placeholder="Cancellation Fee[€]"
								label="Cancellation Fee[€]"
								onChange={handleChange('fee')}
								defaultValue={values.fee}
								helperText={ !validation.feeValid.value && validation.feeValid.enable ? validation.formErrors.fee : ''}
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
								accept="image/*"
								multiple
								onChange={handleImages('images')}
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
							disabled={!validation.formValid}
							onClick={addBtnClick}
						>ADD
						</Button>
						 

        </div>

    </div>
  )
}

export default AddCottage
import { Button, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ShowMyProperty = ({user}) => {

	const [properties, setProperties] = useState([
		{
			id: 1, name: 'Boat 1', description: 'Description gfffffff ffffffffffffffffgf ddddddddddddddd ddddddddddddddddddddd ddddddddd ddddddddddddd dddddddddddd dddddddddddd ddffffffffff fffff ffff fffffff fffffffffffff ffffffff fffffffffof Boat 1. Lep brod odlican sve kul dugacak opis tralalallsdj ajsldkj aslkdja lsk djal.fsalkfjasljf alkfjlaksjflkaj skflj alksfjajs fkajlk sf jalksjfka', capacity: 5, regulations: 'No regulations',
			cancellationFee: 50, dailyPrice: 100, type: 'Huge Boat', enginePow: 100 
		},
		{
			id: 2, name: 'Boat 2', description: 'Description of Boat 2', capacity: 2, regulations: 'No regulations',
			cancellationFee: 25, dailyPrice: 50, type: 'Small Boat', enginePow: 50
		}
	]);

	// useEffect(() => {
	// 	const getProperties = async () => {
	// 		const propertiesFromServer = await fetchProperties()
	// 		setProperties(propertiesFromServer)
	// 	}
	// 	getProperties()
	// }, [])

	// const fetchProperties = async () => {
	// 	const res = await fetch('http://localhost:8080/api/' + user.type + '/myProperty/' + user.id)
	// 	const data = await res.json()

	// 	return data
	// }

  return (
    <div className="showProp">
			{properties.map((property) => (
				<div className='prop-preview' key={property.id}>
					<div className='prop-info'>
						<h2 className='prop-name'>{ property.name }</h2>
						<p className='prop-price'>Daily price: {property.dailyPrice}$</p>
						<p className='prop-capacity'>Capacity: {property.capacity}</p>
						<p className='prop-regulations'>Regulations: { property.regulations }</p>
					</div>
					<div className='prop-desc'>
						<p>{property.description}</p>
					</div>
					<div className='prop-buttons'>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<EditIcon />
        			</IconButton>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<DeleteIcon />
        			</IconButton>
					</div>
				</div>
			))}
    </div>
  )
}

export default ShowMyProperty
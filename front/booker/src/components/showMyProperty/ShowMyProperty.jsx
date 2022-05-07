import { Box, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchBar from '../searchBar/SearchBar';
import Login from '../Login';

const ShowMyProperty = ({user, onLogin}) => {

	const [properties, setProperties] = useState([
		// {
		// 	id: 1, name: 'Boat 1', description: 'Description gfffffff ffffffffffffffffgf ddddddddddddddd ddddddddddddddddddddd ddddddddd ddddddddddddd dddddddddddd dddddddddddd ddffffffffff fffff ffff fffffff fffffffffffff ffffffff fffffffffof Boat 1. Lep brod odlican sve kul dugacak opis tralalallsdj ajsldkj aslkdja lsk djal.fsalkfjasljf alkfjlaksjflkaj skflj alksfjajs fkajlk sf jalksjfka', capacity: 5, regulations: 'No regulations',
		// 	cancellationFee: 50, dailyPrice: 100, type: 'Huge Boat', enginePow: 100 
		// },
		// {
		// 	id: 2, name: 'Boat 2', description: 'Description of Boat 2', capacity: 2, regulations: 'No regulations',
		// 	cancellationFee: 25, dailyPrice: 50, type: 'Small Boat', enginePow: 50
		// }
	]);

	const [searchResults, setSearchResults] = useState(properties)

	useEffect(() => {
		const getProperties = async () => {
			const propertiesFromServer = await fetchProperties()
			setProperties(propertiesFromServer)
			setSearchResults(propertiesFromServer)
		}
		getProperties()
	}, [])

	const fetchProperties = async () => {
		const res = await fetch('http://localhost:8080/api/my-offers/' + user.id, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${user.accessToken}`
			}
		})
		const data = await res.json()
		return data
	}

	const handleSearch = (value) => {
		filterData(value)
	}

	const filterData = (value) => {
		const lowercasedValue = value.toLowerCase().trim()
		if (lowercasedValue === '') setProperties(searchResults)
		else {
			const filteredData = searchResults.filter((item) => {
				return Object.keys(item).some((key) => 
				item[key].toString().toLowerCase().includes(lowercasedValue)
				);
			})
			setProperties(filteredData)
		}

		console.log(searchResults);
	}

	const searchStyles = {
		wrapper: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			paddingLeft: '20px',
			paddingRight: '20px',
			height: '65px',
			backgroundColor: '#f5f5f5',
			borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
		},
	}

	if (!user) {
		return <Login setLoggedInUser={onLogin} />
	} 

  return (
    <div className="showProp">
			<Box sx={searchStyles.wrapper}>
				<SearchBar 
					placeholder='Search your properties...'
					onChange={(event) => handleSearch(event.target.value)}
					searchBarWidth='720px'
				/>
			</Box>
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
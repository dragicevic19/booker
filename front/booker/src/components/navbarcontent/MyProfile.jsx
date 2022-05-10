import { ContactlessOutlined } from "@mui/icons-material";
import {TextField } from "@mui/material"
import React, { useEffect, useState } from 'react'


const MyProfile = ({user}) => {





  const [userData, setUserData] = useState([
  ]);

  const fetchUserData = async () => {
		const res = await fetch('http://localhost:8080/api/profile/' + user.id, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.accessToken}`

			}
		})
		const data = await res.json()
		return data
	}

  useEffect(() => {
		const getUserData = async () => {
			const userDataFromServer = await fetchUserData()
			setUserData(userDataFromServer)

		}
		getUserData()
	}, [])


  console.log(userData);

    return (
      <div className="my-profile-container">
        <h1>Personal info  </h1>
        <div>
          <TextField label="First name" className="txtField" defaultValue= ' ' value={userData.firstName} variant="outlined" size="normal" disabled/>
          <TextField label="Last name" className="txtField" defaultValue= ' ' value={userData.lastName} variant="outlined" size="normal" disabled />
        </div>
        <div> 
        <TextField label="Email" className="txtField" defaultValue= ' '  value={userData.email} variant="outlined" size="normal" disabled/>
          <TextField label="Phone" className="txtField" defaultValue= ' '  value={userData.phoneNumber} variant="outlined" size="normal" disabled/>
        </div>
        <div>
        <TextField label="Country" className="txtField" defaultValue= ' '  value={userData.country} variant="outlined" size="normal" disabled/>
          <TextField label="City" className="txtField" defaultValue= ' '  value={userData.city} variant="outlined" size="normal" disabled/>
        </div>
        <div>
        <TextField label="Street" className="txtField" defaultValue= ' '  value={userData.street} variant="outlined" size="normal" disabled/>
        </div>


      </div>
        
      



    
    );
}

export default MyProfile;
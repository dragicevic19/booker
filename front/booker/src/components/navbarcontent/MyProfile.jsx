import {TextField } from "@mui/material"
import React, { useEffect, useState } from 'react'


const MyProfile = ({user}) => {





  const [userData, setUserData] = useState([]);

  const fetchUserData = async () => {
		const res = await fetch('http://localhost:8080/api/profile/' + user.id, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
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
        <h1>Profile info {userData.name}</h1>
        <div>
          <TextField label="First name" className="txtField" defaultValue={user.name} variant="outlined" size="normal"/>
          <TextField label="Last name" className="txtField" defaultValue="Small" variant="outlined" size="normal" disabled />
        </div>
        <div>
        <TextField label="Email" className="txtField" defaultValue="Small" variant="outlined" size="normal"/>
          <TextField label="Phone" className="txtField"  defaultValue="Small" variant="outlined" size="normal"/>
        </div>
        <div>
        <TextField label="Country" className="txtField" defaultValue="Small" variant="outlined" size="normal"/>
          <TextField label="City" className="txtField" defaultValue="Small" variant="outlined" size="normal"/>
        </div>
        <div>
        <TextField label="Street" className="txtField" defaultValue="Small" variant="outlined" size="normal"/>
        </div>


      </div>
        
      



    
    );
}

export default MyProfile;
import { useEffect, useState } from "react"

const Success = ({ values, userType }) => {

  const [done, setDone] = useState(false)

  const typeOfUser = {
    'Boat Owner': 'boat-owners',
    'Cottage Owner': 'cottage-owners',
    'Fishing Instructor': 'instructors'
  }

  useEffect(() => {
    const addNewUser = async () => {
      const data = await addUser(values)
      console.log(data);
    }
    addNewUser()
  }, [])


  const addUser = async (values) => {
    console.log(values);
    const res = await fetch('http://localhost:8080/api/' + typeOfUser[userType], {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(values)
    })
    const data = await res.json()
    setDone(true)
    return data
  }


  return (
    done ? <div className="confirmation-container">
      <h2>You successfully sent request for registration as {userType} on The Booker!</h2>
      <p>Wait for administrator to approve your request and you are ready to go!</p>
    </div> : null
  )
}

export default Success
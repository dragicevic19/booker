import { useEffect, useState } from "react"

const Success = ({ values, userType, prevStep, setEmailExistsError }) => {

  const [done, setDone] = useState(false)
  const [user, setUser] = useState(null)

  const typeOfUser = {
    'Boat Owner': 'boat_owners',
    'Cottage Owner': 'cottage_owners',
    'Fishing Instructor': 'instructors'
  }

  useEffect(() => {
    setTimeout(() => {
      values.type = typeOfUser[userType]
      fetch('http://localhost:8080/auth/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values)
      })
        .then(res => {
          if (!res.ok){
            if (res.status == 409){
              setEmailExistsError()
              prevStep()
            }
            throw Error('could not fetch data')
          } 
          return res.json()
        })
        .then(data => {
          setUser(data)
          setDone(true)
        })
        .catch(err => {
          console.log(err.message)
        })
    }, 500)
  }, [])

  return (
    done ?
     <div className="confirmation-container">
      <h2>You successfully sent request for registration as {userType} on The Booker!</h2>
      <p>Wait for administrator to approve your request and you are ready to go!</p>
    </div> : <h2>Loading...</h2>
  )
}

export default Success
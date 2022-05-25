import "./new.scss"
import NewCottage from './newCottage/NewCottage'
import NewBoat from './newBoat/NewBoat'
import { useState } from "react"

const New = () => {

  const [user, setUser] = useState({
    id: 2,
    type: "cottage_owner"
  })

  return (
    <div className='new'>
      { user.type === "cottage_owner" && <NewCottage /> }
      { user.type === "boat_owner" && <NewBoat /> }
      {/* { user.type === "instructor" && <NewLesson /> } */}
    </div>
  )
}

export default New
import React, { useState } from 'react'
import NewCottage from './newCottage/NewCottage'

const New = () => {

  const [user, setUser] = useState({
    id: 2,
    type: "cottage_owner"
  })

  return (
    <div>
      { user.type === "cottage_owner" && <NewCottage /> }
      {/* { user.type === "boat_owner" && <NewBoat /> }
      { user.type === "instructor" && <NewLesson /> } */}
    </div>
  )
}

export default New
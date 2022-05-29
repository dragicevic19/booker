import React, { useContext } from 'react'
import { AuthContext } from '../../../components/context/AuthContext';
import SingleCottage from "./singleCottage/SingleCottage";

const Single = () => {
	const { user } = useContext(AuthContext);

  return (
    <div className='new'>
      { user.type === "ROLE_COTTAGE_OWNER" && <SingleCottage/> }
      {/* { user.type === "ROLE_BOAT_OWNER" && <SingleBoat /> } */}
      {/* { user.type === "ROLE_INSTRUCTOR" && <SingleLesson /> } */}
    </div>
  )
}

export default Single
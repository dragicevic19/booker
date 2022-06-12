import React from 'react'
import "./userProfile.scss";
import DeleteUserDialog from './DeleteUserDialog';
import { AuthContext } from '../components/context/AuthContext';
import { useContext } from 'react';
import { useNotification } from '../components/notification/NotificationProvider';

const UserProfile = () => {

  const { user } = useContext(AuthContext);

  const dispatch = useNotification();

  const handleDelete = () =>
  {

  }

  const sendNotification = (type, message) => {
    dispatch({
      type: type,
      message: message,
      navigateTo: '/'
    });
  }

  return (
    <DeleteUserDialog userId={user.id} handleDelete={handleDelete} sendNotification={sendNotification}/>
  )
}

export default UserProfile
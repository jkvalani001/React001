import React, { useContext } from 'react';
import { UserContext } from '../context/UserContextProvider'; // Correct import

function Profile() {
  const { user } = useContext(UserContext); // Correct usage of useContext

  if (!user) {
    return <div>Login to see your profile</div>;
  }

  return <div>Welcome {user.name}</div>; // Access the correct property of the user object
}

export default Profile;
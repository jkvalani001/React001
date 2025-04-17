import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContextProvider';

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); // Add state for password

  const handleLogin = () => {
    setUser({ name: username, password }); // Include password in the user object
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

        {" "}

      <input
        type="password" // Password input field
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
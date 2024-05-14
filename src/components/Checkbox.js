import React, { useContext } from 'react';
import AuthContext from './AuthContext';

const Checkbox = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <label>
      <input type="checkbox" onChange={toggleAuth} checked={isAuthenticated} />
      I am not a robot
    </label>
  );
};

export default Checkbox;

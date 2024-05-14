import React, { useContext } from 'react';
import AuthContext from './AuthContext';

const Para = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <p className="authText">{isAuthenticated ? 'You are now authenticated, you can proceed' : 'you are not authenticated'}</p>
    );
};

export default Para;

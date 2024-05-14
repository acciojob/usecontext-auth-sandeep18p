import React, { useContext } from 'react';
import AuthContext from './AuthContext';

const Para = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div>
            {isAuthenticated ? (
                <p>You are authenticated. You can now proceed.</p>
            ) : (
                <p>You are not authenticated.</p>
            )}
        </div>
    );
};

export default Para;

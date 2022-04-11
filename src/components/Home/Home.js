import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const { user} = useFirebase();
    return (
        <div>
            <h1>This is Home</h1>
            <p>Current user is: {user? user.displayName:'no body'}</p>
        </div>
    );
};

export default Home;
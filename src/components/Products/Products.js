import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.int';

const auth = getAuth(app);

const Products = () => {
    const {user} = useAuthState(auth);
    return (
        <div>
            <h2>This is products</h2>
            <p>{user ? user.displayName : 'not a parson'}</p>
        </div>
    );
};

export default Products;
import {useEffect, useState } from "react"
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../firebase.int';


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () =>{

    const [user,setUser] = useState({});

    const signInWithGoogle = ()=>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user;
            setUser(user);
            console.log(user);
        })
    }

    const handleSignOut = () =>{
        signOut(auth)
        .then(() => {})
    }


    useEffect( () => {
        onAuthStateChanged(auth,user =>{
            setUser(user);
        })
    },[])

    return {user, handleSignOut,signInWithGoogle}
}
export default useFirebase;
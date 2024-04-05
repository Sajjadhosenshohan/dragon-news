import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../Firebase/Firebase";


// create context
export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // for create user
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // for sign in
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // for sign out
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    // passing the function for use from anywhere
    const authInfo = {
        user,
        createUser,
        loading,
        signIn,
        logOut
    }

    // The recommended way to get the current user is by setting an observer on the Auth object:
    useEffect(()=>{
        const Unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log("user in the auth state changed", currentUser)
            setUser(currentUser)

            setLoading(false)
        })
        // clear it
        return () => {
            Unsubscribe()
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};






AuthProvider.propTypes = {
    children: PropTypes.object
};
export default AuthProvider;
import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../Firebase/Firebase";


// create context
export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        createUser
    }
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
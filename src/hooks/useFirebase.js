import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import initializeAuthentication from "../components/Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
const [isloading,setIsLoading]=useState(true)

    const auth = getAuth()

  
    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth, googleProvider)
        
            .finally(()=>{
                setIsLoading(false)
            })
            .catch(error=>{
                console.log(error);
            })

    }
//observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)

        })
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(()=>setIsLoading(false))
    }

    return {
        user,
        signInUsingGoogle,
        logOut,
        isloading
    }
}

export default useFirebase;
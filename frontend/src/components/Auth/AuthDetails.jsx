import {onAuthStateChanged, signOut} from 'firebase/auth'
import React, {useEffect, useState} from "react";
import {auth} from '../../repository/firebase/firebase'

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })

        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        console.log("inside user sign out")
        signOut(auth).then(() => {
            console.log("signed out success!")
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            {authUser ? (
                <>
                    <p>{`Signed In as ${authUser.email}`}</p>
                    <button onClick={userSignOut}>Sign Out</button>
                </>
            ) : (
                <p>Signed Out</p>
            )}
        </div>
    )
}

export default AuthDetails;

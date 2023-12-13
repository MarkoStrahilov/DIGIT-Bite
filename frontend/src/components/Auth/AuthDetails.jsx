import {onAuthStateChanged} from 'firebase/auth'
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
    }, [])

    return (
        <div>
            {authUser ? <>Signed In</> : <>Signed Out</>}
        </div>
    )
}

export default AuthDetails;

import React, {useState} from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../repository/firebase/firebase';



const SignIn = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onFormSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
            }).catch((err) => {
            console.log(err)
        })

    }

    return (
        <div className={"container"}>
            <form onSubmit={onFormSubmit}>
                <h1>Create Account</h1>
                <div className={"form-group"}>
                    <input className={"form-control"}
                           type={"email"}
                           placeholder={"Enter your email"}
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={"form-group"}>
                    <input className={"form-control"}
                           type={"password"}
                           placeholder={"Enter your password"}
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}/>

                </div>
                <div>
                    <button type={"submit"} className={"btn btn-primary"}>Sign up</button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;

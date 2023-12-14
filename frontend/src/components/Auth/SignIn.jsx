import React, { useState } from 'react'
import { auth } from '../../repository/firebase/firebase';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';



const SignIn = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const onFormSubmit = (e) => {
        e.preventDefault();
        // auth.signInWithEmailAndPassword(email, password)
        //     .then((userCredential) => {
        //         console.log(userCredential.user.uid)
        //         fs.collection('users').doc(userCredential.user.uid)
        //             .set({
        //                 Email: email,
        //                 Password: password
        //             }).then(() => {
        //                 navigate("/home");
        //         })
        //     }).catch((err) => {
        //         console.log(err)
        // })
        auth.signInWithEmailAndPassword(email, password).then(() => {
            // props.history.push("/");
            navigate("/");
        }).catch((err) => {
            console.log(err);
        })

    }

    return (
        <div className={"container"}>
            <form onSubmit={onFormSubmit}>
                <h1>Log in to your account!</h1>
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
                    <button type={"submit"} className={"btn btn-primary"}>Sign in</button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;

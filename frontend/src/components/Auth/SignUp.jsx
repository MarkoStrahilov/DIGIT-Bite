import React, { useState } from 'react';
import { auth, db } from '../../repository/firebase/firebase';
import { useNavigate } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onFormSubmit = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                db.collection('users').doc(userCredential.user.uid)
                    .set({
                        Email: email,
                        Password: password
                    }).then(() => {
                    navigate("/login");
                    toast.success('Successfully registered!\n Log in now!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }).catch((err) => {
                    // console.log(err);
                    toast.error('Error saving user data!', {
                        position: "top-right",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                });
            }).catch((err) => {
            // console.log(err);
            toast.error('Error creating user account!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        });
    }

    return (
        <div className={"container"}>
            <form onSubmit={onFormSubmit}>
                <h1>Create Account</h1>
                <div className={"form-group"}>
                    <input
                        className={"form-control"}
                        type={"email"}
                        placeholder={"Enter your email"}
                        value={email}
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={"form-group"}>
                    <input
                        className={"form-control"}
                        type={"password"}
                        placeholder={"Enter your password"}
                        value={password}
                        required={true}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button type={"submit"} className={"btn btn-primary"}>
                        Sign up
                    </button>
                </div>
            </form>
            {/*<ToastContainer/>*/}
        </div>
    );
}

export default SignIn;

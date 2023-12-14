import React, {useState} from 'react'
import {auth} from '../../repository/firebase/firebase';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignIn = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const onFormSubmit = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            toast.success('Successfully Logged In!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            navigate("/");
        }).catch((err) => {
            console.log(err);
            toast.error('Incorrect email or password', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
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
                           required={true}
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={"form-group"}>
                    <input className={"form-control"}
                           type={"password"}
                           placeholder={"Enter your password"}
                           value={password}
                           required={true}
                           onChange={(e) => setPassword(e.target.value)}/>

                </div>
                <div>
                    <button type={"submit"} className={"btn btn-primary"}>Sign in</button>
                </div>
            </form>
            {/*<ToastContainer/>*/}
        </div>
    );
}

export default SignIn;

import React, {useState} from 'react';


const SignIn = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className={"sign-in-container"}>
            <form>
                <h1>Log in</h1>
                <input
                    type={"email"}
                    placeholder={"Enter your email"}
                    value={email}/>
                <input
                    type={"password"}
                    placeholder={"Enter your password"}
                    value={"password"}/>
            </form>
        </div>
    );
}

export default SignIn;

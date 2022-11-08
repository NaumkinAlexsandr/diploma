import React, { useState } from "react";
import Button from "../button/button";
// import Input from "../Input/Input";
import './_loginForm.scss';

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const handleEmailChange = (e) => {
        setSuccessMsg('');
        setEmailError('');
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setSuccessMsg('');
        setPasswordError('');
        setPassword(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (email !== '') {
            const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            if (emailRegex.test(email)) {
                setEmailError('');
                if (email === 'test@demo.com') {
                    setEmailError('');
                    if (password === 'test') {
                        setSuccessMsg('You are successfully logged in');
                    }
                    else {
                        setPasswordError('Password does not match with the email address');
                    }
                }
                else {
                    setEmailError('Email does not match');
                }
            }
            else {
                setEmailError('Invalid Email')
            }
        }
        else {
            setEmailError('Email Required');
        }

        if (password !== '') {
            //check some other condition
        }
        else {
            setPasswordError('Password Required');
        }
    }


    return (
        <form onSubmit={handleFormSubmit}>
            {successMsg && <div className="success-msg">{successMsg}</div>}

            {/* <Input name="Email" onChange={handleEmailChange} value={email} />
            {emailError && <div className="error-msg">{emailError}</div>}

            <Input name="Password" onChange={handlePasswordChange} value={password} />
            {passwordError && <div className="error-msg">{passwordError}</div>} */}

            <label className="subtitle">
                Email
                <input type="email" onChange={handleEmailChange} value={email} />
            </label>
            {emailError && <div className="error-msg">{emailError}</div>}

            <label className="subtitle">
                Password
                <input type="password" onChange={handlePasswordChange} value={password} />
            </label>  
            {passwordError && <div className="error-msg">{passwordError}</div>}

            <Button />
        </form>
    );
}

export default LoginForm;



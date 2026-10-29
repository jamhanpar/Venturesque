import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { A } from 'hookrouter';

export const AuthForm = ({ toggle }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
        console.log('user login/signup request')
    }

    function toggleForm() {
        if (toggle === 'signup') {
            return (
                <div className='name-input-item'> 
                    <input type='text' id='first-name' placeholder='first name' onChange={() => setFirstName()} value={firstName}/>
                    <input type='text' id='last-name' placeholder='last name' onChange={() => setLastName()} value={lastName}/>
                </div>
            )
        }
    }

    const toggleFormDesc = () => (
        toggle === 'signup' 
            ? <p className="auth-form-text">& start saving your preferences and your favorite spots!</p> 
            : <p className="auth-form-text">new to Venturesque? <A href='/auth/signup' className='signup-link'>Sign up!</A></p>
    )

    const toggleFormLinks = () => (
        toggle === 'signup' 
            ? <p className="auth-form-redirect-link">Already have an account? <A href='/auth/login' className='login-link'>Login</A></p> 
            : <A href='/forgot-password' className='forgot-password-link'>Forgot password?</A>
    )

    return (
        <div className='auth-form-container'>
            <div className="auth-form">
                <h1>{ toggle === 'signup' ? 'Sign up for Venturesque' : 'Log In to Venturesque' }</h1>
                { toggleFormDesc() }
                <form onSubmit={onSubmit}>
                    { toggleForm() }
                    <div className='email-input-item'>
                        <input type='email' id='email' placeholder='email' onChange={() => setEmail()} value={email}/>
                    </div>
                    <div className='password-input-item'>
                        <input type='password' id='password' placeholder='password' onChange={() => setPassword()} value={password}/>
                    </div>
                    <button className='submit-button' type='submit'>{ toggle === 'login' ? 'Log In' : 'Sign Up' }</button>
                </form>
                { toggleFormLinks() }
            </div>
        </div>
    )
}

AuthForm.propTypes = {
  toggle: PropTypes.string,
};

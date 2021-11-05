import React, { useState } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


import { signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {

    const [userDetails, setUserDetails] = useState(
        {
            email: '',
            password: ''
        }
    )

    function handleSubmit(event) {
        event.preventDefault();
        setUserDetails({
            email: '',
            password: ''
        })
    }
    function handleChange(event) {
        const { value, name } = event.target;
        setUserDetails(prevValue => {
            return { ...prevValue, [name]: value };
        })
    }


    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>


            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    value={userDetails.email}
                    handleChange={handleChange}
                    label='email'
                    required />

                <FormInput
                    name='password'
                    type='password'
                    value={userDetails.password}
                    handleChange={handleChange}
                    label='password'
                    required />


                <CustomButton type='submit'>Sign in</CustomButton>
                <CustomButton onClick={signInWithGoogle}>Sign in with Google</CustomButton>
            </form>


        </div>
    )
}

export default SignIn

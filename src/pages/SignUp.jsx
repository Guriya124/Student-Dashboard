import { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUpStart, signUpSuccess, signUpFailure } from '../app/auth/userSlice';
import { TextRotateVerticalTwoTone } from '@mui/icons-material';

export default function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { loading, error } = useSelector(state => state.auth);
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch()


    

    function handleSignUp() {
        dispatch(signUpStart({ name, email, password }))
        try {
            dispatch(signUpSuccess({ name, email, password }))
        } catch (error) {
            dispatch(signUpFailure(error))
        }
        
    }

    function handleSubmit(e) { 
        e.preventDefault()
        handleSignUp();

        
    }



    return (
        <>
            <div className=" p-5 max-w-lg mx-auto shadow-lg mt-10">
                <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
                <div className='flex items-center justify-center flex-col gap-4'>
                    <form action="" onSubmit={handleSubmit}>
                        <TextField
                            id="name-field"
                            label="Name" variant="filled"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            fullWidth
                            lassName=" rounded-lg  p-3" />
                        <TextField
                            id="email-field"
                            label="Email"
                            variant="filled"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            fullWidth
                            className=" rounded-lg  p-3" />
                        <TextField
                            id="password-field"
                            label="Password"
                            variant="filled"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            fullWidth
                            className=" rounded-lg p-3 " />
                        <button
                            onClick={handleSignUp}
                            className="w-full bg-slate-700 text-white p-3 text-lg font-semibold rounded-lg cursor-pointer uppercase hover:opacity-95">
                            Sign Up
                        </button>
                    </form>
                </div>

                <div>
                    <p className="my-5">Already have an account?  <Link to="/sign-in" className="text-center underline text-slate-700 font-semibold">Sign In</Link> </p>

                </div>
            </div >


        </>
    )
}

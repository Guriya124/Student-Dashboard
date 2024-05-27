import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signinStart, signinSuccess, signinFailure } from '../app/user/userSlice';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const allUsers = useSelector(state => state.user.allUsers); // Use `allUsers`

    function handleSubmit(e) {
        e.preventDefault();
        try {
            dispatch(signinStart());
            const user = allUsers.find(user => user.email === email && user.password === password);
            if (user) {
                dispatch(signinSuccess(user));
                navigate('/');
            } else {
                dispatch(signinFailure('Invalid email or password'));
                console.log('Invalid email or password');
            }
        } catch (error) {
            console.log(error);
            dispatch(signinFailure(error.message));
        }
    }

    return (
        <>
            <div className="p-5 max-w-lg mx-auto shadow-lg mt-10">
                <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
                <div className='flex items-center justify-center flex-col gap-4'>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            id="email-field"
                            label="Email" variant="filled"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            fullWidth
                            className="rounded-lg p-3" />
                        <TextField
                            id="password-field"
                            label="Password" variant="filled"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            fullWidth
                            className="rounded-lg p-3 " />
                        <button
                            className="w-full bg-slate-700 text-white p-3 text-lg font-semibold rounded-lg cursor-pointer uppercase hover:opacity-95">
                            Sign In
                        </button>
                    </form>
                </div>
                <div>
                    <p className="my-5"> Don't have an account? <Link to="/sign-up" className="text-center underline text-slate-700 font-semibold">Sign up</Link> </p>
                </div>
            </div>
        </>
    );
}

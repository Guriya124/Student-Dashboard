import { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';


export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function handleSignIn() {
        console.log(email, password)
    }

    function handleSubmit(e) { 
        e.preventDefault()
        console.log(email, password)
    }


    return (
        <>

            <div className=" p-5 max-w-lg mx-auto shadow-lg mt-10">
                <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
                <div className='flex items-center justify-center flex-col gap-4'>
                    {/* <TextField id="name-field" label="UserName" variant="filled" fullWidth className=" rounded-lg  p-3" /> */}
                    <form onSubmit={handleSubmit}>


                        <TextField
                            id="email-field"
                            label="Email" variant="filled"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            fullWidth
                            className=" rounded-lg  p-3" />
                        <TextField
                            id="password-field"
                            label="Password" variant="filled"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            fullWidth
                            className=" rounded-lg p-3 " />
                        <button
                            onClick={handleSignIn}
                            className="w-full bg-slate-700 text-white p-3 text-lg font-semibold rounded-lg cursor-pointer uppercase hover:opacity-95">Sign Up</button>
                    </form>
                </div>


                <div>
                    <p className="my-5"> Don't have an account?  <Link to="/sign-up" className="text-center underline text-slate-700 font-semibold">Sign up</Link> </p>

                </div>
            </div>

        </>
    )
}

import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const auth = getAuth(app)
const Login = () => {
    const { signIn } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const provider = new GoogleAuthProvider()
    const from = location.state?.from?.pathname || '/';


    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                form.reset()
                navigate(from)
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })
    }
    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from)
            })
            .catch(error => console.log(error.message))

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left ms-10">

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className='text-center text-3xl font-bold mt-4'>Login</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center mb-3'>Or</p>
                        <button onClick={handleGoogleLogin} variant="danger" className='btn  btn-primary text-white mb-5'> Google Login</button>
                        <p className='mt-3 p-2'>New to the website, Please <Link to="/register " className='btn btn-link'>Register</Link></p>
                        <p className='text-red-600 p-3'><small> {error}</small></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;
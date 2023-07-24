import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [error, setError] = useState('')
    const from = location.state?.from?.pathname || '/'
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password)
        if (password.length < 6) {
            setError("Password must be 6 character")
        }
        createUser(email, password)
            .then(result => {
                updateProfile(result.user, { displayName: name, photoURL: photo })
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Register Successful, Please Login',
                    showConfirmButton: false,
                    timer: 1500
                })
                form.reset()
                navigate('/login')
            })
            .catch(error => {
                console.log(error)
                setError(error.message)


            })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left ms-10">

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className='text-center text-3xl font-bold mt-4'>Register</h1>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name='photo' placeholder="PhotoURL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
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
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>

                        </form>
                        <p className='text-red-600 p-3'><small> {error}</small></p>
                        <p className='mt-3 p-5'>Already have an account, Please <Link to="/login" className='btn btn-link '>Login</Link></p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;

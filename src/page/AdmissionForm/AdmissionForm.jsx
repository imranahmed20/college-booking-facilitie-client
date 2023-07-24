import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const AdmissionForm = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const subject = form.subject.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const number = form.number.value;
        const birth = form.birth.value;
        const address = form.address.value;

        console.log(name, subject, email, photo, number, birth, address)
        const submit = {
            name,
            subject,
            email,
            photo,
            number,
            birth,
            address


        }
        console.log(submit)
        fetch('https://collage-booking-server-ecru.vercel.app/submit', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submit)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User add detail successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/')
                    form.reset()
                }
            })

    }
    return (
        <div >
            <h1 className='text-5xl font-semibold text-orange-500 text-center mt-5 mb-5'>Your  Detail</h1>
            <form onSubmit={handleSubmit} className="card-body">
                <div className='grid md:grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Candidate Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subject</span>
                        </label>
                        <input type="text" name='subject' placeholder="Subject" className="input input-bordered" />
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" name='photo' placeholder="PhotoURL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Candidate Phone number</span>
                        </label>
                        <input type="number" name='number' placeholder="Number" className="input input-bordered" />
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Candidate Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={user.email} placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date of birth</span>
                        </label>
                        <input type="text" name='birth' placeholder="Date of birth" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text"> Address</span>
                    </label>
                    <input type="text" name='address' placeholder="Address" className="input input-bordered" />
                </div>


                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default AdmissionForm;

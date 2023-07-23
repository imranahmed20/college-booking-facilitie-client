import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const navItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><a>Colleges</a></li>
        <li><a>Admission</a></li>
        <li><a>My College</a></li>
    </>
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white">
                            {navItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-white">Educational Booking</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login'> <button className="btn btn-warning">Login</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Header;
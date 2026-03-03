import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm '>
            <div className="navbar justify-between  max-w-7xl mx-auto">
                <div className="navbar-start w-auto">
                    <a className="text-xl font-bold">CS — Ticket System</a>
                </div>

                <div className="navbar-end w-auto">
                    <div className="hidden lg:block">
                        <ul className="menu space-x-4 items-center  menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Changelog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                        <li><a className="btn text-white bg-linear-to-tl from-[#9F62F2] to-[#632EE3]">+ New Ticket</a></li>
                    </ul>
                    </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box right-0 z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Changelog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                        <li><a className="btn text-white bg-linear-to-tl from-[#9F62F2] to-[#632EE3]">+ New Ticket</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
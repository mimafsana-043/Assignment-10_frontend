import { use } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
    const { user, LogOut } = use(AuthContext);

    const handleLogOut = () => {
        LogOut().then(() => {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "You Logged out successfully",
                showConfirmButton: false,
                timer: 1500
            });
            // Sign-out successful.
        }).catch((error) => {
            // console.log(error);
            // An error happened.
        });
    }



    return (
        <div>
            <div className="navbar shadow-lg bg-gradient-to-r from-emerald-200 to-teal-100 px-2 sm:px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="0"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow">
                            <li><Link to={'/'}>Home</Link></li>
                            <li>
                                <a>Properties</a>
                                <ul className="p-2">
                                    <li><Link to={'/about'}>All Properties</Link></li>
                                    <li><a>My Properties</a></li>
                                    <li><Link to={'/addProp'}>Add Properties</Link></li>
                                    <li><Link to={'/updateProp/:_id'}>Update Properties</Link></li>
                                </ul>
                            </li>
                            <li><Link to={'/ratings'}>Ratings</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-sm sm:text-lg md:text-xl text-gray-700 px-1 sm:px-4"> 🥗 FoodClub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul tabIndex="-1" className="menu menu-horizontal px-1">
                        <li><Link to={'/'}>Home</Link></li>
                        <li>
                            <details>
                                <summary>Properties</summary>
                                <ul tabIndex="0" className="p-2 w-full z-[10]">
                                    <li><Link to={'/about'}>All Properties</Link></li>
                                    <li><a>My Properties</a></li>
                                    <li><Link to={'/addProp'}>Add Properties</Link></li>
                                    <li><Link to={'/updateProp/:_id'}>Update Properties</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link to={'/ratings'}>Ratings</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? (
                            <div className="flex items-center gap-1 sm:gap-2">
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-8 sm:w-10 rounded-full">
                                            <img src={user?.photoURL || 'https://via.placeholder.com/150'} alt="User" />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li className="menu-title">{user?.displayName}</li>
                                        <li><Link to="/about">All Properties</Link></li>
                                        <li><button onClick={handleLogOut}>Logout</button></li>
                                    </ul>
                                </div>
                                {/* <img src={`${user ? user.photoURL : <FaUserLarge className="text-2xl text-cyan-800" />}`} alt="" className="lg:w-12 lg:h-12 w-8 h-8 rounded-full" /> */}


                                <button onClick={handleLogOut} className="btn btn-xs sm:btn-sm md:btn-md bg-black text-white hidden sm:inline-flex">LogOut</button>

                            </div>

                        ) : (
                            <div className="flex items-center gap-1 sm:gap-2">
                                <FaUserLarge className="text-lg sm:text-xl md:text-2xl text-cyan-800" />
                                <Link to={'/Login'}>
                                    <button className="btn btn-xs sm:btn-sm md:btn-md bg-black text-white">Login</button></Link>

                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const {user, logOut } = useContext(AuthContext);
    const navLinks = <>
        <li className="m-1"><NavLink to='/'>Home</NavLink></li>
        <li className="m-1"><NavLink to='/products'>Products</NavLink></li>
    </>

const handleLogOut = () => {
    logOut()
        .then(() => console.log('User Logged out'))
        .catch(error => console.error(error))
}

    return (
        <div className="navbar bg-base-300 lg:px-24 py-4 sticky top-0 z-30">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl lg:text-3xl">Heavy Mart</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-3 lg:gap-8">
                <div className="form-control">
                    <input type="text" placeholder="Search Products" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                       {
                        user?  <div className="w-10 rounded-full">
                        <img
                            alt="User profile image"
                            src={user?.photoURL} />
                    </div>:
                    <Link to='/login'><h1>Login</h1></Link>
                       }
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 shadow">
                            {
                                user? <li><a onClick={handleLogOut}>Logout</a></li>:
                               <Link to='/register'><li><a>Register</a></li></Link>
                            }
                       
                       
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
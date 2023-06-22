import { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();
    const [darkMode, setDarkMode] = useState(false);
    // console.log(user)

    useEffect(() => {
        const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDarkMode);
    }, []);

    const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    };
    
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        const routeName = location.pathname.replace('/', '');
        const formattedRouteName = routeName.charAt(0).toUpperCase() + routeName.slice(1);
        document.title = `Rythmo school || ${formattedRouteName}`;
    }, [location]);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    
    const navOptions = <>
        <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/class">Classes</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/instructor">Instructors</NavLink></li>
        
        {
            user ? <>
                <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/dashboard">Dashboard</NavLink></li>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/login">Login</NavLink></li>
            </>
        }
    </>

    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className=" w-full fixed z-10 bg-opacity-30  bg-gray-100 text-textColor">
                <div className="navbar container mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {navOptions}
                            </ul>
                        </div>
                        <a className=""><img className="w-[120px] h-[50px]" src="https://i.ibb.co/VtRjD2D/logo.webp" alt="" /></a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="navbar-end flex gap-3">
                        {
                            user ? 
                            <div className='tooltip tooltip-bottom tooltip-warning ' data-tip={user.email}>
                                {
                                    user?.photoURL ? <img className='border-1 border-red-400 rounded-full w-10' src={user.photoURL} alt="" />:
                                    <FaUserCircle className="w-[20px]"></FaUserCircle>
                                }
                                
                            </div> : 
                            <div className='menu rounded-lg'>
                                <li className=""><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/signup">Sign up</NavLink></li>
                            </div>    
                        }
                        <button
                        className="bg-blue-500 text-white rounded p-2"
                        onClick={toggleDarkMode}
                        >
                            Toggle Dark Mode
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
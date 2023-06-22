import { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import { motion } from "framer-motion";
import { FaHome, FaPlus, FaList, FaUsers, FaSignInAlt } from 'react-icons/fa';
import useInstructor from "../Hooks/useInstructor";


const DashBoard = () => {
    const { logOut, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin();
    const [isInstructor, isInstructorLoading] = useInstructor();
    // console.log(isInstructor)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }


    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side bg-tertiary">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-[200px]">
                    {
                        (isAdmin==true)? 
                        <>
                            <motion.li whileHover={{ scale: 1.1 }}>
                            </motion.li>
                            <motion.li whileHover={{ scale: 1.1 }}><NavLink to="/dashboard/manageClass"> <FaList /> Manage Classes</NavLink></motion.li>
                            <motion.li whileHover={{ scale: 1.1 }}><NavLink to="/dashboard/manageUsers"> <FaUsers /> Manage Users</NavLink></motion.li>
                            
                        </> : 
                        (
                            isInstructor==true?
                            <>
                                <motion.li whileHover={{ scale: 1.1 }}><NavLink to="/dashboard/addClass"> <FaPlus /> Add Class</NavLink></motion.li>
                                <motion.li whileHover={{ scale: 1.1 }}><NavLink to="/dashboard/myClass"> <FaList /> My Classes</NavLink></motion.li>
                            </>:
                            <>
                                <motion.li whileHover={{ scale: 1.1 }}><NavLink to="/dashboard/selectedClass"> <FaList /> Selected Classes</NavLink></motion.li>
                                <motion.li whileHover={{ scale: 1.1 }}><NavLink to="/dashboard/enrolledClass"> <FaList /> Enrolled Classes</NavLink></motion.li>
                                <motion.li whileHover={{ scale: 1.1 }}><NavLink to="/dashboard/paymentHistory"> <FaList /> Payment Histry</NavLink></motion.li>

                            </>
                        )
                    }
                    <div className="divider"></div>
                    <motion.li whileHover={{ scale: 1.1 }}><NavLink to="/"><FaHome></FaHome> Home</NavLink> </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}><Link onClick={handleLogOut} className=""><FaSignInAlt /> LogOut</Link></motion.li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;
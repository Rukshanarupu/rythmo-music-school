import {createBrowserRouter,} from "react-router-dom";
import Main from "../Layout/Main"
import Home from "../pages/Home/Home";
import Error from "../pages/Shared/Error";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import Instructors from "../pages/Instructors";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import ManageClass from "../pages/Dashboard/Admin/ManageClass";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import MyAddedClass from "../pages/Dashboard/Instructors/MyAddedClass";
import AddClassForm from "../pages/Dashboard/Instructors/AddClassForm";
import Feedback from "../pages/Dashboard/Admin/Feedback";
import ClassList from "../pages/ClassList/ClassList";
import SelectedClass from "../pages/Dashboard/Student/SelectedClass";
import EnrolledClass from "../pages/Dashboard/Student/EnrolledClass";
import Payment from "../pages/Dashboard/Student/Payment/Payment";
// import AdminPvtRoute from "./AdminPvtRoute";
// import InstructorRoute from "./InstructorRoute";
import PaymentHistory from "../pages/Dashboard/Student/Payment/PaymentHistory";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'class',
          element: <ClassList></ClassList>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'instructor',
          element: <Instructors></Instructors>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>, 
      errorElement: <Error></Error>,
      children: [
        {
          path: 'manageClass',
          element: <ManageClass></ManageClass>
        },
        {
          path: 'manageUsers',
          element: <ManageUsers></ManageUsers>
        },
        {
          path: 'addClass',
          element: <AddClassForm></AddClassForm>
        },
        {
          path: 'myClass',
          element: <MyAddedClass></MyAddedClass>
        },
        {
          path: "feedback/:id",
          element: <Feedback></Feedback>,
        },
        {
          path: "selectedClass",
          element: <SelectedClass></SelectedClass>,
        },
        {
          path: "enrolledClass",
          element: <EnrolledClass></EnrolledClass>,
        },
        {
          path: "payment",
          element: <Payment></Payment>,
        },
        {
          path: "paymentHistory",
          element: <PaymentHistory></PaymentHistory>,
        },
  
      ]
    }
  ]);
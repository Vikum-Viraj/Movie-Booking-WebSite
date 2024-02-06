import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Movies from './components/Movie/Movies.js'
import HomePage from './components/HomePage.js'
import Admin from "./components/Auth/Admin";
import Auth from  "./components/Auth/Auth"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { adminActions, userActions } from "./store";
import Booking from "./components/Booking/Booking";
import UserProfile from "./Profile/UserProfile";
import AdminProfile from "./Profile/AdminProfile";
import AddMovie from "./components/Movie/AddMovie";


function App() {
  
  const dispatch = useDispatch();

  const isAdminLogedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  
  console.log("isAdminLogedIn",isAdminLogedIn);
  console.log("isUserLoggedIn",isUserLoggedIn);

  useEffect(() => {
    if(localStorage.getItem("userId")) {
      dispatch(userActions.login());
    }else if(localStorage.getItem("adminId")){
      dispatch(adminActions.login());
    }
  
  },[dispatch])

  return (
    <div >
      <Header/>
      <section>
        <Routes>

          <Route path="/" element={<HomePage/>}/>
          <Route path="/movies" element={<Movies/>}/>
          {!isAdminLogedIn && !isUserLoggedIn && (
            <>
            {" "}
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/auth" element={<Auth/>}/>
            </>
          )}

          {isUserLoggedIn && !isAdminLogedIn && (

            <>
            {" "}
            <Route path="/user" element={<UserProfile/>}/>
            <Route path="/booking/:id" element={<Booking/>}/>
            </>
          )}

          {isAdminLogedIn && !isUserLoggedIn &&(
            <>
            {" "}
            <Route path="/add" element={<AddMovie/>}/>
            <Route path="/user-admin" element={<AdminProfile/>}/>
         
            </>
          )}
          
        </Routes>
      </section>
    </div>
  );
}

export default App;

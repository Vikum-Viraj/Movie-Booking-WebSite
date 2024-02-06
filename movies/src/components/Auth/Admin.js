import { amber } from "@mui/material/colors";
import React from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { sendAuthRequest } from "../../api-helper/api-helper";
import { adminActions } from "../../store";
import AuthForm from "./AuthForm";

const Admin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onReceived = (data) => {

        console.log(data);
        dispatch(adminActions.login());
        localStorage.setItem("admin",data.id);
        localStorage.setItem("token",data.token);
        navigate("/");
    }

    const getData = (data) => {
     
        console.log("Admin",data);
        sendAuthRequest(data.inputs)
        .then(onReceived)
        .catch((err) => console.log(err));
    };

    return(

        <div>
            <AuthForm onSubmit={getData} isAdmin={true}/>
        </div>
    )
}

export default Admin;
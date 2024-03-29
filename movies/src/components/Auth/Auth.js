import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendUserAuthRequest } from "../../api-helper/api-helper";
import { userActions } from "../../store";
import AuthForm from "./AuthForm";


const Auth = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onReceived = (data) => {
        console.log(data);
        dispatch(userActions.login());
        localStorage.setItem("userId",data.id);
        navigate("/")
    }
    
    const getData = (data) => {

        console.log(data);

        sendUserAuthRequest(data.inputs,data.signup)
        .then(onReceived)
        .catch((err) => console.log(err));
    };


    return(

        <div>
            <AuthForm  onSubmit={getData} isAdmin={false} />
        </div>
    )
}

export default Auth;
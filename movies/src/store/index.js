import {configureStore, createSlice} from '@reduxjs/toolkit';
//create redux store 
const userSclice = createSlice({
  
    name: "user",
    initialState: { isLoggedIn:false},
    reducers: {
        login(state) {

            state.isLoggedIn = true;
        },

        logout(state) {
            
            localStorage.removeItem("userId");
            state.isLoggedIn = false;
        },
    },

})

//create slice fro admin
const adminSclice = createSlice({
  
    name: "auth",
    initialState: { isLoggedIn:false},
    reducers: {
        login(state) {

            state.isLoggedIn = true;
        },

        logout(state) {

            localStorage.removeItem("adminId");
            localStorage.removeItem("token");
            state.isLoggedIn = false;
        },
    },

})

export const userActions = userSclice.actions;
export const adminActions = adminSclice.actions;

export const store = configureStore({

    reducer: {
        user : userSclice.reducer,
        admin : adminSclice.reducer,
    },
});
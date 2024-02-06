import React, { useEffect, useState } from "react"
import { AppBar, Autocomplete, IconButton, Tab, Tabs, TextField, Toolbar } from '@mui/material';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import { Box } from "@mui/system";
import { getAllMovies } from "../api-helper/api-helper";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminActions, userActions } from "../store";


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAdminLogedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const [value,setValue] = useState(0);
  const [movies,setMovies] = useState([]);

  
  useEffect(() => {

    getAllMovies().then((data) => setMovies(data.movies)).catch((err) => console.log(err));

  },[]);

  const logout = (isAdmin) => {

    dispatch(isAdmin?adminActions.logout():userActions.logout())
  }

  const handleChange = (e,val) => {

     const movie = movies.find ((m) => m.title === val);
     if(isUserLoggedIn){
      navigate(`/booking/${movie._id}`);
     }
  }

    return(

        <AppBar position="sticky" sx={{bgcolor:'lightblue'}}>
         <Toolbar>
            <Box  width={'20%'}>
               <IconButton  LinkComponent={Link} to ="/">
               <MovieCreationIcon />
               </IconButton>
            </Box>
            <Box width={'30%'} margin={'auto'}>
            <Autocomplete
            onChange={handleChange}
              id="free-solo-demo"
              freeSolo
              options={movies && movies.map((option) => option.title)}
              renderInput={(params) => 
              <TextField sx={{ input:{color:'black'}}} variant="standard" {...params} label="Search multiple movies" />}
               />
            </Box>

            <Box display={'flex'}>
              <Tabs  indicatorColor="secondary" textColor="inherit" value={value} onChange={(e,val) =>setValue(val)}>
                <Tab LinkComponent={Link} to="/movies" label='Movies'/>

                {!isAdminLogedIn &&  !isUserLoggedIn && (
                  <>
                <Tab LinkComponent={Link} to="/admin"   label='Admin'/>
                <Tab LinkComponent={Link} to="/auth" label='Auth'/>
                  </>
                )}

                {isUserLoggedIn && (
                  <>
                   <Tab LinkComponent={Link} to="/user"   label='Profile'/>
                   <Tab onClick={() => logout(false)} LinkComponent={Link} to="/" label='Logout'/>
                  </>
                )}

                 {isAdminLogedIn && (
                  <>
                   <Tab LinkComponent={Link} to="/add"   label='Add Movie'/>
                   <Tab LinkComponent={Link} to="/user-admin" label='Profile'/>
                   <Tab onClick={() => logout(true)} LinkComponent={Link} to="/"  label='Logout'/>
                  </>
                )}
              </Tabs>
            </Box>
         </Toolbar>
        </AppBar> 
    )
    
}

export default Header;

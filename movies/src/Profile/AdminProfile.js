import { Box } from "@mui/system";
import React, { Fragment, useEffect, useState } from "react";
import { getAdminById } from "../api-helper/api-helper";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {  List, ListItem, ListItemText, Typography } from "@mui/material";


const AdminProfile = () => {

    const [admin,setAdmin] = useState();

    useEffect(() => {
      
        getAdminById()
        .then((res) => setAdmin(res.admin)).catch((err) => console.log(err));

    },[])
  
    return (
      <Box width={"100%"} display="flex">
      
            <Fragment>
                {" "}
       { admin && (      
       <Box  marginLeft={10} flexDirection={"column"} justifyContent="center" alignItems={"center"} width={"30%"}> 
       <Box marginLeft={5}>
       <AccountCircleIcon  sx={{fontSize:'10rem'}} />
       </Box>
    
       <Typography padding={1} margin='5px' width={'280px'} textAlign={'left'} border={'1px solid blue'} borderRadius={6}>
         Email:{admin.email}
       </Typography>
       </Box>
          )}
            
       {admin && admin.addedMovies.length > 0 && (
       <Box marginRight={90} width={"70%"} display='flex' flexDirection={"column"} >
        <Typography variant="h3" fontFamily={'verdana'} textAlign="center">Added Movies</Typography>
        <Box margin={'auto'} display='flex' flexDirection={'column'} width="300%">
            
            <List>
                {admin.addedMovies.map((movie, index) => (
                    <ListItem sx={{bgcolor:"#00cc7a",color:"white",textAlign:"center",margin:1}}>
                        <ListItemText sx={{margin:1,width:"auto",textAlign:"left"}} >
                            Movie : {movie.title}
                        </ListItemText>
                    
                    </ListItem>
                ))}
            </List>
        </Box>
        </Box>
        )} 
        </Fragment>
        
   
      </Box>
    )
}

export default AdminProfile;
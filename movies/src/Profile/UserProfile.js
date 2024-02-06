import { Box } from "@mui/system";
import React, { Fragment, useEffect, useState } from "react";
import { deleteBooking, getUserBooking, getUserDetails } from "../api-helper/api-helper";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const UserProfile = () => {

    const [bookings,setBookings] = useState();
    const [user,setUser] = useState();
    useEffect(() => {
      
        getUserBooking().then((res) => setBookings(res.bookings)).catch((err) => console.log(err));
        getUserDetails().then((res) => setUser(res.user)).catch((err) => console.log(err));

    },[])
    console.log(bookings);

    const handleDelete = (id) => {
        
        deleteBooking(id).then((res) => console.log(res)).catch((err) => console.log(err));
    }

    return (
      <Box width={"100%"} display="flex">
      
            <Fragment>
                {" "}
       { user && (      
       <Box  marginLeft={10} flexDirection={"column"} justifyContent="center" alignItems={"center"} width={"30%"}> 
       <Box marginLeft={5}>
       <AccountCircleIcon  sx={{fontSize:'10rem'}} />
       </Box>
       <Typography padding={1} margin='5px' width={'280px'} textAlign={'left'} border={'1px solid blue'} borderRadius={6}>
         Name:{user.name}
       </Typography>
       <Typography padding={1} margin='5px' width={'280px'} textAlign={'left'} border={'1px solid blue'} borderRadius={6}>
         Email:{user.email}
       </Typography>
       </Box>
          )}
            
       {bookings && (bookings.length > 0) && (
       <Box marginRight={90} width={"70%"} display='flex' flexDirection={"column"} >
        <Typography variant="h3" fontFamily={'verdana'} textAlign="center">Bookings</Typography>
        <Box margin={'auto'} display='flex' flexDirection={'column'} width="300%">
            
            <List>
                {bookings.map((booking, index) => (
                    <ListItem sx={{bgcolor:"#00cc7a",color:"white",textAlign:"center",margin:1}}>
                        <ListItemText sx={{margin:1,width:"auto",textAlign:"left"}} >
                            Movie : {booking.movie.title}
                        </ListItemText>
                        <ListItemText sx={{margin:1,width:"auto",textAlign:"left"}} >
                            Seat : {booking.seatNumber}
                        </ListItemText>
                        <ListItemText sx={{margin:1,width:"auto",textAlign:"left"}} >
                            Date : {new Date(booking.date).toDateString()}
                        </ListItemText>
                        <IconButton onClick={() =>handleDelete(booking._id)} color="error">
                            <DeleteIcon  color="red"/>
                        </IconButton>
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

export default UserProfile;
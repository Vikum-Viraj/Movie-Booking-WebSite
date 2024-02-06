import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MovieItem = ({title,releaseDate,posterUrl,id}) => {

    return(

        <div >
        <Card sx={{ display:"column",justifyContent:'center', margin:2, width:250,height:350,borderRadius:5,":hover":{

                    boxShadow: "10px 10px 20px #ccc"

        }}}>

         <img src= {posterUrl} height={'50%'} width="100%" alt={title}/>

         <CardContent>
         <Typography gutterBottom variant="h5" component="div">
           {title}
         </Typography>
         <Typography variant="body2" color="text.secondary">
           {new Date(releaseDate).toDateString()}
         </Typography>

         </CardContent>
         <CardActions>
            
         <Button  LinkComponent={Link} to={`/booking/${id}`} variant="contained" sx={{margin:"auto",alignItems:'center '}} size="small">Book</Button>

         </CardActions>
         </Card>

         </div>
    )


}

export default MovieItem;
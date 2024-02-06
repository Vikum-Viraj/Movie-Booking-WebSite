import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMovies } from "../api-helper/api-helper";
import MovieItem from "./Movie/MovieItem";

const HomePage = () => {

    const [movies,setMovies] = useState();
    useEffect(() => {

        getAllMovies().then((data) => setMovies(data.movies)).catch((err) => console.log(err));
    },[])

    console.log(movies);

    return(

        <Box width={"100%"} height="100%" margiTop={2} margin="auto">

        <Box margin={'auto'} width="80%" height={"40vh"} padding={2}>
        <img src = "https://i.ytimg.com/vi/Xk4jbINu6vA/maxresdefault.jpg" alt ="Avatar"

        width={"100%"}
        height={"100%"}

        />
        </Box> 
        <Box padding={5} margin="auto">
            <Typography variant="h4" textAlign={"center"}>Latest Release</Typography>
        </Box>
       <Box display="flex" width ="80%" justifyContent={"center"} flexWrap="wrap" >
        
        {movies && movies.map((movie,index) => <MovieItem id={movie.id} title={movie.title} posterUrl={movie.posterUrl} releaseDate={movie.releaseDate} /> )}

       </Box>
       <Box display='flex' padding={5} margin="auto"> 
       <Button  LinkComponent={Link} to='/movies' variant="outlined" sx={{margin:'auto',color:"purple" ,backgroundColor:'lightblue'}}>View All Movies</Button>
       </Box>
      </Box>
    )
    

    
}

export default HomePage;


import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getAllMovies } from "../../api-helper/api-helper";
import MovieItem from "./MovieItem";

const Movie = () => {

    const [movies,setMovies] = useState();

    useEffect(() => {

      getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));

    },[])

    return(

        <Box margin='auto' marginTop={4}>
        <Typography bgcolor={' #cc66ff'} variant="h4" width={'50%'} margin={'auto'} padding={2} textAlign='center'>All Movies</Typography>
        <Box width={'100%'} marginTop={5} margin='auto' display={'flex'} justifyContent="center" flexWrap={'wrap'}>
            
        {movies && movies.map((movie,index) => <MovieItem key={index} id={movie._id} posterUrl={movie.posterUrl}  releaseDate={movie.releaseDate} title={movie.title} /> )}     

        </Box>
        </Box>
    )
}


export default Movie;
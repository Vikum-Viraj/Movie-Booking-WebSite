import { Button, Checkbox, FormLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { addMovie } from "../../api-helper/api-helper";

const AddMovie = () => {

   const [inputs,setInputs] = useState({
    title:"",
    description:"",
    posterUrl:"",
    releaseDate:"",
    featured:false
   });

   const [actors,setActors] = useState([""]);
   const [actor,setActor]   = useState("");

   const handleChange = (e) => {

      setInputs((prevState) => ({...prevState,[e.target.name]:e.target.value,}));
   };

   const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs,actors);
        addMovie({...inputs,actor:actors}).then((res) => console.log(res)).catch((err) => console.log(err));
        
   }

    return(
       <div>
        <form onSubmit={handleSubmit}>
            <Box width={'50%'} 
            padding={10} 
            margin="auto" 
            display={'flex'} 
            boxShadow={"10px 10px 20px #bf80ff"}
            flexDirection="column">
            <Typography textAlign={'center'} variant="h5" fontFamily={'verdana'}>
                Add New Movie
            </Typography>
            <FormLabel>Title</FormLabel>
            <TextField value={inputs.title} onChange={handleChange} name="title" variant="standard" margin="normal" />
            <FormLabel>Description</FormLabel>
            <TextField value={inputs.description} onChange={handleChange} name="description" variant="standard" margin="normal" />
            <FormLabel>Poster Url</FormLabel>
            <TextField value={inputs.posterUrl} onChange={handleChange} name="posterUrl" variant="standard" margin="normal" />
            <FormLabel>ReleaseDate</FormLabel>
            <TextField type={'date'} value={inputs.releaseDate} onChange={handleChange} name="releaseDate" variant="standard" margin="normal" />
            <FormLabel>Actor</FormLabel>

            <Box display={'flex'} >
            <TextField onChange={(e) => setActor(e.target.value)} name="actor" variant="standard" margin="normal" />
            <Button onClick={(e) => {setActors([...actors, actor]); setActor("");}} >Add Button</Button>
            </Box>

            <FormLabel>Featured</FormLabel>
             <Checkbox onClick={(e) => setInputs((prevState) => ({
                ...prevState,
                featured: e.target.checked,
             }))}
              name="featured" checked={inputs.featured} sx={{mr:'auto',mt:''}}/>

             <Button type="submit" variant="contained" sx={{margin:'auto',width:"30%" ,bgcolor:'black'}} >Add New Movie</Button>

            </Box>
        </form>
       </div>
    )
}

export default AddMovie;

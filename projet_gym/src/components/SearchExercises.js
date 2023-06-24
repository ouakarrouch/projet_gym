import React, {useEffect, useState} from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'
const SearchExercises = () => {
        const[search, setsearch] = useState('');
        const [exercise, setExercise] = useState([]);
        const [bodyParts, setBodyParts] = useState([]);

      useEffect(() =>   
      {
      const fetchExercisesData = async () => {
     const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      setBodyParts(['all' , ...bodyPartData]);

      }
     fetchExercisesData();
      
      },[]
      
      )
        const handlesearch = async () => {
                   if(search){        
          const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      
         const SearchedExercises = exercisesData.filter(
              (exercise) => exercise.name.toLowerCase().includes(search)
                   || exercise.target.toLowerCase().includes(search)
                   || exercise.equipment.toLowerCase().includes(search)
                   || exercise.bodyPart.toLowerCase().includes(search)        
                   );
                setsearch('');
                setExercise(SearchedExercises);
  }  
}
  return (
    <Stack alignItems='center' mt='37px'
    justifyContent='center'
    p="20px">
      <Typography  fontWeight={700}
      sx={{
        fontSize: {lg: '45px' , xs: '30px'}
      }}
      mb='50px' textAlign='center'
      
      >

    Awesome Exercises You <br /> 
    Should Know 



      </Typography>
       <Box position='relative'
       mb="72px">
        <TextField
sx={{
input:{
fontWeight:'700',
border: 'none',
borderRadius:'4px'
},
width: {lg: '800px', xs: '350px'},
backgroundColor: '#fff',
borderRadius: '40px'


}}

        height='76px'
        value={search}
        onChange={(e) => setsearch(e.target.value.toLowerCase())}
        placeholder='Search'
        type="text"
        />
        <Button className='Search-btn'

sx={{
bgcolor:'#FF2625',
color:'#fff',
textTransform: 'none',
width:{lg: '175px', xs: '80px'},
fontSize:{lg:'20px', xs:'14px'},
height:'56px',
position: 'absolute',
right:'0'

}}

onClick={handlesearch}
>Search</Button>
       </Box>
       <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyParts} bodyPart={bodyParts} />
      </Box>


    </Stack>
  )
}

export default SearchExercises

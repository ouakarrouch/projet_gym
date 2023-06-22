import React, {useEffect, useState} from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

const SearchExercises = () => {

const[Search, setsearch] = useState('')
const handlesearch = async () => {




  if(Search){  const exerciseData = await fetchData(); }
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
        value={Search}
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





    </Stack>
  )
}

export default SearchExercises

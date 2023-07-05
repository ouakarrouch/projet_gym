import React, {useState} from 'react'
import { Box } from '@mui/material'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import HeroBanner from '../components/HeroBanner'
const home = () => {
  const [bodyPart, setBodyPart] = useState('all ')
  const [exercise, setExercise] = useState([]);
  
       

  return (
    <Box>
    <HeroBanner />
    <SearchExercises 
    setExercises={setExercise}
    bodyPart={bodyPart}
    setBodyPart={setBodyPart}    
    />
     <Exercises
      setExercises={setExercise} 
     exercises={exercise} 
     bodyPart={bodyPart} />
    </Box>
  )
}

export default home

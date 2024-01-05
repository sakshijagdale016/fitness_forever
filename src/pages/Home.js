import React ,{useState}from 'react'
import { Box } from '@mui/material'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SeachExercises';
import HeroBanner from '../components/HeroBanner';
import IdealWeight from '../components/IdealWeight'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([])
  return (
    <Box>

  <HeroBanner/>
  <SearchExercises setExercises={setExercises}
    bodyPart={bodyPart}
    setBodyPart = {setBodyPart}
  />
  <Exercises
  exercises = {exercises}
    setExercises={setExercises}
    bodyPart={bodyPart}
  
  />
<IdealWeight/>


    </Box>
  )
}

export default Home
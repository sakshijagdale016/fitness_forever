import React ,{useState,useEffect}from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'
import { exerciseOptions, youtubeOptions,fetchData } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
const ExerciseDetails = () => {

  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  

  const {id} = useParams();

  useEffect(() => {
   const fetchExercisesData =async ()=>{
    const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
    const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)
setExerciseDetail(exerciseDetailData);

const exrciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions);
  setExerciseVideos(exrciseVideosData.contents)
  const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions);
setTargetMuscleExercises(targetMuscleExercisesData);
 
   }


   fetchExercisesData();

  
   
  }, [id]);
  
  return (
    <Box>
        <Detail exerciseDetail={exerciseDetail}/>
        <ExerciseVideos  exerciseVideos = {exerciseVideos} name ={exerciseDetail.name} />
        <SimilarExercises targetMuscleExercises={targetMuscleExercises} />
    </Box>
  )

}

export default ExerciseDetails 








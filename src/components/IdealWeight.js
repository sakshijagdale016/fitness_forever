import React ,{useState } from 'react'
import {idealWeightOptions ,fetchData} from '../utils/fetchData'
import {Box , TextField,MenuItem, Typography,Button} from '@mui/material'
const IdealWeight = () => {
const [gender, setGender] = useState("");
const [age, setAge] = useState(0);
const [data, setData] = useState(false)
const [weight , setWeight] = useState(0);
console.log(age);
console.log(gender)

const  handleChange = (e)=>{
  setGender(e.target.value);
}
const handleSearch = async() => {
  let lowercasedGender = gender.toLowerCase();
  if (lowercasedGender !== "male" && lowercasedGender !== "female" && age<=0) {
    alert("Enter correct details");
  }
  else{
     try{
      const url = `https://fitness-calculator.p.rapidapi.com/idealweight?gender=${gender}&height=${age}`
      const res = await fetchData(url , idealWeightOptions);
      
   const idealWeight = await res.data.Devine;
   setWeight(idealWeight);
    console.log(idealWeight)
      alert(`Your ideal weight is ${idealWeight}`)
      setData(true);
     }catch(e){
   alert("There is an error while fetching the data");

     }

  }

};

  return (
    <Box>
    <Typography fontWeight={700} sx={{
      fontSize : {lg : '44px' , xs:'30px'}
     }}  mb="50px" mt="50px" textAlign = "center" color ="red">
     Know your ideal Weight
    </Typography>
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    
    <Typography  fontWeight={700} sx={{
      fontSize : {lg : '30px' , xs:'20px'}
     }} mb="20px">
      Enter Your Gender
    </Typography>
    <TextField
      select
      value={gender}
      onChange={handleChange}
      sx={{
        input: { fontWeight: '500', border: 'none', borderRadius: '4px' },
        width: { lg: '600px', xs: '350px' },
        backgroundColor: '#fff',
        borderRadius: '40px',
      }}
      style={{ height: '76px' }}
    >
      <MenuItem value="male">Male</MenuItem>
      <MenuItem value="female">Female</MenuItem>
     
    </TextField>

  <Typography fontWeight={700} sx={{
      fontSize : {lg : '30px' , xs:'20px'}
     }} mb="20px" mt="20px">
      Enter Your height
    </Typography>
      <TextField 
  sx={{
    input:{fontWeigth:'700' , border:'none',borderRadius:'4px'},
    width:{lg:'600px',xs:'350px'},
    backgroundColor:'#fff',
    borderRadius:'40px'
  }}
  value={age}
  height="76px" 
  onChange = {(e)=> setAge(e.target.value)}
  type="number">
  Search

  </TextField>

  <Button  
  sx={{
    marginTop:"25px",
    bgcolor:"#FF2625",
    color:"#fff",
    textTransform:'none',
    width:{lg:'175px',xs:'150px'},
    fontSize : {lg:'20px',xs:'14px'},
    height:'56px',
    }}

     onClick ={handleSearch}
  
 >Search</Button>

 {
  data && <Typography mt="20px"
  fontWeight={700} sx={{
      fontSize : {lg : '30px' , xs:'20px'}
     }} > 
  Your ideal weight is {weight} 
  </Typography>
 }
    </Box>
    </Box>
  )
}

export default IdealWeight

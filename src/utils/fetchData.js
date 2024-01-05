export const exerciseOptions = {
    method: 'GET',
    // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': 'ae0d19cad6msh3acc79efa19d655p152c31jsn0afcfa79194a',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


 export  const youtubeOptions = {
    method: 'GET',
   headers: {
      'X-RapidAPI-Key': 'ae0d19cad6msh3acc79efa19d655p152c31jsn0afcfa79194a',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };


  export const idealWeightOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ae0d19cad6msh3acc79efa19d655p152c31jsn0afcfa79194a',
      'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    }
  };

export const fetchData = async(url,options)=>

{
  
    console.log(options);
    const response = await fetch(url,options);
    const data = await response.json();
    return data;
}
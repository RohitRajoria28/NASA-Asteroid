 
import React, { useEffect, useState } from 'react';
import './Home.css'
const RandomAsteroid = () => {

   const [id, setId] = useState<number>();
  const [finalID,setFinalID] = useState<number>();
  const [asteridName,setName]=useState<string | null>(null);
  const [data, setData] = useState<string[]>([]);
  const [flag,setFlag]=useState<boolean>(false);
  const [finalFlag,setFinalFlag]=useState<boolean>(false);
  const [nasa_jpl_url,Setnasa_jpl_url]=useState<string>();
  const [IPH,setIPH]=useState<string>();

  const Asteroids  =[2465633,3426410,3553060,3726710,3727181,3727639,3730577,3731587,3747356,3758838,54191333,54218591,2440012,3713989,3726788,3727036,3727179,3727662,3727663,3759353,3759690,3827337,3843641,3986741,54088823];
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${finalID}?api_key=l5cVGLqbDBUwiEM174GwCJ4zjuPDWYwychzz0JEG`);
        const result = await response.json();
        const Name=await result.name
        const nasa_url=await result.nasa_jpl_url;
         const isIPH= await result.is_potentially_hazardous_asteroid;
          setData([...data,result]);
          setName((Name)) 
          Setnasa_jpl_url(nasa_url);
          setIPH(isIPH);
      } catch (error) {
        console.error(error);
      }
    };
    
    if (finalID) {
      fetchData();
      
    }
  }, [finalID]);
  useEffect(()=>{
    console.log(asteridName);
    console.log(data);
    console.log(IPH)
    if(asteridName!=null){
      setFlag(true);
      
    } 
  },[data])

  
 useEffect(()=>{
    const handleRandom=()=>{
        const randomIndex: number = Math.floor(Math.random() *Asteroids.length);  
        setFinalID(Asteroids[randomIndex]);
      }
    if(!flag){
        handleRandom();
    }
      
 } )
 
  return (
    
    <div>
       <div className='form-container'>
        <div className='center  ' >
          
          
          {/* <button className='main-random' onClick={handleRandom} >Random Asteriod</button> */}
           
          
          {flag && (
            <div  >
               <div className="asteroid"></div>
               <div className="asteroid2"></div>

               <h2 className='asteroidd' >Your Random  Asteroid Data  🌠</h2>
              <h3   >1. Name : <h3 className='line2' > {asteridName}</h3></h3>
              <h3   >2. nasa_jpl_url: <h3 className='line2' > {nasa_jpl_url}</h3> </h3>
              <h3   >3. is_potentially_hazardous_asteroid : 
              {
                IPH ? <h3 className='line2'>true</h3>: <h3 className='line2'>false</h3>
              } 
               </h3>
             
            </div>
          )} 

        </div>
       </div>
      
    </div>
  );
}

export default RandomAsteroid
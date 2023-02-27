import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import API_KEY  from '../Constants'; 

const Home = () => {
  
    const [id, setId] = useState<number>();
    const [finalID,setFinalID] = useState<number>();
    const [asteridName,setName]=useState<string | null>(null);
    const [data, setData] = useState<string[]>([]);
    const [flag,setFlag]=useState<boolean>(false);
    const [nasa_jpl_url,Setnasa_jpl_url]=useState<string >();
    const [IPH,setIPH]=useState<string>();

    const navigate=useNavigate();
    const Asteroids  =[2465633,3426410,3553060,3726710,3727181,3727639,3730577,3731587,3747356,3758838,54191333,54218591,2440012,3713989,3726788,3727036,3727179,3727662,3727663,3759353,3759690,3827337,3843641,3986741,54088823];
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${finalID}?api_key=${API_KEY}`);
          const result = await response.json();
          const Name=await result.name
          const nasa_url=await result.nasa_jpl_url;
           const isIPH= await result.is_potentially_hazardous_asteroid;
            setData([...data,result]);
             console.log(data);
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
      if(asteridName!=null){
        setFlag(true);
          {     
            if(asteridName!=null && nasa_jpl_url!=undefined && IPH!=undefined){
              console.log(asteridName+" "+nasa_jpl_url+" "+IPH+" ");
              navigate('./AsteroidData',{state:{asteridName,nasa_jpl_url,IPH,data}});
            }
          }
      } 
    },[data])
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setId(parseInt(event.target.value));
      
    };
    const handleClick=()=>{
       
        setFinalID(id) 
     
    }
    const handleRandom=()=>{
      const randomIndex: number = Math.floor(Math.random() *Asteroids.length);  
      setFinalID(Asteroids[randomIndex]);
    }
     
    return (
      
      <div>
         <div className='form-container'>
          <div className='main-form' >
           <h2 className='main-welcome' >Welcome to Asteroid World</h2>
            <input data-testid='input-value' className='main-input' placeholder='Enter Asteroid ID' type="number" id="id-input" value={id} onChange={handleChange} />
            <Link to='/RandomAsteroid' > 
             <button data-testid='search-random' className='main-random' onClick={handleRandom} >Random Asteriod</button>
            </Link>
             
                <button disabled={!id   }  className='main-submit' onClick={handleClick} >Submit</button>
             
            {flag && (
              
              <div>
                <h3>ID : {finalID}</h3>
                <h3>Name : {asteridName}</h3>
                <h3> nasa_jpl_url: {nasa_jpl_url} </h3>
                <h3>is_potentially_hazardous_asteroid :  </h3>
                {
                  IPH ? <h3>true</h3>: <h3>false</h3>
                } 
              </div>
            )} 
  
          </div>
         </div>
        
      </div>
    );
}

export default Home
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './Home.css'
const AsteroidData = () => {
  const location = useLocation();
  
  const  iph_val   = location.state.IPH ;
  const nasaUrl=location.state.nasa_jpl_url
  const Aname =location.state.asteridName
  const  data =location.state.data
  
  return (
    <div className="center " >
      <div>
        <div className="asteroid"></div>
        <div className="asteroid2"></div>
        <h2 className='asteroidd' role='asteroid-name' >Your Asteroid Data  🌠</h2>
        <h3>1. Name: <h3 className="line2" >{Aname}</h3> </h3>
        <h3>2. nasa_jpl_url: <h3 className="line2" > {nasaUrl} </h3>  </h3>

        <h3>3. is_potentially_hazardous_asteroid : <h3 className="line2" >  {iph_val ? <h3>true</h3> : <h3>false</h3>} </h3> </h3>
       
      </div>
    </div>
  );
};

export default AsteroidData;

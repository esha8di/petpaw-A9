import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

const Servicedetails = () => {
    const {id}=useParams();
    const [services,setServices]=useState([])
            useEffect(()=>{
                fetch('/services.json')
                .then(res =>res.json())
                .then(data=>setServices(data))
                .catch(error =>console.log(error))
        
            },[])

           const findmatchid=services.find(service=>service.serviceId == id);
           
    return (
        
           <div className="card bg-base-100 w-96 shadow-sm my-9 mx-auto">
  <figure>
    <img
      src={findmatchid?.image}
      alt="Cards" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{findmatchid?.serviceName}</h2>
    <p>{findmatchid?.description}</p>
    <div className="card-actions justify-end">
      <Link to='/services'>
      <button className="btn bg-green-900 text-white">Back</button>
      </Link>
      
    </div>
  </div>
</div>
       
    );
};

export default Servicedetails;
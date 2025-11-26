import React from 'react';
import  { useEffect, useState } from 'react';
import Servicecard from '../../components/Servicecard/Servicecard';

const Services = () => {

     const [services,setServices]=useState([])
        useEffect(()=>{
            fetch('/services.json')
            .then(res =>res.json())
            .then(data=>setServices(data))
            .catch(error =>console.log(error))
    
        },[])
    
    return (
        
        <div className='w-[90%] mx-auto my-6 '>
            <title>Services</title>
            <div>
                <h2 className='text-3xl font-bold text-center text-green-900'>Popular Winter Care Service</h2>
                
            </div>
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-2 mt-10">
                {
                    services.map(service =>
                        <Servicecard key={service.serviceId} service={service}></Servicecard>
                    )
                }

            </div>
            
        </div>
    );
};

export default Services;
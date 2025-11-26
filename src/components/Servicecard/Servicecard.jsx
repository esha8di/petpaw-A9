import React from 'react';
import { Link } from 'react-router';

const Servicecard = ({service}) => {
    return (
       
            <div className="card bg-base-100 w-full shadow-sm">
  <figure>
    <img
      src={service?.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{service?.serviceName}</h2>
   <div className='flex justify-between  items-center'>
    <p>Price :{service?.price}</p>
    <p>Rating :{service?.rating}</p>
   </div>
    <div className="card-actions justify-end">
     <Link to={`/servicedetails/${service.serviceId}`}>
     <button 
      className="btn bg-green-900 text-white">
        View Details</button>
     </Link>
      
    </div>
  </div>
</div>
       
    );
};

export default Servicecard;
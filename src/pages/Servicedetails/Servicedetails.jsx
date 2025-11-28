import React, {  useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { Contextapi } from '../../Authprovider/Authprovider';



const Servicedetails = () => {
    const {id}=useParams();
    
    const [book,setBook]=useState(false);

    const [services,setServices]=useState([])
            useEffect(()=>{
                fetch('/services.json')
                .then(res =>res.json())
                .then(data=>setServices(data))
                .catch(error =>console.log(error))
        
            },[])

           const findmatchid=services.find(service=>service.serviceId == id);

           const handlebook=(e)=>{
           e.preventDefault();
           alert('Form Submitted');

           e.target.reset();

           }
           
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
    <div className="card-actions justify-between items-center">
       <button
            onClick={() => setBook(!book)}
            className="mt-4 px-5 py-2 bg-green-800 text-white rounded hover:bg-green-900 transition"
          >
            {book ? "Close" : "Book Now"}
          </button>
      <Link to='/services'>
      <button className="btn bg-green-900 text-white">Back</button>
      </Link>

       {book && (
        <div className="px-6 pb-6">
          <form onSubmit={handlebook} className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700">Name</label>
              <input
                name="name"
                type="text"
                
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Email</label>
              <input
                name="photourl"
                type="email"
               
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <button className="w-full py-2 bg-green-800 text-white rounded hover:bg-green-900 transition">
             Submit
            </button>
          </form>
        </div>
      )}
      
    </div>
  </div>
</div>
       
    );
};

export default Servicedetails;
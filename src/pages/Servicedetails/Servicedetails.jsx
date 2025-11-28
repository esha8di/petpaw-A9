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
  <div className="w-[90%] md:w-[60%] mx-auto my-10 bg-white shadow-md rounded-lg overflow-hidden ">

   
    <figure>
      <img
        className="w-full h-90 object-cover"
        src={findmatchid?.image}
        alt="service"
      />
    </figure>

   
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold text-green-900">
        {findmatchid?.serviceName}
      </h2>

      <p className="text-gray-700 leading-relaxed">
        {findmatchid?.description}
      </p>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setBook(!book)}
          className="px-5 py-2 bg-green-800 text-white rounded hover:bg-green-900 transition"
        >
          {book ? "Close" : "Book Now"}
        </button>

        <Link to="/services">
          <button className="px-5 py-2 bg-green-900 text-white rounded hover:bg-green-950 transition">
            Back
          </button>
        </Link>
      </div>

      
      {book && (
        <div className="mt-6 border rounded-lg p-5 bg-green-50 ">
          <h3 className="text-lg font-semibold text-green-900 mb-3">
            Booking Information
          </h3>

          <form onSubmit={handlebook} className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700">Name</label>
              <input
                name="name"
                type="text"
                className="w-full border rounded px-3 py-2  bg-white "
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Email</label>
              <input
                name="email"
                type="email"
                className="w-full border rounded px-3 py-2 bg-white"
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
);

};

export default Servicedetails;
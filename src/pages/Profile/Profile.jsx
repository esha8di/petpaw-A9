import React, { useContext, useState } from "react";
import { Contextapi } from "../../Authprovider/Authprovider";
import auth from "../../firebase/firebase.init";
import { updateProfile } from "firebase/auth";

const Profile = () => {
  
  const { user,setUser} = useContext(Contextapi);
  const [update, setUpdate] = useState(false);

  const handleupdate = (e) => {
    e.preventDefault();


   

    const name=e.target.name.value;
    const url=e.target.photourl.value;

    console.log(name,url)
     updateProfile(auth.currentUser,{
        displayName:name,
        photoURL: url,

        
      })
      .then(()=>{
        console.log("hello",auth.currentUser);
        setUser({
          ...auth.currentUser,
          displayName:name,
        photoURL: url
        })

      })
      .catch(error=>{
        console.log(error)
      })
  };

  return (
    <div className="md:w-[80%]  bg-white rounded shadow-2xl mx-auto p-2">
      <title>My Profile</title>
      <div className="left bg-green-100  p-5 flex flex-col justify-center items-center">
       <p className="text-black text-2xl font-bold my-3 text-center">Update Your Profile</p>
        <div className="avatar gap-3 ">
            <div className="w-50 rounded-xl">
              <img src={user?.photoURL} />
            </div>
            <div className="text-gray-500" >
              <p>Name : {user?.displayName}</p>
            <p>Email : {user?.email}</p>
             <button
            onClick={()=>setUpdate(!update)}
            className="btn btn-neutral mt-4"
          >
            Update Profile
          </button>
            </div>
            
          </div>
           

      </div>
      <div className="right flex flex-col justify-center items-center p-4 bg-green-100 ">
        {update && (
            <form onSubmit={handleupdate}>
              <fieldset className=" fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <label className="label">Name</label>
                <input defaultValue={user?.displayName}
                  name="name"
                  type="text"
                  className="input"
                  placeholder="User Name"
                />

                <label className="label">Photo URL</label>
                <input defaultValue={user?.photoURL}
                  name="photourl"
                  type="text"
                  className="input"
                  placeholder="Photo URL"
                />
                <button className="btn bg-green-900 text-white">Update</button>
              </fieldset>
            </form>
          )}

      </div>

      
    </div>
  );
};

export default Profile;

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
    <div className="w-[80%] bg-white rounded shadow-2xl mx-auto p-2">
      <div className="up text-3xl ">
        <p>My Profile</p>
      </div>
      <div className="down w-[80%] mx-auto flex gap-2 p-10">
        <div className="left">
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <img src={user?.photoURL} />
            </div>
          </div>
        </div>
        <div className="right">
          <div>
            <p>User Name</p>
            <hr></hr>
            <p>{user?.displayName}</p>
            <p>Email</p>
            <hr></hr>
            <p>{user?.email}</p>
            <p>Photo</p>
            <hr></hr>
            <p>{user?.photoURL}</p>
          </div>
          <button
            onClick={()=>setUpdate(!update)}
            className="btn btn-neutral mt-4"
          >
            Update Profile
          </button>
          {update && (
            <form onSubmit={handleupdate}>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
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
                <button className="btn">Update</button>
              </fieldset>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

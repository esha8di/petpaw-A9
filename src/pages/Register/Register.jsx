import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import  { Contextapi } from "../../Authprovider/Authprovider";
import { updateProfile, } from "firebase/auth";
import auth from "../../firebase/firebase.init";

const Register = () => {
  const { registerwithemailpass } = useContext(Contextapi);
  const navigate=useNavigate()

  const handlesubmit=(e)=>{
    e.preventDefault()

    const email=e.target.email.value;
    const password=e.target.password.value;
    const name=e.target.name.value;
    const photurl=e.target.url.value;

    console.log(email,password)

    registerwithemailpass(email, password)
    .then(result=>{
      navigate('/login')

      
      updateProfile(auth.currentUser,{
        displayName:name,
        photoURL: photurl,

        
      })
      .then(()=>{
        console.log(result.user);

      })
      .catch(error=>{
        console.log(error)
      })

    })
    .catch(error=>{
      console.log(error);
    })
    
  }
  

  return (
    <div className="flex flex-col justify-center items-center my-32">
      <form onSubmit={handlesubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

          <label className="label">Email</label>
          <input name='email'  type="email" className="input" placeholder="Email" />
          <label className="label">User Name</label>
          <input name='name' type="text" className="input" placeholder="Your User Name" />
          <label className="label">Photo URL</label>
          <input name='url' type="text" className="input" placeholder="Photo url" />

          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />

          <button  className="btn btn-neutral mt-4">Register</button>
          <p>
            Have an Account?{" "}
            <Link className="text-green-900" to="/login">
              Login
            </Link>
          </p>

         
        </fieldset>
      </form>
    </div>
  );
};

export default Register;

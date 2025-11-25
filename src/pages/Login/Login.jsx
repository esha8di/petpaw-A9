import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import  { Contextapi } from "../../Authprovider/Authprovider";

const Login = () => {
const {signinwithemailpass,user,signinwithgoogle,setUser}=useContext(Contextapi)

const navigate=useNavigate();

   const handlesubmit=(e)=>{
    e.preventDefault()

    const email=e.target.email.value;
    const password=e.target.password.value;
    

    console.log(email,password)
    console.log(user)

    signinwithemailpass(email,password)
    .then(result=>{

      console.log(result.user);
      setUser(result.user)
      navigate('/')
    })
    .catch(error=>{
      console.log(error);
    })
    
    

   
    
  }

  const handlegooglesignin=()=>{
    signinwithgoogle()
    .then((result)=>{
      const user=result.user;
      setUser(user);
      

    })
    .catch(()=>{

    })
  }


  return (
    <div className="flex flex-col justify-center items-center my-32">
        <form onSubmit={handlesubmit}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        

        <label className="label">Email</label>
        <input name='email' type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input name='password' type="password" className="input" placeholder="Password" />

        <button  className="btn btn-neutral mt-4">Login</button>
        <button onClick={handlegooglesignin} className="btn">Sign in with google</button>
         <p>Don't have an Account? <Link className='text-green-900' to='/register'>Register</Link></p>
      </fieldset>
    </form>

    </div>
    
  );
};

export default Login;

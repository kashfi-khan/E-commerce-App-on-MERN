import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    
useEffect(()=>{
    const auth = localStorage.getItem("user")
    if(auth){
        navigate('/')
    }
},[])

    const collectData = async () => {
        console.warn("email,password",email,password)
        let result = await fetch("http://localhost:5000/login",{
            method : "post",
            body : JSON.stringify({email,password}),
            headers : {
                "Content-Type" : "application/json"
            }
        });
        result = await result.json();
        console.warn(result); 
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result));
            navigate("/")

        }   
        else{
            alert("please enter the valid email or password")
        }       
   
    }
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow-2xl space-y-4">
      <h1 className="text-2xl font-bold text-center">Login</h1>

      

      {/* Email Input */}
      <div className="flex items-center border rounded px-3 py-2">
        <i className="fas fa-envelope text-gray-400 mr-2"></i>
        <input
          type="email"
          placeholder="Email Address"
          className="w-full outline-none"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      {/* Password Input */}
      <div className="flex items-center border rounded px-3 py-2">
        <i className="fas fa-lock text-gray-400 mr-2"></i>
        <input
          type="password"
          placeholder="Password"
          className="w-full outline-none"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-4">
        <button
          type="submit"
          onClick={collectData}
          className="w-32 bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default Login
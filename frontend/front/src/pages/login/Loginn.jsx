import React,{useState} from "react";
import './login.css'
import { useLocation, useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";

import { userUserServices } from "../../services/userServices";

 export const Login = () =>{
    const[email, setEmail] = useState("");
    const[password, setPassword]= useState("")
    const[showPass,setShowpass]=useState(false);
    const[errMessage,setErrMessage] =useState(false);

    const navigate =useNavigate();

    const location = useLocation()

    const {loginUser}=userUserServices()

    const hamdleRedirection = ()=>{
        if(location.pathname == "/login"){
        navigate("/register")
    }else{
        navigate("/login")
    }

    }

    const handleSubmit =async(e) =>{
        e.preventDefault()
        try{
            let response
            const data ={
                email:email,
                password:password

            }
            response = await loginUser(data);
            if (response.success){
                localStorage.setItem("login",true)
                navigate('/')
            } else {
                setErrMessage(response.data.message)
            } 
        }catch(err){ 
            setErrMessage(err?.response?.data?.message)

        }
    }


    return(

        <div className="bg-img">
                        <div className="center-align">
                            <div className="card-cust">
                                <div className="text-field">
                                    
                                    <input type="text"placeholder="Email" className="with-100 border-0" onChange={(e)=>setEmail(e.target.value)}/>
                                </div>  
                                <div className="text-field ">
                        
                                    <input type={showPass?"text":"password"} placeholder="Password" className="with-100 border-0" onChange={(e)=>setEmail(e.target.value)}/>
                                    {showPass ?
                                        <IoEyeOff onClick={() => setShowpass(!showPass)} />:
                                        <IoEye onClick={() => setShowpass(!showPass)}  />
                                    }
                                </div> 
                                <div className='btn border-0' onClick={()=>navigate('/forgot-pass')}>Forgot 
                    password</div>
                    </div>
                        </div>
                    
        </div>
        
    );
}

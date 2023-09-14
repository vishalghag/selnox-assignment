import { useEffect, useState } from "react"
import {  useNavigate } from "react-router-dom"
import routes from "../routes/routes.json"

const Error = () =>{

    const [timeOut,setTimeOut] = useState(null)
    const [timer,setTimer] = useState(5)

    //useNavigate hook is used to navigate through link anywhere internally in React-Route
    const navigate = useNavigate();

    //These function is used to countdown 
    useEffect(()=>{
        setTimeout(() => {
            setTimer(timer-1)
        }, 1000);
    },[timer])

    
    useEffect(()=>{
     const tRef = setTimeout(()=>{
            navigate(routes.Home)
        },5000)
        setTimeOut(tRef);
    },[navigate])

    useEffect(()=>{
        return  () =>{
            console.log('componentDidUnmount');
            if(timeOut){
                // navigate(routes.Home)
                clearTimeout(timeOut)
            }
        }
    },[timeOut])

    return(
        <>
        <h2>Page Not Found 404</h2>
        <p>You will Autodirected in {timer} sec</p>
        </>
        
    )
}

export default Error
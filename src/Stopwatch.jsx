import { useEffect, useRef, useState } from "react"

export default function Stopwatch(){
    const[sec,setSec]=useState(0);

    const Id=useRef(null);

    
  

    const[on,setOn]=useState(false);
    const Stopwatch=(e)=>{
        e.preventDefault();
        setOn((prev)=>!prev);
    }

    useEffect(()=>{
        if(on){
            Id.current=setInterval(() => {
            setSec((prevSec)=>prevSec+1)
        }, 1000);
        }else{
            clearInterval(Id.current);
        }

    
        return ()=>clearInterval(Id.current);

    },[on]);

    const getTime=()=>{
        const min=Math.floor(sec/60);
        const seconds=sec%60;
            return (`Time: ${min}:${seconds<10?"0":""}${seconds}`)
    }
        
    


    const reset=()=>{
        clearInterval(Id.current);
        setOn(false);
        setSec(0);
    }
    return(
        <div>
            <h1>Stopwatch</h1>
            {getTime()} 
            <div>
                <button onClick={Stopwatch}>{!on?("Start"):("Stop")}</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

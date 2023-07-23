"use client";
import { createContext,useCallback,useState  } from "react";
const MyContext = createContext();

const MyProvider = ({children}) =>{
    const [count, setCount] = useState(0);
    const IncreaseHandler = useCallback(()=>{
        setCount(count+1);
    },[count]);
    const decreaseHandler = useCallback(()=>{
        (count===0)?
        setCount(0):
        setCount(count-1)
    },[count]);
    return(
        <MyContext.Provider value={{count,setCount,decreaseHandler,IncreaseHandler}}>
            {children}
        </MyContext.Provider>
    );

}

export {MyContext,MyProvider}
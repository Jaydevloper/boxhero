import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export function Setcontext ({children}){
    let token = localStorage.getItem("token")
    const [data,setData] = useState({Data:[],loading:false,error:null})
    const [search,setSearch] = useState(null)
    const url = `https://boxhero.onrender.com/${token}`
    useEffect(() =>{
        async function fn (){
            setData({loading:true})
            let res = await fetch(url)
            let data = await res.json()
            if (!res.ok){
            setData({error:true})
            throw new Error(res.status)
        }
            setData({Data:data,loading:false,error:false})
        }
        fn()
    },[url])
    return <Context.Provider value={{token,data,search,setSearch}}>{children}</Context.Provider>
}
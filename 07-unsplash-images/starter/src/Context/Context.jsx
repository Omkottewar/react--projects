import { createContext,useContext,useState,useEffect, Children } from "react";

const AppContext = createContext(

)

export const AppProvider =({children})=>{
    const [isDarkTheme,setIsDarkTheme] = useState(false)
    const [searchTerm,setSearchTerm] = useState("cat")
    

    const toggleDarkTheme = ()=>{
        const newDarkTheme = !isDarkTheme
        setIsDarkTheme(newDarkTheme); 
        localStorage.setItem('darktheme',newDarkTheme)
    }
    useEffect(()=>{
        const body = document.querySelector(".body");
        body.classList.toggle("dark-theme",newDarkTheme);
    },[isDarkTheme])
    return(
        <AppContext.Provider value={{isDarkTheme,toggleDarkTheme,searchTerm,setSearchTerm}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext =()=> useContext(AppContext)
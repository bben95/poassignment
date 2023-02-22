import { createContext,useContext,useState ,useEffect} from "react";
import axios from "axios";

const DataContext=createContext();

export const DataContextProvider=({children})=>{
    const [data,setData]=useState([]);
    const [individual,setIndividual]=useState({});
    const [chatperson,setChatperson]=useState({});
    const [chatopen,setChatopen]=useState(false);
     useEffect(()=>{
        axios.get("https://panorbit.in/api/users.json").then((response=>{
            setData(response.data.users)
        }))
    },[])
     

    return(
        <DataContext.Provider value={{data,individual,setIndividual,chatperson,setChatperson,chatopen,setChatopen}}>{children}</DataContext.Provider>
    )
}

export const useDataContext=()=>{
    return useContext(DataContext);
}
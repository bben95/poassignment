// Context component to pass data

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    // setting the fetched data
  const [data, setData] = useState([]);
//   setting individual data object for profile section
  const [individual, setIndividual] = useState({});
//   setting perticular shat member for chat box
  const [chatperson, setChatperson] = useState({});
//   setting chatbox hide and unhide
  const [chatopen, setChatopen] = useState(false);
//   setting chatbox open and close 
  const [isOpen, setIsopen] = useState(false);
//   to fetch data using axios
  useEffect(() => {
    axios.get("https://panorbit.in/api/users.json").then((response) => {
      setData(response.data.users);
    });
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        individual,
        setIndividual,
        chatperson,
        setChatperson,
        chatopen,
        setChatopen,
        isOpen,
        setIsopen,
      }}>
      {children}
    </DataContext.Provider>
  );
};
// custom hook for using use context
export const useDataContext = () => {
  return useContext(DataContext);
};

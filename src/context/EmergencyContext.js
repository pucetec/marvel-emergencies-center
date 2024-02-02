import { createContext, useContext, useEffect, useState } from "react";
import env from "react-dotenv";
import md5 from "md5";
import axios from "axios";

const EmergencyContext = createContext();

const EmergencyContextProvider = ({ children }) => {
  const [emergency, setEmergency] = useState("");
  const handleNewEmergency = (e) => {
    setEmergency(e.target.value);
  };
  const [emergencyList, setEmergencyList] = useState([""]);
  const handleEmergencyAdded = () => {
    const tempEmergencyList = { emergency: emergency };
    if (emergency === "") alert("No haz escrito nada");
    else
      setEmergencyList((prevEmergency) => {
        return [...prevEmergency, tempEmergencyList];
      });
    setEmergency("");
  };

  const [heroes, setHeroes] = useState([]);
  const Gateway = "https://gateway.marvel.com:443/v1/public/characters?apikey=";
  useEffect(() => {
    const bringMarvelInfo = async () => {
      const currentTimeStamp = Date.now().toString();
      const joinedKey = currentTimeStamp + env.PRIVATE_KEY + env.PUBLIC_KEY;
      const md5Key = md5(joinedKey);

      const response = await axios.get(
        Gateway + env.PUBLIC_KEY + "&ts=" + currentTimeStamp + "&hash=" + md5Key
      );
      console.log({ response });
      setHeroes(response.data);
    };
    if (heroes.length === 0) {
      bringMarvelInfo();
    }
  }, [heroes]);
  const [open, setOpen] = useState(false);
  return (
    <EmergencyContext.Provider
      value={{
        emergency,
        emergencyList,
        handleNewEmergency,
        handleEmergencyAdded,
        heroes,
        open,
        setOpen,
      }}
    >
      {children}
    </EmergencyContext.Provider>
  );
};

export default EmergencyContextProvider;

export const useEmergencyContext = () => useContext(EmergencyContext);

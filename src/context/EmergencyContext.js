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
  const [emergencyList, setEmergencyList] = useState([]);
  const handleEmergencyAdded = () => {
    const tempEmergencyList = { emergency: emergency };
    if (emergency === "") alert("No haz escrito nada");
    else
      setEmergencyList((prevEmergency) => {
        return [...prevEmergency, tempEmergencyList];
      });
    setEmergency("");
  };
  var o = {};
  console.log("-----------------------------  ");
  console.log(o.PUBLIC_KEY);
  const [heroes, setHeroes] = useState([]);
  const GATEWAY = "https://gateway.marvel.com:443/v1/public/characters?apikey=";
  useEffect(() => {
    const bringMarvelInfo = async () => {
      const currentTimestamp = Date.now().toString();
      const joinedKey = currentTimestamp + env.PRIVATE_KEY + env.PUBLIC_KEY;
      const md5Key = md5(joinedKey);
      const response = await axios.get(
        GATEWAY + env.PUBLIC_KEY + "&ts=" + currentTimestamp + "&hash=" + md5Key
      );
      console.log({ response });
      setHeroes(response.data);
    };
    if (heroes.length === 0) {
      bringMarvelInfo();
    }
  }, [heroes]);
  const [open, setOpen] = useState(false);
  const removeEmergency = (i) => {
    setEmergencyList(emergencyList.filter((item) => i !== item.i));
  };
  return (
    <EmergencyContext.Provider
      value={{
        emergency,
        emergencyList,
        handleNewEmergency,
        handleEmergencyAdded,
        removeEmergency,
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

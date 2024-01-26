import { createContext, useContext, useState } from "react";
import env from "react-dotenv";
import md5 from "md5";
import axios from "axios";

const EmergencyContext = createContext();
const Gateway = "https://gateway.marvel.com:443/v1/public/characters?apikey=";
const bringMarvelInfo = async () => {
  const currentTimeStamp = Date.now().toString();
  const joinedKey = currentTimeStamp + env.PRIVATE_KEY + env.PUBLIC_KEY;
  const md5Key = md5(joinedKey);
};

const resonse = await axios.get(
  Gateway + env.PUBLIC_KEY + "&ts=" + currentTimeStamp + "&hash=" + md5Key
);

const EmergencyContextProvider = ({ children }) => {
  return <EmergencyContext.Provider>{children}</EmergencyContext.Provider>;
};

export default EmergencyContext;

export const useEmergencyContext = () => useContext(EmergencyContext);

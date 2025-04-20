
import axios from "axios";
import {React,useContext,useState,createContext} from "react";
export const BioContext = createContext();

export const BioProvider=({children})=> {
    const name="Arvind";
   return (
      <BioContext.Provider value={name}>
      {children}
      </BioContext.Provider>
   )
  }
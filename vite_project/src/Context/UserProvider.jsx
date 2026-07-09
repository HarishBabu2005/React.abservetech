import GrandChild from "../Components/Context-demo/grandChild";
import UserContext from "./UserContext";
import React from 'react'

const UserProvider = ({children}) => {
  return (
   
     <UserContext.Provider value="harish">
        {children}
     </UserContext.Provider>
    
   
  )
}

export default UserProvider
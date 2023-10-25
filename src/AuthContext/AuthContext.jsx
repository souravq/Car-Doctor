import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
const auth = getAuth(app);


export const AuthContext1 = createContext();

export default function AuthContext({children}) {

  // User UserName

  const [username, setUsername] = useState("");

    // Registration Function
    function Registration(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // Login Function
    function Login(email,password){
      return signInWithEmailAndPassword(auth,email,password);
    }

    // User Status
    function getUserStatus(){
      onAuthStateChanged(auth,(user)=>{
        if(user){
          console.log("User Sign In")
          console.log(user);
          setUsername(user?.email);
        }else{
          console.log("User is signed out")
        }
      })

    }

    getUserStatus();



    // Const DataObj
    const dataObj = {
      Registration,
      Login,
      name:"Sourav",
      username
    }

  return (
    <AuthContext1.Provider value={dataObj}>
        {children}
    </AuthContext1.Provider>
  )
}

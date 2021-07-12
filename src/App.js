import React,{useEffect} from 'react'
import './App.css';
import {auth} from "./utils/firebase.utils";
import {Context} from './';
import LandingPage from './Components/LandingPage'
function App() {
  
  const [value,setValue] = React.useState({isLoading:true,isSignedIn:false});

  useEffect(() => {
    auth.onAuthStateChanged(user =>{
      if(user){
        setValue({
          ...value,
          isSignedIn:true,
          loginName:user.displayName,
          loginEmail:user.email
        })
      }else{
        setValue({
          ...value,
          isLoading:false,
          isSignedIn:false
        })
      }
     
    })
  }, [])

  return (
   
      <div className="App">
       <Context.Provider value={{value,dispatch:setValue}}>
          <LandingPage/>
       </Context.Provider>
      
      </div>
    
  );
}

export default App;

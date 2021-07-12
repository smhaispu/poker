import React,{useContext} from 'react';
import { Context } from '..';
import SignInPage from './SignInPage'
import WelcomePage from './WelcomePage'
import Loader from './Loader'
import {firestore} from '../utils/firebase.utils';

const LandingPage = () =>{
    const {value,dispatch} = useContext(Context);
    const usersRef = firestore.collection('users');
    const getUsers = () =>{
        usersRef.onSnapshot((query)=>{
            const userData = {};
            let currentUser = '';
            query.forEach(user=>{
                userData[user.id] = user.data();
                if(user.id ==  value?.loginEmail){
                    currentUser = user.id; 
                }
            })
            dispatch({
                ...value,
                userData:{...userData},
                currentUser,
                isLoading:false
            })
        })
    }

    React.useEffect(() =>{
        if(value?.isSignedIn){
            getUsers();
        }
    },[value?.isSignedIn]);

    return ( 
         value.isLoading  ? 
            <Loader/> 
                :
            (value && value.isSignedIn ? <WelcomePage value={value}/>:<SignInPage/>)
         )
}


export default LandingPage;
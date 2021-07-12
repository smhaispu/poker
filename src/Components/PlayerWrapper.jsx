import React, { useContext } from 'react';
import {StyledPlayerWrapper,Button} from './LandingPage.style'
import {Context} from '../index';
import {firestore} from '../utils/firebase.utils';
import {randomCardGenerator} from '../Poker'
import CardsList from './CardsList'


const PlayerWrapper = ({}) =>{
    const { value} = useContext(Context);
    const currentplayer = value.currentUser;
    const currentPlayerCards = value?.userData?.[currentplayer]?.cards;
    const usersRef = firestore.collection('users');

    const handleGenerateCards = () =>{
        const cards = randomCardGenerator();
        usersRef.doc(value.loginEmail).set({
            cards
        })
    }

    return (<>
                <Button onClick={handleGenerateCards}>Generate Cards</Button>
                 <CardsList cards={currentPlayerCards}/>
                
             </>)
}

export default PlayerWrapper;
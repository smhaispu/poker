import PlayerWrapper from './PlayerWrapper'
import {Button} from './LandingPage.style';
import {PokerHand} from '../Poker';
const pairRank = ['StraightFlush', 'FourOfKind', 'FullHouse', 'Flush', 'Straight', 'ThreeOfKind', 'TwoPair', 'OnePair', 'HighCard' ]
const WelcomePage = ({value}) =>{
    var Result = { "win": 1, "loss": 2, "tie": 3 }
    const handleCheckWinner = () =>{
        const emailKeys = Object.keys(value.userData);
        if(emailKeys.length > 1){
            const player1 = new PokerHand(value.userData[emailKeys[0]].cards); 
            const player2 = new PokerHand(value.userData[emailKeys[1]].cards); 
            const player1CardsRule = pairRank[player1.rank - 1]
            const player2CardsRule = pairRank[player2.rank - 1]
            const results = player1.compareWith(player2);
            if(results == 3){
                alert('Its a Tie!!!')
            }else if(results == 2){
                alert(emailKeys[0] + ' is winner because he had ' + player1CardsRule + ' compared to ' + player2CardsRule + ' of ' + emailKeys[1]);
            }else{
                alert(emailKeys[1] + ' is winner because he had ' + player2CardsRule + ' compared to ' + player1CardsRule + ' of ' + emailKeys[0]);
            }
        }else{
            alert('Cannot compare as only one player is logged In');
        }
       
       
    }

    return (<div>
   
    <div>
    <h1>Welcome {value.loginName}!</h1>
    <Button onClick={handleCheckWinner}>Check Winner</Button>
        <PlayerWrapper></PlayerWrapper>
       
    </div>
    </div>);
}


export default WelcomePage;

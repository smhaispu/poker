import DeckCard from './Card'
import {StyledCardList} from './LandingPage.style'
const CardsList = ({cards}) =>{
    return <StyledCardList>{cards.trim().split(' ').map(card => <DeckCard rank={card[0]} suit={card[1]}/>)}</StyledCardList>

}


export default CardsList;
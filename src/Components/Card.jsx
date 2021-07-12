import heart from '../utils/heart_suit.svg';
import spade from '../utils/spade_suit.svg';
import diamond from '../utils/Diamond_suit.svg';
import club from '../utils/Club_suit.svg';
import {Image,StyledCard,Cardheader,CardBody,CardFooter} from './LandingPage.style'


const DeckCard = ({suit,rank}) =>{
    const suitMapper = {"S":spade,"H":heart,"D":diamond,"C":club};

    const imgSource = suitMapper[suit];
    return <StyledCard>
        <Cardheader> 
            <div>{rank}</div>
            <Image src={imgSource}/>
        </Cardheader>
        <CardBody> 
            <Image src={imgSource}/>
        </CardBody>
        <CardFooter> 
            <div>{rank}</div>
            <Image src={imgSource}/>
        </CardFooter>
    </StyledCard>

}

export default DeckCard;
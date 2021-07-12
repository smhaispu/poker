var Result = { "win": 1, "loss": 2, "tie": 3 }
const pairRank = { 'StraightFlush': 1, 'FourOfKind': 2, 'FullHouse': 3, 'Flush': 4, 'Straight': 5, 'ThreeOfKind': 6, 'TwoPair': 7, 'OnePair': 8, 'HighCard': 9 }


//helper function
const comparisionOperator = (value1, value2) => {
    if (value1 > value2) {
        return Result.win;
    } else if (value1 < value2) {
        return Result.loss;
    } else {
        return Result.tie;
    }
}

export const randomCardGenerator = () =>{
    const suits = ["S","D","H","C"];
    const ranks = [2,3,4,5,6,7,8,9,"T","J","Q","K","A"];
    let counter = 5;
    let cards = "";
    
    while (counter>0){
        const suit = suits[Math.floor(Math.random() * 4)];
        const rank = ranks[Math.floor(Math.random() * 13)];
        cards +=  rank + suit + " ";
        counter--;
    }
   

    return cards;
      
}


//create mapper

const createValueMapper = (arr) => {
    return arr.reduce((a, c) => {
        a[c] ? a[c]++ : a[c] = 1;
        return a;
    }, {})
}

// Straight Flush


//*******check for straight and check for flush

const checkIfStraightFlush = (suit, arr) => {
    const isFlush = checkIfFlush(suit);
    const isStraight = checkIfStraight(arr);
    return isFlush && isStraight;
}


// Four-of-a-Kind


const checkFourOfKind = (mapper) => {
    return Object.values(mapper).includes(4);
}



// Full House


const checkFullHouse = (mapper) => {
    const threeCards = Object.values(mapper).includes(3);
    const twoCards = Object.values(mapper).includes(2);
    return threeCards && twoCards;
}


// Flush



const checkIfFlush = (suit) => {
    return suit.size  === 1;
}


// Straight



const checkIfStraight = (arr) => {
    return arr.every((num, i) => (arr[i + 1] || num + 1) - num === 1)
}


// Three-of-a-Kind



const checkThreeOfKind = (mapper) => {
    return Object.values(mapper).includes(3);
}

// Two Pair



const twoPair = (mapper) => {
    const pairs = Object.values(mapper).filter(val => val === 2);
    return pairs.length == 2;
}


// One Pair



const onePair = (mapper) => {
    const pairs = Object.values(mapper).filter(val => val === 2);
    return pairs.length == 1;
}

// High Card


const calculateHighCard = (arr1, arr2) => {
    for (let i = arr1.length - 1; i > 0;) {
        if (arr1[i] > arr2[i]) {
            return 1;
        } else if (arr1[i] < arr2[i]) {
            return 2;
        } else {
            i--;
        }
    }
    return 3;
}

//Calculate rank

const calculateCardRank = (suitMap, faceValues, valueMapper) => {

    if (checkIfStraightFlush(suitMap, faceValues)) {
        return pairRank['StraightFlush'];
    } else if (checkFourOfKind(valueMapper)) {
        return pairRank['FourOfKind'];
    } else if (checkFullHouse(valueMapper)) {
        return pairRank['FullHouse'];
    } else if (checkIfFlush(suitMap)) {
        return pairRank['Flush'];
    } else if (checkIfStraight(faceValues)) {
        return pairRank['Straight'];
    } else if (checkThreeOfKind(valueMapper)) {
        return pairRank['ThreeOfKind'];
    } else if (twoPair(valueMapper)) {
        return pairRank['TwoPair'];
    } else if (onePair(valueMapper)) {
        return pairRank['OnePair'];
    } else {
        return pairRank['HighCard'];
    }
}


//calculate suitmap,faceValues and valueMapper 
const createRankData = (hand) => {
    const faceValueMapper = { "T": 10, "J": 11, "Q": 12, "K": 13, "A": 14 };
    const sameFaceValues = new Set();
    const suitMap = new Set();
    let faceValues = [];
    let highestFaceValue = 0;

    hand.trim().split(' ').forEach(c => {
            const value = faceValueMapper[c[0]] ? faceValueMapper[c[0]] : Number(c[0]);
            if (value > highestFaceValue) {
                highestFaceValue = value;
            }
            faceValues.push(value);
            sameFaceValues.add(value);
            suitMap.add(c[1]);
    });
    faceValues = faceValues.sort((a, b) => a - b);
    const valueMapper = createValueMapper(faceValues);
    return {
        sameFaceValues,
        suitMap,
        faceValues,
        valueMapper,
        highestFaceValue
    }
}

//Random card generator



export function PokerHand(hand) {
    this.hand = hand;
    // const validFaceValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const {
        sameFaceValues,
        suitMap,
        faceValues,
        valueMapper,
        highestFaceValue
    } = createRankData(hand);
    this.highestFaceValue = highestFaceValue;
    this.faceValues = faceValues;
    this.valueMapper = valueMapper;
    this.rank = calculateCardRank(suitMap, faceValues, valueMapper);

}

PokerHand.prototype.compareWith = function (hand) {

    const value = comparisionOperator(this.rank, hand.rank);
    if (value == 3) {
        switch (this.rank) {
            case 1:
            case 2:
            case 3:
            case 5:
            case 6:
                {
                    return comparisionOperator(this.highestFaceValue, hand.highestFaceValue);
                }

            case 4: {
                return calculateHighCard(this.faceValues, hand.faceValues)
            }
            case 7: {

                let player1Highest = 0;
                let player2Highest = 0;
                let player1Lowest = 14;
                let player2Lowest = 14;
                Object.keys(this.valueMapper).forEach(key => {
                    if (this.valueMapper[key] == 2) {
                        if (key > player1Highest) {
                            player1Highest = this.valueMapper[key];
                        }
                        if (key < player1Highest) {
                            player1Lowest = this.valueMapper[key];
                        }

                    }
                })
                Object.keys(this.valueMapper).forEach(key => {
                    if (this.valueMapper[key] == 2) {
                        if (key > player2Highest) {
                            player2Highest = this.valueMapper[key];
                        }
                        if (key < player2Lowest) {
                            player2Lowest = this.valueMapper[key];
                        }

                    }
                })

                const highestSetComparision = comparisionOperator(player1Highest, player2Highest);
                if (highestSetComparision === 3) {
                    const lowestSetComparision = comparisionOperator(player1Lowest, player2Lowest);
                    if (lowestSetComparision == 3) {
                        return calculateHighCard(this.faceValues, hand.faceValues)
                    }
                    return lowestSetComparision;
                }
                return highestSetComparision
            }
            case 8: {
                let player1Highest = 0;
                let player2Highest = 0;
                Object.keys(this.valueMapper).forEach(key => {
                    if (this.valueMapper[key] == 2) {
                        player1Highest = this.valueMapper[key];
                    }
                })
                Object.keys(this.valueMapper).forEach(key => {
                    if (this.valueMapper[key] == 2) {
                        player2Highest = this.valueMapper[key];
                    }
                })

                const highestSetComparision = comparisionOperator(player1Highest, player2Highest);
                if (highestSetComparision === 3) {
                    return calculateHighCard(this.faceValues, hand.faceValues)
                }
                return highestSetComparision
            }

            case 9: {
                return calculateHighCard(this.faceValues, hand.faceValues)
            }
        }
    } else {
        return value;
    }


    return Result.tie;
}


// High Card

// No matching values or suits, and the cards are not all in a sequence.
// To compare two high card hands, compare the highest value on each hand. If that matches, compare the next highest value, and so on.
// If all cards have the same value, it's a tie.

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.name = name; // ex att 13 är kung
        this.vaue = value;
    }

}


class Deck {
    // properties 
    constructor() {
        this.cards = []
    }
   
    // methods
    buildDeck() {

        // Loopa per suit ♥️ ♣️ ♠️ ♦️

            // Loopa per value 2 - 14 // 11 knekt, 12, dam, 13 kung
                const card = new Card("♥️", 2); // första
                this.cards.push(card); // i slutändan 52 st
    }

    shuffle() {

    }

    printDeck() {

    }

    deal(num) {
        // Ta fem övre kort från blandad kortlek
    }
    

}

class Player {
    constructor(name) {
        this.name = name
        this.hand = []
    }

}

// class Dealer {

// }

const player1 = new Player("Slim");
const player2 = new Player("Luke");

// Skapa kortlet, shuffle
// Ta fem kort från högen till slim och 5 till luke

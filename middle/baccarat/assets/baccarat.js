/* 겜블러(플레이어) */
var gambler = {
    money: 0,
    chips: [],
    /* $1000 ~ $10,000 사이의 랜덤한 숫자 */
    getRandomNumber: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    /* 돈을 칩의 개수로 변환 */
    convertMoneyToChips: function() {
        let chipDenominations = [5000, 1000, 500, 100, 50, 10, 5, 1], // 칩의 단위
            money = this.money;

        this.chips = [];

        for (let i = 0; i < chipDenominations.length; i++) {
            let chipValue = chipDenominations[i],
                chipCount = Math.floor(money / chipValue);

            money -= chipCount * chipValue;
            this.chips.push({ value: chipValue, count: chipCount });
        }
    }
};

/* 카지노 */
var casino = {
    /* 덱 설정 */
    numberOfDecks: 6, // 블랙잭의 경우 통상 4~8개의 덱 사용
    cards: []
};

/* 카드 덱 */
var cardDeck = {
    deck: [],
    /* 카드 초기화 */
    initializeDeck: function() {
        let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'],
            values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) {
                this.deck.push(values[j] + ' of ' + suits[i]);
            }
        }
    },
    /* 여러 덱을 합치는 함수 */
    createMultipleDecks: function(numberOfDecks) {
        var multipleDecks = [];
        
        for (let i = 0; i < numberOfDecks; i++) {
            this.initializeDeck();
            multipleDecks = multipleDecks.concat(this.deck);
            this.deck = []; // 다음 반복을 위해 덱 초기화
        }
        
        return multipleDecks;
    }
};

/* 초기 설정 */
var setup = function() {
    /* 겜블러(플레이어)의 머니 초기화 */
    gambler.money = gambler.getRandomNumber(1000, 10000); // 1000 ~ 10000 범위
    gambler.convertMoneyToChips(); // 플레이어의 돈을 칩으로 변환

    /* 카지노의 카드덱 초기화 */
    casino.cards = cardDeck.createMultipleDecks(casino.numberOfDecks);

    console.log("초기 자금:", gambler.money);
    console.log("플레이어의 칩:", gambler.chips);
    console.log("총 카드 수:", casino.cards.length);
    console.log("카드 덱:", casino.cards);
};

setup();

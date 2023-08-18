let moneyBox = () => {
    let saveCoins = 0
    return function (coins = 0, userName){
        saveCoins += coins
        return console.log(userName +' tiene en su MoneyBox: ' +saveCoins)
    };
}

const AlanMoneyBox = moneyBox()
AlanMoneyBox(5, 'Alan')
AlanMoneyBox(5, 'Alan')
AlanMoneyBox(5, 'Alan')

const elisaMoneyBox = moneyBox()
elisaMoneyBox(10, 'Elisa')
elisaMoneyBox(2, 'Elisa')

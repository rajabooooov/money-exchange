// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var coins = [50, 25, 10, 5, 1];
    var coinsName = {
        "H": 0,
        "Q": 0,
        "D": 0,
        "N": 0,
        "P": 0
    };
    var message = {};
    var returns; // колличество повторяющихся монет

    if (currency == 0) {
        return message;
    }
    if (currency >= 10000) {
        message = {
            error: "You are rich, my friend! We don't have so much coins for exchange"
        };
        return message;
    }
    for (var i = 0; i < coins.length; i++) { 
        if (currency >= coins[i]) { 
            returns = Math.floor(currency / coins[i]); 
            currency = currency - (returns * coins[i]);
            for (var key in coinsName) {
                if (coins[i] == 50) {
                    coinsName["H"] = returns;
                } else if (coins[i] == 25) {
                    coinsName["Q"] = returns;
                } else if (coins[i] == 10) {
                    coinsName["D"] = returns;
                } else if (coins[i] == 5) {
                    coinsName["N"] = returns;
                } else if (coins[i] == 1) {
                    coinsName["P"] = returns;
                }
            }
        }
    }
    //удаление лишних номиналов
    for (key in coinsName) {
        if (coinsName[key] == 0) {
            delete coinsName[key];
        }
    }
    return coinsName;
}

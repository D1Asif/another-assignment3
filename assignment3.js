
//Problem 1
function kilometerToMeter(kilo){
    if (kilo < 0){
        return "Invalid input";
    }
    else{
        return kilo * 1000;
    }
}

//problem 2
function budgetCalculator(nGhori, nPhone, nLaptop){
    if (nGhori < 0 || nPhone < 0 || nLaptop < 0){
        return "invalid input";
    }
    else{
        return nGhori*50 + nPhone*100 + nLaptop*500;
    }
}

// Problem 3
function hotelCost(number){
    if (number < 0) {
        return "invalid input";
    }
    else if (number <= 10){
        return number*100;
    }
    else if (number <= 20){
        return 1000 + (number-10)*80;
    }
    else if (number > 20){
        return 1800 + (number-20)*50;
    }
}

//Problem 4
function megaFriend(names){
    var maxLength = 0;
    var megaName = names[0];
    for(var i = 0; i < names.length; i++){
        if (names[i].length > maxLength){
            maxLength = names[i].length;
            megaName = names[i];
        }
    }
    return megaName;

}

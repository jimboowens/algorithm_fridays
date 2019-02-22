

function cents (argument){
    const change={}
    let solved = false
    while (!solved){
        // divide argument by 25, then change the value of quarters to that value and move it to dimes, and so on
        let numQuarters = Math.floor(argument/25);
        change.quarters=numQuarters;
        let quarterRemainder = argument%25;
        if (argument/25===0) solved =true;
        // console.log('got quarters',numQuarters, quarterRemainder, change)

        let numDimes = Math.floor(quarterRemainder/10);
        change.dimes = numDimes;
        let dimeRemainder = quarterRemainder%10;
        if (quarterRemainder/10===0) solved = true;
        // console.log('got dimes',numDimes,dimeRemainder,change)

        let numNickels = Math.floor(dimeRemainder/5);
        change.nickels = numNickels;
        let nickelRemainder = dimeRemainder%5;
        if (dimeRemainder/5===0) solved = true;
        // console.log('got nickels',numNickels,nickelRemainder,change)
        change.pennies = nickelRemainder;
        console.log (change)
        solved = true
    }
}
cents(101)
cents(93)
cents(18)
cents(29)

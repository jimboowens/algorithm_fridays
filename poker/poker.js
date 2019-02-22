// console.log(hands.length)

const values = {
    "1":1,
    "2":2,
    "3":3,
    "4":4,
    "5":5,
    "6":6,
    "7":7,
    "8":8,
    "9":9,
    "T":10,
    "J":11,
    "Q":12,
    "K":13,
    "A":14,
}

const handArr = hands.map((hand)=>{

    player1={
        card1Number:hand.slice(0,1),
        card1Suit:hand.slice(1,2),
        card2Number:hand.slice(3,4),
        card2Suit:hand.slice(4,5),
        card3Number:hand.slice(6,7),
        card3Suit:hand.slice(7,8),
        card4Number:hand.slice(9,10),
        card4Suit:hand.slice(10,11),
        card5Number:hand.slice(12,13),
        card5Suit:hand.slice(13,14),
    }
    
    player2={
        card1Number:hand.slice(15,16),
        card1Suit:hand.slice(16,17),
        card2Number:hand.slice(18,19),
        card2Suit:hand.slice(19,20),
        card3Number:hand.slice(21,22),
        card3Suit:hand.slice(22,23),
        card4Number:hand.slice(24,25),
        card4Suit:hand.slice(25,26),
        card5Number:hand.slice(27,28),
        card5Suit:hand.slice(28,29),
    }
    // changeVal(player1)
    // changeVal(player2)
    // console.log(player1, player2)
})

// function changeVal(object){
//     console.log(Object.keys(object))
//     let iteration = Object.keys(object)
//     console.log (iteration.length)
//     for (i=0;i<iteration.length;i+2){
//         if (!iteration[i].parseInt){
//             switch(iteration[i]){
//                 case "T":object.i=10
//                 case "J":object.i=11
//                 case "Q":object.i=12
//                 case "K":object.i=13
//                 case "A":object.i=14
//             }
//         }
//     iteration.parseInt
//     }
// }
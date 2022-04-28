// REPONSE N° 1--------------------------------------

function arrayOdds([num1, num2, num3, num4, num5, result]) {
    if (num1 % 2 == 0) {
        num1 = 0;
    } else {
        num1 = 1;
    }//----------------
    if (num2 % 2 == 0) {
        num2 = 0;
    } else {
        num2 = 1;
    }
    //-------------------
    if (num3 % 2 == 0) {
        num3 = 0;
    } else {
        num3 = 1;
    }
    //----------------
    if (num4 % 2 == 0) {
        num4 = 0;
    } else {
        num4 = 1;
    }
    //------------------
    if (num5 % 2 == 0) {
        num5 = 0;
    } else {
        num5 = 1;
    }
        result = num1 + num2 + num3 + num4 + num5;
        return console.log(result);
}
console.log(arrayOdds([4, 7, 2, 5, 9])) ; 

//REPONSE N° 2--------------------------------------

// function arrayOdds([num1, num2, num3, num4, num5, num6, result]) {
//     if (num1 % 2 == 0) {
//         num1 = 0;
//     } else {
//         num1 = 1;
//     }//----------------
//     if (num2 % 2 == 0) {
//         num2 = 0;
//     } else {
//         num2 = 1;
//     }
//     //-------------------
//     if (num3 % 2 == 0) {
//         num3 = 0;
//     } else {
//         num3 = 1;
//     }
//     //----------------
//     if (num4 % 2 == 0) {
//         num4 = 0;
//     } else {
//         num4 = 1;
//     }
//     //------------------
//     if (num5 % 2 == 0) {
//         num5 = 0;
//     } else {
//         num5 = 1;
//     }
//     //------------------
//     if (num6 % 2 == 0) {
//         num6 = 0;
//     } else {
//         num6 = 1;
//     }
//         result = num1 + num2 + num3 + num4 + num5 + num6;
//         return console.log(result);
// }
// console.log(arrayOdds([11, 31, 58, 99, 21, 60])) ; 

// // REPONSE N° 3 --------------------------------------
// function arrayOdds([num1, num2, num3, result]) {
//     if (num1 % 2 == 0) {
//         num1 = 0;
//     } else {
//         num1 = 1;
//     }//----------------
//     if (num2 % 2 == 0) {
//         num2 = 0;
//     } else {
//         num2 = 1;
//     }
//     //-------------------
//     if (num3 % 2 == 0) {
//         num3 = 0;
//     } else {
//         num3 = 1;
//     }
//         result = num1 + num2 + num3;
//         return console.log(result);
// }
// console.log(arrayOdds([100, 40, 4])) ; 
//REPONSE N°1-----------------------------------------------
function stringToNum([article1, article2, article3, article4]){
    result = [article1.length, article2.length, article3.length, article2.length + article3.length];
    console.log(result);
}
console.log(stringToNum(["orange", "game", "movie","beau"])) ; // [6, 4, 5, 9]

//REPONSE N°2------------------------------------------------
function stringToNum([article1, article2, article3]){
    result = [article1.length, article2.length, article3.length];
    console.log(result);
}
console.log(stringToNum(["he", "off", "handmade"])) ; // [2, 3, 8]
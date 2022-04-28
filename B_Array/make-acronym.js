// function afoezina(teny) {
//     return teny[0];
//  };
 
//  function alainaafoezina(soratra){
//    var tenymaro = soratra.split(" "); // SARATSARAHANA NY ESPACE NO RAISINA ["for","your","information"]
//    var tenyfohy = tenymaro.map(afoezina); // ["f","y","i"]
//    return tenyfohy.join("").toUpperCase();
//  };
 
//  var soratra = "Sayna Academy";
//  var fanafoezanateny = alainaafoezina(soratra);
//  console.log(fanafoezanateny);
//---------------------
// omeo ny fanafoezana ny soratra hoe "Sayna academy"
//misy teny anakiroa io Sayna academy io : "Sayna" "academy"

// VOALOHANY 
//ANDAO ALAINA NY FIATOMBOHAN'NY TENY TSIRAIRAY
//hamorona fonction izany isika hakàna ny fiatombohan'ny teny
function initialeMots (mot){
  return mot[0];
};
// console.log(initialeMots("Sayna academy"));

//FAHAROA
//SATRIA TSY AZONTSIKA NY FANAFOHIZANA NY TENY FAHAROA 
//SADY HITA MILA SORATANA ANATY GUILLEMETS IRAY NY TENY TSIRAIRAY VAO AZO ALAINA NY INITIALE-NY
//DIA NDAO JERENA SAO MISY METHODE AO AM W3SCHOOL ...
//SOA FA MISY METHDODE MANASARAKA TENY AM JS .split(" ")no anarany, ny mifanohitra aminy dia .join("").
//hamorona fonction manasaraka teny izany isika

function fanafoezanteny(soratra){
  var tenymisaraka = soratra.split(" ");
  var tenyfohy = tenymisaraka.map(initialeMots);
  return tenyfohy.join("").toUpperCase();
}
console.log(fanafoezanteny("Vy Vato Sakelika"));
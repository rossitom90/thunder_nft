//Simulación buscador de NFT


//------------Pagin 1: index -----------------------------------

//------------Connectar Wallet - Local Storage -----------------


localStorage.setItem("Password", "1234");

let butUnlock = document.getElementById("unlockMeta");
butUnlock.addEventListener ("click", envioDatos);



function envioDatos(){
    console.log("obteniendo datos");
    accesoUsuario();
}


let obtenPassword = localStorage.getItem('Password');

//------------Connect Wallet - Local Storage -----------------

function accesoUsuario () {
 
    let passwordA = document.getElementById("password").value; 


    console.log("La contraseña es: " + passwordA);

    if( passwordA === obtenPassword){
        console.log("USUARIO CORRECTO puede ingresar, redirigiendo...");
        location.replace("marketplace.html");
    }else{
        
           console.log("ACCESO DENEGADO vuelva a intentar");
         dispara();
        };
        
    

}

//------------Libreria Sweet Alert!-----------------

function dispara(){

    Swal.fire({
        title: 'Usuario y/o Contraseña incorrectas!',
        text: 'Contraseña incorrecta, intente nuevamente',
        icon: 'error',
        confirmButtonText: 'Reintentar'
    })
    

}


//------------Barra Cryptos - API Coingecko -----------------

let btc = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
let usdt = document.getElementById("tether");
let ada = document.getElementById("cardano");
let sol = document.getElementById("solana");
let shib = document.getElementById("shibainu");
let matic = document.getElementById("polygon");
let daii = document.getElementById("dai");
let uni = document.getElementById("uniswap");
let ltc = document.getElementById("litecoin");
let cake = document.getElementById("pancake");

let liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana%2Ccardano%2Cshiba-inu%2Cmatic-network%2Cuniswap%2Clitecoin%2Cdai%2Ccake%2Ctether&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function(response){
   
    
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    usdt.innerHTML = response.tether.usd;
    ada.innerHTML = response.cardano.usd;
    sol.innerHTML = response.solana.usd;
   /*  shib.innerHTML = response.shibainu.usd;
    matic.innerHTML = response.polygon.usd; */
    daii.innerHTML = response.dai.usd;
    uni.innerHTML = response.uniswap.usd;
    ltc.innerHTML = response.litecoin.usd;
    /* cake.innerHTML = response.pancake.usd; */

});




//------------Pagin 2: marketplace -----------------------------------












//------------Desestructuración 01-----------------
console.log("--------------Desestructuración Crypto Punk---------------")

/* const {collectionName, floorPrice} = CryptoPunk

console.log(collectionName);
console.log(floorPrice);


const LosMuertosWorld = {
    collectionName: "Los Muertos World",
    description: "Los Muertos is a 10,000 piece collection which gives you exclusive access to The Graveyard. The Graveyard provides members with access to the Metaverse, exclusive drops, token distribution, experiences and much more!",
    creator: "LosMuertosTeams",
    totalItems: 10000,
    totalVolume:72000,
    volumeUnit: "Eth",
    totalOwners: 2900,
    floorPrice: 0.28,
}; */


/* console.log("Las Colecciones son " + CryptoPunk.collectionName + " y " + LosMuertosWorld.collectionName) */


//------------Spread 02-----------------

/* "--------------Spread Crypto Punk---------------" */

/* const {...tokenId} = nftCryptoPunk

console.log(tokenId); */





console.log("--------------Filtrar NFT Crypto Punk---------------")


/* const resultadoFavCr = nftCryptoPunk.filter((fav) => fav.favourites >= 12)

console.log(resultadoFavCr)

/* alert("El resultado es: " + resultadoFavCr.length) */

/* const resultadoPriceCR =  nftCryptoPunk.filter((prc) => prc.lastPrice <= 0.19)

console.log(resultadoPriceCR) */

/* alert("El resultado es: " + resultadoPriceCR.length) */ 


/* "--------------Sumar precio de Crypto Punk disponibles---------------" */

/* const nftCPdisponibles = nftCryptoPunk.reduce((acc, el) => acc + el.lastPrice, 0)
console.log("la suma de los NFT disponibles en ETH es: " + nftCPdisponibles) 
 */





//Filtro 1

/* "--------------Filtro: Minima cantidad de favoritos - NFT Los Muertos World---------------" */


/* let ingresoFav = parseInt(prompt("ingresar minimo de favoritos del NFT buscado:")); */

/* const resultadoFav = nftLosMuertos.filter((fav) => fav.favourites >= ingresoFav)

console.log(resultadoFav.length)
console.table(resultadoFav.concat()) */

/* alert("Resultado de la búsqueda: " + resultadoFav.length); */



//Filtro 2

/* "--------------Filtro: Precio límite en ETH - NFT Los Muertos World---------------" */

/* let ingresoprcMax = parseInt(prompt("ingresar precio máximo en ETH: ")); */

/* const resultadoPrice =  nftLosMuertos.filter((prc) => prc.lastPrice >= ingresoprcMax)

console.log(resultadoPrice.length)
console.table(resultadoPrice.concat()) */
/* alert("El resultado es: " + resultadoPrice.length) */





/* let prcButton = document.getElementById("prcBtn");
prcButton.addEventListener("click", preciosEl);

function preciosEl (){
    let prcMax = document.getElementById("precioMaximo").value;
    let prcMin = document.getElementById("precioMinimo").value;
    

    console.log("Maximo elegido es: " + prcMax);
    console.log("Minimo elegido es: " + prcMin);
    
    const resultadoPrice =  nftLosMuertos.filter((prc) => prc.lastPrice >= prcMax)

console.log(resultadoPrice.length)
console.table(resultadoPrice.concat()) 


};

    /* if(prcMin>0 && prcMax<prcMin){
        nftLosMuertos.lastPrice.filter();
        nftCryptoPunk.lastPrice.filter();

    }else{
        console.log("No hay NFT disponibles");
    } 

 */





//----------------------------------------------------Sumar precio NFT disponibles

/* console.log("--------------Sumar precio de Los Muertos World disponibles---------------")

const nftLMdisponibles = nftLosMuertos.reduce((acc, el) => acc + el.lastPrice, 0)

console.log("la suma de los NFT disponibles en ETH es: " + nftLMdisponibles) 
alert ("la suma de los NFT disponibles de Los Muertos World en ETH es: " + nftLMdisponibles)  */




//------------Envio de Mail con Fetch-----------------

let btnEnviar = document.getElementById("btnMail");

btnEnviar.addEventListener("click", funcionMail);

function funcionMail () {
    let inputEnviar = document.getElementById("ingresoMail").value;
    console.log(inputEnviar);
};
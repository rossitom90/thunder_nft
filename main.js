//Simulación buscador de NFT



//------------Connect Wallet - Local Storage -----------------

localStorage.setItem("Usuario", "coderUsuario");
localStorage.setItem("Password", "1234");

let butlogIn = document.getElementById("unlockMeta")
butlogIn.addEventListener ("click", envioDatos);



function envioDatos(){
    console.log("obteniendo datos");
    accesoUsuario();
}

let obtenUsuario = localStorage.getItem('Usuario');
let obtenPassword = localStorage.getItem('Password');

//------------Connect Wallet - Local Storage -----------------

function accesoUsuario () {

    let usuarioA = document.getElementById('recipient-name').value;    
    let passwordA = document.getElementById("password").value; 

    console.log("el ingreso es: " + usuarioA);
    console.log("La contraseña es: " + passwordA);

    if(usuarioA === obtenUsuario && passwordA === obtenPassword){
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
        text: '',
        icon: 'error',
        confirmButtonText: 'Reintentar'
    })
    

}

console.log("--------------Coleccion de NFTs---------------")

//Coleccion Crypto Punk
const CryptoPunk = {
    collectionName: "Crypto Punk",
    description: "CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christies of London, Art|Basel Miami, and The PBS NewsHour.",
    creator: "none",
    totalItems: 10000,
    totalVolume:954000,
    volumeUnit: "Eth",
    totalOwners: 3450,
    floorPrice: 0.5,
    
};
//------------Desestructuración 01-----------------
console.log("--------------Desestructuración Crypto Punk---------------")

const {collectionName, floorPrice} = CryptoPunk

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
};


console.log("Las Colecciones son " + CryptoPunk.collectionName + " y " + LosMuertosWorld.collectionName)


console.log("--------------Coleccion Crypto Punk---------------")

const nftCryptoPunk = [
    {
    id: 1,
    name: "CryptoPunk #3619",
    collection: CryptoPunk.collectionName,
    description: "CryptoPunk #3619 from CriptoPunk",
    lastPrice: 0.19,
    unidad: "eth",
    contractAdress: "0xC878671fF88f1374d2186127573E4A63931370FD",
    tokenId: 9116,
    tokenStandards: "Erc-721",
    blockchain: "Ethereum",
    views: 18,
    favourites: 130,
    ownedBy: "Thomson19"},
    {
    id: 2,
    name: "CryptoPunk #3620",
    collection: CryptoPunk.collectionName,
    description: "CryptoPunk #3620 from CriptoPunk",
    lastPrice: 0.17,
    unidad: "eth",
    contractAdress: "0xC878671fF88f1374d2186127573E4A63931370FD",
    tokenId: 9117,
    tokenStandards: "Erc-721",
    blockchain: "Ethereum",
    views: 24,
    favourites: 35,
    ownedBy: "Thomson19"},
    {
    id: 3,
    name: "CryptoPunk #3621",
    collection: CryptoPunk.collectionName,
    description: "CryptoPunk #3621 from CriptoPunk",
    lastPrice: 0.2,
    unidad: "eth",
    contractAdress: "0xC878671fF88f1374d2186127573E4A63931370FD",
    tokenId: 9118,
    tokenStandards: "Erc-721",
    blockchain: "Ethereum",
    views: 18,
    favourites: 19,
    ownedBy: "Thomson19"},
    {
    id: 4,
    name: "CryptoPunk #3622",
    collection: CryptoPunk.collectionName,
    description: "CryptoPunk #3622 from CriptoPunk",
    lastPrice: 0.24,
    unidad: "eth",
    contractAdress: "0xC878671fF88f1374d2186127573E4A63931370FD",
    tokenId: 9119,
    tokenStandards: "Erc-721",
    blockchain: "Ethereum",
    views: 12,
    favourites: 11,
    ownedBy: "Thomson19"},
    {
    id: 5,
    name: "CryptoPunk #3623",
    collection: CryptoPunk.collectionName,
    description: "CryptoPunk #3623 from CriptoPunk",
    lastPrice: 0.31,
    unidad: "eth",
    contractAdress: "0xC878671fF88f1374d2186127573E4A63931370FD",
    tokenId: 9120,
    tokenStandards: "Erc-721",
    blockchain: "Ethereum",
    views: 28,
    favourites: 13,
    ownedBy: "Thomson19"},
    {
    id: 6,
    name: "CryptoPunk #3624",
    collection: CryptoPunk.collectionName,
    description: "CryptoPunk #3624 from CriptoPunk",
    lastPrice: 0.2,
    unidad: "eth",
    contractAdress: "0xC878671fF88f1374d2186127573E4A63931370FD",
    tokenId: 9121,
    tokenStandards: "Erc-721",
    blockchain: "Ethereum",
    views: 8,
    favourites: 6,
    ownedBy: "Thomson19",

}];

//------------Spread 02-----------------
console.log("--------------Spread Crypto Punk---------------")

const {...tokenId} = nftCryptoPunk

console.log(tokenId);


/* ------------------- LOCAL STORAGE "Crypto Punk"-------------------*/



const enJSONCP  = JSON.stringify(nftCryptoPunk);

console.log(enJSONCP); 
console.log(typeof nftCryptoPunk); //object
console.log(typeof enJSONCP); //string


const set = localStorage.setItem("nft Crypto Punk", enJSONCP);



console.log("--------------Filtrar NFT Crypto Punk---------------")


const resultadoFavCr = nftCryptoPunk.filter((fav) => fav.favourites >= 12)

console.log(resultadoFavCr)

/* alert("El resultado es: " + resultadoFavCr.length) */

const resultadoPriceCR =  nftCryptoPunk.filter((prc) => prc.lastPrice <= 0.19)

console.log(resultadoPriceCR)

/* alert("El resultado es: " + resultadoPriceCR.length) */


console.log("--------------Sumar precio de Crypto Punk disponibles---------------")

const nftCPdisponibles = nftCryptoPunk.reduce((acc, el) => acc + el.lastPrice, 0)
console.log("la suma de los NFT disponibles en ETH es: " + nftCPdisponibles) 



console.log("--------------Coleccion Los Muertos World---------------")

const nftLosMuertos = [{
    id: 1,
    name: "Los Muertos #9259",
    collection: LosMuertosWorld.collectionName,
    description: "Los Muertos #9259 by LosMuertos",
    lastPrice: 0.21,
    unidad: "eth",
    contractAdress: "0xC878671fF88f1374d2186127573E4A63931370FC",
    tokenId: 9259,
    tokenStandards: "Erc-721",
    blockchain: "Ethereum",
    views: 10,
    favourites: 5,
    ownedBy: "7BA997"},
    {
    id: 2,
    name: "Los Muertos #9260",
    collection: LosMuertosWorld.collectionName,
    description: "Los Muertos #9260 by LosMuertos",
    lastPrice: 0.3,
    unidad: "eth",
    contractAdress: "0xC878671fF88f1374d2186127573E4A63931370FC",
    tokenId: 9260,
    tokenStandards: "Erc-721",
    blockchain: "Ethereum",
    views: 12,
    favourites: 5,
    ownedBy: "7BA997"},
    {
    id: 3,
    name: "Los Muertos #9261",
    collection: LosMuertosWorld.collectionName,
    description: "Los Muertos #9261 by LosMuertos",
    lastPrice: 0.25,
    unidad: "eth",
    contractAdress: "0xC878671fF88f1374d2186127573E4A63931370FC",
    tokenId: 9261,
    tokenStandards: "Erc-721",
    blockchain: "Ethereum",
    views: 13,
    favourites: 8,
    ownedBy: "7BA997"},
    {
    id: 4,
    name: "Los Muertos #9262",
    collection: LosMuertosWorld.collectionName,
    description: "Los Muertos #9262 by LosMuertos",
    lastPrice: 0.28,
    unidad: "eth",
    contractAdress: "0xC878671fF88f1374d2186127573E4A63931370FC",
    tokenId: 9262,
    tokenStandards: "Erc-721",
    blockchain: "Ethereum",
    views: 21,
    favourites: 12,
    ownedBy: "7BA997"},
    {
    id: 5,
    name: "Los Muertos #9263",
    collection: LosMuertosWorld.collectionName,
    description: "Los Muertos #9263 by LosMuertos",
    lastPrice: 0.35,
    unidad: "eth",
    contractAdress: "0xC878671fF88f1374d2186127573E4A63931370FC",
    tokenId: 9263,
    tokenStandards: "Erc-721",
    blockchain: "Ethereum",
    views: 28,
    favourites: 12,
    ownedBy: "7BA997"},
    {
    id: 6,
    name: "Los Muertos #9264",
    collection: LosMuertosWorld.collectionName,
    description: "Los Muertos #9264 by LosMuertos",
    lastPrice: 0.41,
    unidad: "eth",
    contractAdress: "0xC878671fF88f1374d2186127573E4A63931370FC",
    tokenId: 9264,
    tokenStandards: "Erc-721",
    blockchain: "Ethereum",
    views: 18,
    favourites: 10,
    ownedBy: "7BA997"},
];

/* ------------------- LOCAL STORAGE "Los Muertos"-------------------*/

const MuertosJson = JSON.stringify(nftLosMuertos);

localStorage.setItem("Los muertos JSON", MuertosJson);


//Filtro 1

console.log("--------------Filtro: Minima cantidad de favoritos - NFT Los Muertos World---------------")


/* let ingresoFav = parseInt(prompt("ingresar minimo de favoritos del NFT buscado:")); */

/* const resultadoFav = nftLosMuertos.filter((fav) => fav.favourites >= ingresoFav)

console.log(resultadoFav.length)
console.table(resultadoFav.concat()) */

/* alert("Resultado de la búsqueda: " + resultadoFav.length); */

//Filtro 2

console.log("--------------Filtro: Precio límite en ETH - NFT Los Muertos World---------------")

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












const exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
  const button = event.relatedTarget
  // Extract info from data-bs-* attributes
  const recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  const modalTitle = exampleModal.querySelector('.modal-title')
  const modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = `New message to ${recipient}`
  modalBodyInput.value = recipient
})


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


//------------Envio de Mail con Fetch-----------------

let btnEnviar = document.getElementById("btnMail");

btnEnviar.addEventListener("click", funcionMail);

function funcionMail () {
    let inputEnviar = document.getElementById("ingresoMail").value;
    console.log(inputEnviar);
};
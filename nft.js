// ----------------------- Tarjetas NFT en contenedor ------------------------------

const contenedorT = document.getElementById('contenedorDeTarjetas');

fetch('/nft.json')

.then( (respuesta) => respuesta.json())
.then( (datanft) => {
 
    datanft.forEach((nftTarjeta) => {

        const tarjeta = document.createElement('tarjeta')
      
       tarjeta.innerHTML =
       
        `
        <div class="cardAA">
                
            <div class="nftImg01">
                <img src="${nftTarjeta.img}" class="imagenNftCard">

                <div class="creador">
                    <img src="${nftTarjeta.imgCreator}" class="imgCreador">
                    <div class="texto-creador">
                        <p class="creador-descrip">Creador</p>
                        <p class="creador-nombre">${nftTarjeta.creatorName}</p>
                    </div>
                </div>
            </div>

            <div class="fondo_card">
                    <div class="nombrenftdiv">
                        <p class="nombre-nft">${nftTarjeta.name}</p>
                    </div>

                <div class="casilla-precio">
                    <p class="price-crypto">${nftTarjeta.lastSale}</p>
                    <button class="ver" id="${nftTarjeta.id}">ver</button>
                </div>
             </div> 
        </div>
        `
      contenedorT.append(tarjeta);


     
        

    })



// Filtro y renderizado Main

let btnMain = document.getElementById("filterMain");
btnMain.addEventListener("click", eventMain);

function eventMain(){
    console.log("Reset list")
    document.getElementById("contenedorT").reset();
    
}


// Filtro y renderizado Ethereum

let btnEther = document.getElementById("filterEthereum");
btnEther.addEventListener("click", eventEther);



function eventEther(){
    
    const resultadoEther = datanft.filter((el) => el.blockchain.includes('Ethereum'))
        
   console.log(resultadoEther);
   
   
    datanft.forEach((nftTarjeta) => {

        const tarjeta = document.createElement('tarjeta')
      
       tarjeta.innerHTML =
       
        `
        <div class="cardAA">
                
            <div class="nftImg01">
                <img src="${nftTarjeta.img}" class="imagenNftCard">

                <div class="creador">
                    <img src="${nftTarjeta.imgCreator}" class="imgCreador">
                    <div class="texto-creador">
                        <p class="creador-descrip">Creador</p>
                        <p class="creador-nombre">${nftTarjeta.creatorName}</p>
                    </div>
                </div>
            </div>

            <div class="fondo_card">
                    <div class="nombrenftdiv">
                        <p class="nombre-nft">${nftTarjeta.name}</p>
                    </div>

                <div class="casilla-precio">
                    <p class="price-crypto">${nftTarjeta.lastSale}</p>
                    <button class="ver" id="${nftTarjeta.id}">ver</button>
                </div>
             </div> 
        </div>
       `
    
})}





// Filtro y renderizado Polygon

let btnPoly = document.getElementById("filterPolygon");
btnPoly.addEventListener("click", eventPoly);



function eventPoly(){

    const resultadoPoly = datanft.filter((el) => el.blockchain.includes('Polygon'))
        
    console.log(resultadoPoly);

    resultadoPoly.innerHTML = 

    `
    <div class="cardAA">
            
        <div class="nftImg01">
            <img src="${nftTarjeta.img}" class="imagenNftCard">

            <div class="creador">
                <img src="${nftTarjeta.imgCreator}" class="imgCreador">
                <div class="texto-creador">
                    <p class="creador-descrip">Creador</p>
                    <p class="creador-nombre">${nftTarjeta.creatorName}</p>
                </div>
            </div>
        </div>

        <div class="fondo_card">
                <div class="nombrenftdiv">
                    <p class="nombre-nft">${nftTarjeta.name}</p>
                </div>

            <div class="casilla-precio">
                <p class="price-crypto">${nftTarjeta.lastSale}</p>
                <button class="ver" id="${nftTarjeta.id}">ver</button>
            </div>
         </div> 
    </div>
    `
   
}


// Filtro y renderizado Solana

let btnSol = document.getElementById("filterSolana");
btnSol.addEventListener("click", eventSol);



function eventSol(){

    const resultadoSol = datanft.filter((el) => el.blockchain.includes('Solana'))
        
    console.log(resultadoSol);
   
    resultadoSol.innerHTML = 

    `
    <div class="cardAA">
            
        <div class="nftImg01">
            <img src="${nftTarjeta.img}" class="imagenNftCard">

            <div class="creador">
                <img src="${nftTarjeta.imgCreator}" class="imgCreador">
                <div class="texto-creador">
                    <p class="creador-descrip">Creador</p>
                    <p class="creador-nombre">${nftTarjeta.creatorName}</p>
                </div>
            </div>
        </div>

        <div class="fondo_card">
                <div class="nombrenftdiv">
                    <p class="nombre-nft">${nftTarjeta.name}</p>
                </div>

            <div class="casilla-precio">
                <p class="price-crypto">${nftTarjeta.lastSale}</p>
                <button class="ver" id="${nftTarjeta.id}">ver</button>
            </div>
         </div> 
    </div>
    `
}



















/* const d = document;
let palabraClave =  document.getElementById("palabraClav"); */

/* document.querySelector('#palabraClav').
addEventListener('input', filterlist)

function filterlist = document.querySelector('#palabraClav')
const filter = searchInput.value.toLowerCase()
const listItems = document.querySelectorAll('.') */


/* function searchFilter(input, selector){
    palabraClave.addEventListener("keyup",(e) =>{
        if(e.target.matches(input)){
            console.log(e.key);

            if(e.key ==="Escape")e.target.value = "";

            d.querySelectorAll(selector).forEach((el) =>
            el.textContent.toLowerCase().includes(e.target.value)
            ?el.classList.remove("palabraClav")
            :el.classList.add("palabraClav")
            );
        }
    })
} */


/* let palabraClave =  document.getElementById("palabraClav").value;
      let btnPalabra = document.getElementById("butPalabra");
      
      btnPalabra.addEventListener("keyup", valorPalabra);

      
      
      function valorPalabra(){
      } */

// ----------------------- Filtro de Tarjetas ------------------------------
/* function myFunction() {
    const mi_muestra = JSON.parse(arreglo_muestra)
    document.getElementById("demo").innerHTML = mi_muestra.filter(obtenerProductoPorId())
  }
 */
// ------------ Palabra clave:


        
   
// ------------ Minimos y Maximos: 

/* let minPRC = document.getElementById("minInput").value;
let maxPRC = document.getElementById("maxInput").value;
let butMinMax = document.getElementById("butMaxMin");

butMinMax.onclick("click", valoresMaxMin);

function valoresMinMax(){

    if(minPRC>0 && maxPRC<minPRC){

    }else{

    }

} */})
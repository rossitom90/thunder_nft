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

                <div class="fondo_card">
                    <div class="nombrenftdiv">
                        <p class="nombre-nft">${nftTarjeta.name}</p>
                    </div>

                    <div class="casilla-precio">

                        <div class="seccionprccrypto">
                            <p class="price-crypto">${nftTarjeta.lastSale}</p>
                            <p class="blockCard">${nftTarjeta.unit}</p>
                        </div>
                        
                        <button class="ver" id="${nftTarjeta.id}">ver</button>
                     </div>
                     
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
        console.log("Cantidad de NFT en blockchain Ethereum...")
        console.log(resultadoEther);

   
   /* resultadoEther.innerHTML = 
       
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
       ` */
    
}





// Filtro y renderizado Polygon

let btnPoly = document.getElementById("filterPolygon");
btnPoly.addEventListener("click", eventPoly);



function eventPoly(){

    const resultadoPoly = datanft.filter((el) => el.blockchain.includes('Polygon'))
    console.log("Cantidad de NFT en blockchain Polygon...")
    console.log(resultadoPoly);

   /* resultadoPoly.innerHTML = 

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
    ` */
   
}


// Filtro y renderizado Solana

let btnSol = document.getElementById("filterSolana");
btnSol.addEventListener("click", eventSol);



function eventSol(){

    const resultadoSol = datanft.filter((el) => el.blockchain.includes('Solana'))
    console.log("Cantidad de NFT en blockchain Solana...")
    console.log(resultadoSol);
   
    /* resultadoSol.innerHTML = 

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
    ` */
}



// Filtro Precio Max



let btnVer = document.getElementById("filterVer");
btnVer.addEventListener("click", funcEntrePrc);

function funcEntrePrc(){

    
    let prcMaxx = document.getElementById ("ingresoMax").value;

    
    console.log("Numero Máximo elegido es: " + prcMaxx);

   
    const resultadoMax = datanft.filter((Max) => Max.lastSale <= prcMaxx);
    
    console.log(resultadoMax);

}})

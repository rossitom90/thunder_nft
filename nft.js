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
})

// ----------------------- Filtro de Tarjetas ------------------------------
/* function myFunction() {
    const mi_muestra = JSON.parse(arreglo_muestra)
    document.getElementById("demo").innerHTML = mi_muestra.filter(obtenerProductoPorId())
  }
 */
// ------------ Palabra clave:

let palabraClave =  document.getElementById("palabraClav").value;
      let btnPalabra = document.getElementById("butPalabra");
      
      btnPalabra.addEventListener("click", valorPalabra);
      
      function valorPalabra(){
          
          
      
          const filtroPalabra = datanft.filter((pal) => palabraClave = "");
          
          console.log(filtroPalabra);

          var newArray = arr.filter(callback(currentValue[, index[, datanft]])[, thisArg])
      
      }
        
   
// ------------ Minimos y Maximos: 

/* let minPRC = document.getElementById("minInput").value;
let maxPRC = document.getElementById("maxInput").value;
let butMinMax = document.getElementById("butMaxMin");

butMinMax.onclick("click", valoresMaxMin);

function valoresMinMax(){

    if(minPRC>0 && maxPRC<minPRC){

    }else{

    }



} */

/* productos.filter(el=>el.categoria == “frutas”) */
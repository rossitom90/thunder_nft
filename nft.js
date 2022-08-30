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


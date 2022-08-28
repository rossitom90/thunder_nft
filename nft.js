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
                <div class="nombrenftdiv">
                    <p class="nombre-nft">${nftTarjeta.name}</p>
                </div>

            <div class="casilla-precio">
                <p class="price-crypto">${nftTarjeta.lastSale}</p>
                <button class="ver" id="${nftTarjeta.id}">ver</button>
            </div>

        `
      contenedorT.append(tarjeta);
        
    })
})






{/* <div class="cardAA">
                
<div class="nftImg01">
    <img src="https://lh3.googleusercontent.com/ow2PqtN6Zz3qC5ThHRzsZOngRhh3y0JtvPuaQ_sib7FWpzAveeItbvUQul1ocsZv_JqUwvXmonPVKACSQ0UTswGWnwecYGHb4zfM=s0" class="imagenNftCard">

    <div class="creador">
      <img src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZXxlbnwwfHwwfHw%3D&w=1000&q=80" class="imgCreador">
          <div class="texto-creador">
              <p class="creador-descrip">Creador</p>
              <p class="creador-nombre">Richard Kill</p>
        </div>
    </div>
  </div>
      <div class="nombrenftdiv">
          <p class="nombre-nft">"Hamlet Contemplates“</p>
       </div>

  <div class="casilla-precio">
    <p class="price-crypto">4.75 ETH</p>
    <button class="ver">ver</button>
  </div>

</div> */}
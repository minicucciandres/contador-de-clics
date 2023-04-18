import React from "react";
import '../hojas-de-estilo/Boton.css'

function Boton({texto,esBtonDeClic,manejarClic}){
  return(
<button
  className={esBtonDeClic ? 'boton-clic':'boton-reiniciar'}
  onClick={manejarClic}
  >
  {texto}
</button>

  )
}

export default Boton;
import { useState } from "react"

const ModalDescription = () => {
  
  const [editDescription, setEditDescription] = useState(false)
  
  const handleEditDescription = () => {
    setEditDescription(true)
  }

  const handleSaveDescription = () => {
    setEditDescription(false)
  }

  return (
    <section className="h-60 w-full border rounded my-6 p-1">
          <h3>Descripcion</h3>
          {editDescription ? (
            <div>
              <textarea className="text-text-secondary ml-4 mt-4 mr-24 overflow-hidden resize-none w-auto">
                Monkey D. Luffy es el protagonista de la serie de manga y anime
                "One Piece", creada por Eiichiro Oda. Nacido en el pequeño
                pueblo de Fushia, Luffy es un joven pirata con un sueño
                singular: convertirse en el Rey de los Piratas al encontrar el
                legendario tesoro conocido como "One Piece". Para lograr este
                objetivo, Luffy forma su propia tripulación, los Piratas del
                Sombrero de Paja, y se embarca en una aventura épica a través
                del vasto y peligroso Grand Line.
              </textarea>
              <button onClick={handleSaveDescription}>boton para editar</button>
            </div>
          ) : (
            <div>
              <p className="text-text-secondary text-lg">
                Monkey D. Luffy es el protagonista de la serie de manga y anime
                "One Piece", creada por Eiichiro Oda. Nacido en el pequeño
                pueblo de Fushia, Luffy es un joven pirata con un sueño
                singular: convertirse en el Rey de los Piratas al encontrar el
                legendario tesoro conocido como "One Piece". Para lograr este
                objetivo, Luffy forma su propia tripulación, los Piratas del
                Sombrero de Paja, y se embarca en una aventura épica a través
                del vasto y peligroso Grand Line.
              </p>
              <button onClick={handleEditDescription}>boton para editar</button>
            </div>
          )}
        </section>
  ) 
}

export default ModalDescription
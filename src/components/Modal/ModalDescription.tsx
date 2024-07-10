import { useState } from "react";

const ModalDescription = () => {
  const [editDescription, setEditDescription] = useState(false);

  const handleEditDescription = () => {
    setEditDescription(true);
  };

  const handleSaveDescription = () => {
    setEditDescription(false);
  };

  const handleCancelDescription = () => {
    setEditDescription(false);
  };

  return (
    <>
      <section className="mt-4 flex justify-between mb-3">
        <h3 className="text-text-main font-bold text-lg">Description</h3>
        {!editDescription && (
          <button
            onClick={handleEditDescription}
            className="bg-secondary-gray w-20 h-8 font-semibold text-text-main rounded"
          >
            Edit
          </button>
        )}
      </section>
      <section>
        {editDescription ? (
          <>
            <textarea className="resize-y w-full h-auto min-h-28 max-h-40 text-text-main p-2 rounded" placeholder="Description...">

            </textarea>
            <div className="flex gap-3 mb-4">
            <button onClick={handleSaveDescription} className="bg-blue-700 w-20 h-8 font-semibold text-white rounded hover:bg-blue-500">Save</button>
            <button onClick={handleCancelDescription} className="w-20 h-8 font-semibold text-text-main rounded hover:bg-secondary-gray">Cancel</button>
            </div>
          </>
        ) : (
          <>
            <p className="w-full h-32 text-text-main">
              Monkey D. Luffy es el protagonista de la serie de manga y anime
              "One Piece", creada por Eiichiro Oda. Nacido en el pequeño pueblo
              de Fushia, Luffy es un joven pirata con un sueño singular:
              convertirse en el Rey de los Piratas al encontrar el legendario
            </p>
          </>
        )}
      </section>
    </>
  );
};

export default ModalDescription;

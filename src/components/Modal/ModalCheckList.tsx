import { useState } from "react";

const ModalCheckList = () => {
  const [addNewElement, setAddNewElement] = useState(false);

  const handleAddNewElement = () => {
    setAddNewElement(true);
  };

  const handleSaveNewElement = () => {
    setAddNewElement(false);
  };

  const handleCancelNewElement = () => {
    setAddNewElement(false);
  };

  return (
    <>
      <section className="mt-4 flex justify-between mb-3">
        <h3 className="text-text-main font-bold text-lg">Checklist</h3>
      </section>
      <section className="flex gap-2 items-center mb-2">
        <label className="text-text-secondary text-sm">100%</label>
        <div className="h-2.5 bg-gray-700 rounded-full w-full">
          <div className="bg-blue-700 h-2.5 rounded-full" style={{width: '45%'}}></div>
        </div>
      </section>
      <section>
        <label className="flex gap-2 text-text-main items-center">
          <input type="checkbox" name="" id="" className="" />
          comprar pan
        </label>
      </section>
      <section className="mt-4">
        {addNewElement ? (
          <>
            <textarea
              className="resize-y w-full h-auto min-h-10 max-h-20 text-text-main p-2 rounded"
              placeholder="Add an element"
            ></textarea>
            <div className="flex gap-3 mb-4">
              <button
                onClick={handleSaveNewElement}
                className="bg-blue-700 w-20 h-8 font-semibold text-white rounded hover:bg-blue-500"
              >
                Add
              </button>
              <button
                onClick={handleCancelNewElement}
                className="w-20 h-8 font-semibold text-text-main rounded hover:bg-secondary-gray"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <button
            onClick={handleAddNewElement}
            className="bg-secondary-gray w-32 h-8 font-semibold text-text-main rounded"
          >
            Add element
          </button>
        )}
      </section>
    </>
  );
};

export default ModalCheckList;

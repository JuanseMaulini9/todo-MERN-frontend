const ModalCheckList = () => {
  return (
    <section className="flex justify-around">
      <div className="flex flex-col text-text-secondary">
        Tareas pendientes
        <label>
          <input type="checkbox" name="" id="" className="mr-1" />
          preparar aceitunas
        </label>
      </div>
      <div className="flex flex-col text-text-secondary">
        Tareas completadas
        <label>
          <input type="checkbox" name="" id="" className="mr-1" />
          preparar aceitunas
        </label>
      </div>
    </section>
  );
};

export default ModalCheckList;

import { useAppDispatch } from "../../store/hooks";
import { viewModal } from "../../store/modalSlice";
import {TasksInterface} from  "../../types/storeInterface"
import { setCurrentModalCard } from "../../store/currentBoardCard";

const Card = ({
  _id,
  title,
  description,
  expires,
  taskList
}: TasksInterface) => {
  const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", _id);
  };

  const dispatch = useAppDispatch()

  const handleModal = () => {
    dispatch(viewModal('MODAL_ON'))
    dispatch(setCurrentModalCard(_id))
  }

  const tasksCompleted = taskList.filter(task => task.value === true)


  return (
    <div
      className="bg-secondary-gray m-4 rounded h-40 p-2 shadow-lg cursor-grab"
      draggable
      onDragStart={dragStart}
      onClick={handleModal}
    >
      <section className="ml-2">
        <h3 className="font-bold text-lg text-text-main">{title}</h3>
        <h4 className=" text-text-secondary mb-4 -mt-1">
          {description}
        </h4>
      </section>

      <section className="ml-2 mr-2">
        <span className=" text-text-secondary -mb-2 ">progress</span>
        <span className=" ml-2 text-text-main">
          {tasksCompleted.length}/{taskList.length}
        </span>
        <progress
          max={taskList.length}
          value={tasksCompleted.length}
          className="h-1 w-full "
        ></progress>
      </section>

      <section className="ml-2 ">
        <p className="bg-main-gray text-text-main w-20 font-bold rounded-2xl text-xs h-6 mt-4 items-center flex justify-center">
          {expires.toString()}
        </p>
      </section>
    </div>
  );
};

export default Card;

import { useAppDispatch } from "../../store/hooks";
import { viewModal } from "../../store/modalSlice";
import {TasksInterface} from  "../../types/storeInterface"

const Card = ({
  _id,
  title,
  description,
  expires,
  // taskList,
  // stateValue,
  // boardId
}: TasksInterface) => {
  const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", _id);
  };

  const dispatch = useAppDispatch()

  const handleModal = () => {
    dispatch(viewModal('MODAL_ON'))
  }

  return (
    <div
      className="bg-main-gray m-4 rounded h-40 p-2"
      draggable
      onDragStart={dragStart}
      onClick={handleModal}
    >
      <section className="ml-2">
        <h3 className="font-bold text-lg text-text-main">{title}</h3>
        <h4 className=" text-text-secondary mb-4 -mt-1">
          {description || "hola"}
        </h4>
      </section>

      <section className="ml-2 mr-2">
        <span className=" text-text-secondary -mb-2 ">progress</span>
        <span className=" ml-2 text-text-main">
          {/* {progress}/{allTasks} */}
        </span>
        <progress
          // max={allTasks}
          // value={progress}
          className="h-1 w-full "
        ></progress>
      </section>

      <section className="ml-2 ">
        <p className="bg-secondary-gray text-text-main w-20 font-bold rounded-2xl text-xs h-6 mt-1 items-center flex justify-center">
          {expires.toString()}
        </p>
      </section>
    </div>
  );
};

export default Card;

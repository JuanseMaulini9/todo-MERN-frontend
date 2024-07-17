import { useAppDispatch } from "../../store/hooks";
import { viewModal } from "../../store/modalSlice";
import ModalTitle from "./ModalTitle";
import ModalDescription from "./ModalDescription";
import ModalCheckList from "./ModalCheckList";

const Modal = () => {
  const dispatch = useAppDispatch();

  const handleModal = () => {
    dispatch(viewModal("MODAL_OFF"));
  };

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="absolute bg-black w-full h-full -mt-10 bg-opacity-40 flex justify-center items-center"
      onClick={handleModal}
    >
      <div
        className="w-1/2 h-5/6 bg-main-gray relative rounded flex flex-col p-4"
        onClick={stopPropagation}
      >
        <div
          onClick={handleModal}
          className="h-10 w-12 text-2xl font-bold absolute right-4 text-center cursor-pointer rounded-full hover:bg-secondary-gray"
        >
          X
        </div>
        <ModalTitle />
        <ModalDescription />
        <ModalCheckList />
      </div>
    </div>
  );
};

export default Modal;
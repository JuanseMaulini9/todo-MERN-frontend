import { useAppDispatch } from "../../store/hooks";
import { viewModal } from "../../store/modalSlice";

const CardModal = () => {

  const dispatch = useAppDispatch()

  const handleModal = () => {
    dispatch(viewModal('MODAL_OFF'))
  }

  const stopPropagation = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
  } 

  return (
    <div className="absolute bg-black w-full h-full -mt-10 bg-opacity-40 flex justify-center items-center" onClick={handleModal}>
      <div className="w-1/2 h-1/2 bg-main-gray relative" onClick={stopPropagation}>
        <div onClick={handleModal} className="h-10 w-12 text-2xl font-bold absolute right-0 text-center cursor-pointer rounded hover:bg-secondary-gray">X</div>
      </div>
    </div>
  );
};

export default CardModal;

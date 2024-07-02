interface AsideButtonProps {
  boardName: string
}

const AsideButton = ({boardName}:AsideButtonProps) => {
  return (
  <>
    <li className="w-full h-full p-4 flex justify-between hover:bg-slate-900 cursor-pointer">{boardName}
      <button className="h-8 px-4 font-bold rounded hover:bg-slate-800 ">x</button>
    </li>
  </>
);
};
export default AsideButton;

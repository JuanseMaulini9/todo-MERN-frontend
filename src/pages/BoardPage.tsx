import Board from "../components/Board/Board";
import AsideButton from "../components/Board/AsideButton";

const BoardPage = () => {
  return (
    <div className="flex h-screen pt-10 overflow-hidden">
      <aside className="bg-slate-950 w-52 h-full">
        <section className="p-4 flex justify-between">
          <h3 className="text-2xl font-bold px-4">Boards</h3>
          <div className="h-8 px-4 font-bold rounded hover:bg-slate-800 text-center">+</div>
        </section>
        <section>
          <ul className="flex flex-col py-4 items-center justify-center">
            <AsideButton boardName="todo-app"></AsideButton>
            <AsideButton boardName="spotify-app"></AsideButton>
          </ul>
        </section>
      </aside>
      <section className="flex-1 overflow-auto">
        <Board></Board>
      </section>
    </div>
  );
};

export default BoardPage;
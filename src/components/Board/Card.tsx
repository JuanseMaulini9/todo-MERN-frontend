interface CardProps {
  id: string,
  title: string;
  description: string;
  finalDate: string;
  allTasks: number;
  progress: number;
}

const Card = ({
  id,
  title,
  description,
  finalDate,
  progress,
  allTasks,
}: CardProps) => {
  
  const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", id);
  }
  
  return (
    
    
    <div className="bg-main-gray m-4 rounded h-40 p-2" draggable onDragStart={dragStart}>
      <section className="ml-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <h4 className=" text-text-secondary mb-4 -mt-1">
          {description || "hola"}
        </h4>
      </section>

      <section className="ml-2 mr-2">
        <span className=" text-text-secondary -mb-2 ">progress</span>
        <span className=" ml-2">
          {progress}/{allTasks}
        </span>
        <progress
          max={allTasks}
          value={progress}
          className="h-1 w-full "
        ></progress>
      </section>

      <section className="ml-2 ">
        <p className="bg-secondary-gray text-text-secondary w-20 font-bold rounded-2xl text-xs h-6 mt-1 items-center flex justify-center">
          {finalDate}
        </p>
      </section>
    </div>
  );
};

export default Card;

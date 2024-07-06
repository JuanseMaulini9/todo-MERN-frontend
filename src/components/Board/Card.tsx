interface CardProps {
  title: string;
  description: string;
  finalDate: Date;
  allTasks: number;
  progress: number;

  handleDragging: (dragging: boolean) => void
}

const Card = ({
  title,
  description,
  finalDate,
  progress,
  allTasks,
  handleDragging 
}: CardProps) => {

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    console.log('moviendo')
    handleDragging(true)
  }
  const handleDragEnd = () => {
    handleDragging(false)
    console.log('dejando')
  }
  
  return (
    <div className="bg-main-gray m-4 rounded h-40 p-2" draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
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
          {finalDate.getDay()}/{finalDate.getMonth() + 1}/
          {finalDate.getFullYear()}
        </p>
      </section>
    </div>
  );
};

export default Card;

import { useState } from "react";
import FormAddTask from "./components/FormAddTask";
import Backdrop from "./components/Backdrop";
import ButtonClose from "./components/ButtonClose";
import ButtonAddTask from "./components/ButtonAddTask";
import TaskList from "./components/TaskList";

export interface TaskDataType {
  id: number;
  message: string;
}

function App() {
  const [taskData, setTaskData] = useState<TaskDataType[]>([]);
  const [isOpenFormAddTask, setIsOpenFormAddTask] = useState<boolean>(false);

  const handleOpenForm = (isOpen: boolean) => {
    setIsOpenFormAddTask(isOpen);
  };
  
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center p-6">
      {isOpenFormAddTask && (
        <>
          <Backdrop handleOpenBackdrop={handleOpenForm} />
          <div className="absolute z-[2]">
            <div className="relative flex flex-col justify-between gap-y-5 rounded-lg bg-white p-6 drop-shadow-xl sm:w-96">
              <div className="absolute right-3 top-3 z-[3]">
                <ButtonClose handleOpenForm={handleOpenForm} />
              </div>
              <div className="h-12 w-12 rounded-lg border border-solid border-charcoal/50 p-2.5 drop-shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                  />
                </svg>
              </div>
              <div>
                <h2 className="font-semibold">To do list</h2>
                <p className="text-sm text-charcoal">Please enter a task name to do.</p>
              </div>
              <FormAddTask setTask={setTaskData} handleOpenForm={handleOpenForm} />
            </div>
          </div>
        </>
      )}
      <div className="z-0 flex flex-col gap-y-4 px-2 sm:px-0">
        <div className="flex justify-end">
          <ButtonAddTask
            type="button"
            onClick={() => setIsOpenFormAddTask(true)}
            className="btn__add-task"
          />
        </div>
        <div className="flex min-h-[24rem] w-[18.5rem] items-center justify-center rounded-xl bg-white p-6 drop-shadow-xl sm:w-[30.5rem]">
          {taskData.length ? (
            <TaskList taskData={taskData}/>
          ) : (
            <div>
              <h2 className="text-center">There are no tasks right now 😺.</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

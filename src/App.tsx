import { useState } from "react";

interface TaskDataType {
  index: string;
  message: string;
}

function App() {
  const [input, setInput] = useState<string>("");
  const [task, setTask] = useState<TaskDataType[]>([]);
  const [isFormAddTask, setIsFormAddTask] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTask: TaskDataType = {
      index: Date.now().toString(),
      message: input.trim(),
    };

    setTask((prev) => [...prev, newTask]);
    setInput("");
    setIsFormAddTask((prev) => !prev);
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center">
      {isFormAddTask && (
        <>
          <div
            onClick={() => setIsFormAddTask(false)}
            className="absolute inset-0 z-[1] flex items-center justify-center bg-eerieBlack/50"
          />
          <div className="absolute z-[2]">
            <div className="relative flex flex-col justify-between gap-y-5 rounded-lg bg-white p-6 drop-shadow-xl sm:w-96">
              <div className="absolute right-3 top-3 z-[3]">
                <button
                  type="button"
                  onClick={() => setIsFormAddTask(false)}
                  className="flex h-8 w-8 touch-manipulation items-center justify-center rounded-lg border border-solid border-charcoal/25 transition-all hover:shadow-md active:scale-95"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
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
              <form onSubmit={handleSubmit} className="flex flex-col justify-between gap-y-5">
                <div>
                  <input
                    type="text"
                    minLength={10}
                    value={input}
                    onChange={(event) => setInput(event?.target.value)}
                    placeholder="New Task"
                    className="w-full rounded-lg border border-solid border-charcoal/50 p-2.5 drop-shadow-md hover:border-charcoal"
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="flex touch-manipulation items-center gap-2 rounded-lg bg-mediumSlateBlue px-4 py-2 text-base font-semibold text-white transition-all hover:shadow-md active:scale-95"
                  >
                    Add task <span className="text-xl">+</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
      <div className="z-0 flex flex-col gap-y-4 px-2 sm:px-0">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setIsFormAddTask(true)}
            className="flex touch-manipulation items-center gap-2 rounded-lg bg-eerieBlack px-4 py-2 text-base font-semibold text-white transition-all hover:shadow-md active:scale-95"
          >
            Add task <span className="text-xl">+</span>
          </button>
        </div>
        <div className="flex min-h-[24rem] w-[18.5rem] items-center justify-center rounded-xl bg-white p-6 drop-shadow-xl sm:w-[30.5rem]">
          {task.length ? (
            <ul className="flex flex-col gap-y-4 overflow-hidden">
              {task &&
                task.map((data) => (
                  <li key={data.index} className="flex items-start gap-x-4">
                    <input id={data.index} type="checkbox" className="peer mt-1.5" />
                    <label
                      htmlFor={data.index}
                      className=" w-5/6 sm:w-[90%] break-words peer-checked:text-charcoal/50"
                    >
                      {data.message}
                    </label>
                  </li>
                ))}
            </ul>
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

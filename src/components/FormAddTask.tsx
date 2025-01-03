import React, { useState } from "react";
import { TaskDataType } from "../App";
import ButtonAddTask from "./ButtonAddTask";

type FormAddTaskPropsType = {
  setTask: React.Dispatch<React.SetStateAction<TaskDataType[]>>;
  handleOpenForm: (isOpen: boolean) => void;
};

function FormAddTask({ setTask, handleOpenForm }: FormAddTaskPropsType) {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTask: TaskDataType = {
      id: Date.now(),
      message: input.trim(),
    };

    setTask((prev) => [newTask, ...prev]);
    setInput("");
    handleOpenForm(false);
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-between gap-y-5">
      <div>
        <input
          type="text"
          minLength={5}
          value={input}
          onChange={(event) => setInput(event?.target.value)}
          placeholder="New Task"
          className="w-full rounded-lg border border-solid border-charcoal/50 p-2.5 drop-shadow-md hover:border-charcoal"
          required
        />
      </div>
      <div className="flex justify-end">
        <ButtonAddTask type="submit" className="btn__add-task bg-mediumSlateBlue" />
      </div>
    </form>
  );
}

export default FormAddTask;

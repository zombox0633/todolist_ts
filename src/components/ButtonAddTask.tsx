import { ComponentPropsWithoutRef } from "react";

type ButtonAddTaskPropsType = ComponentPropsWithoutRef<"button">;

function ButtonAddTask({ ...props }: ButtonAddTaskPropsType) {
  return (
    <button {...props}>
      Add task <span className="text-xl">+</span>
    </button>
  );
}

export default ButtonAddTask;

import { TaskDataType } from "../App";
import ItemListMemo from "./ItemList";

type TaskListPropsType = {
  taskData: TaskDataType[];
};

function TaskList({ taskData }: TaskListPropsType) {
  return (
    <ul className="flex flex-col gap-y-4 overflow-hidden">
      {taskData && taskData.map((data) => <ItemListMemo key={data.id} data={data} />)}
    </ul>
  );
}

export default TaskList;

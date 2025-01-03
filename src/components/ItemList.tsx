import { memo } from "react";
import { TaskDataType } from "../App";

type ItemListType = {
  data: TaskDataType;
};

function ItemList({ data }: ItemListType) {
  return (
    <li className="flex items-start gap-x-4">
      <input id={`task-${data.id}`} type="checkbox" className="peer mt-1.5" />
      <label
        htmlFor={`task-${data.id}`}
        className="w-5/6 break-words peer-checked:text-charcoal/50 sm:w-[90%]"
      >
        {data.message}
      </label>
    </li>
  );
}

const ItemListMemo = memo(ItemList)
export default ItemListMemo;

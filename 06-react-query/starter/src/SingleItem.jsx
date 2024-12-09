import { hashQueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import customFetch from "./utils";
import { useDeleteTask, useUpdateTask } from "./ReactQueryHooks";

const SingleItem = ({ item }) => {

  const {updateTask} = useUpdateTask();
  const {deleteTask,DeleteDataIsLoading} = useDeleteTask();


  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.isDone}
        onChange={() => updateTask({taskId:item.id,isDone: !item.isDone})}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        disabled={DeleteDataIsLoading}
        onClick={() => deleteTask({taskId:item.id})}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;

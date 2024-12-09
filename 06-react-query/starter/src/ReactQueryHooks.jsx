import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import customFetch from "./utils";

export const useCreateTask = ()=>{
    const {data,isLoading} = useQuery({
        queryKey:["tasks"],
        queryFn:()=>customFetch.get('/'),
      });
      return {data,isLoading}
}
export const useUpdateTask = ()=>{
    const  queryClient =  useQueryClient();
    const {mutate:updateTask} = useMutation({

   
        mutationFn:({taskId,isDone})=> customFetch.patch(`/${taskId}`,{isDone}),
        onSuccess:()=>{
          queryClient.invalidateQueries({queryKey:[`tasks`]})
        },
        onError:(error)=>{
          toast.error(error)
        }
      })
      return {updateTask};
}
export const useDeleteTask = ()=>{  
    const  queryClient =  useQueryClient();
    const {mutate:deleteTask,isLoading:DeleteDataIsLoading} = useMutation({
   
    mutationFn:({taskId})=> customFetch.delete(`/${taskId}`),
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:[`tasks`]})
    },
    onError:(error)=>{
      toast.error(error)
    }
  })

  return({DeleteDataIsLoading,deleteTask})
}
const getTask = ()=>{}
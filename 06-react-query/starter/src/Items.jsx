
import { useCreateTask } from './ReactQueryHooks';
import SingleItem from './SingleItem';
const Items = ({  items}) => {

  const {isLoading,data} = useCreateTask();

  if(isLoading){
    return <p style={{marginTop:'1rem'}}>Loading...</p>
  }
console.log(data.data.taskList)
  return (
    <div className='items'>
      {data.data.taskList?.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;

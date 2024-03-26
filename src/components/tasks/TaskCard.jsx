import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { removeTask, updateStatus } from '../../redux/features/tasks/tasksSlice';

const TaskCard = ({ item }) => {
  console.log(item);
  const task = {
    id: 1,
    status: 'pending',
    title: 'Remove Button',
    description:
      'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
    date: '2023-08-28',
    assignedTo: 'Mir Hussain',
    priority: 'high',
  };
  const dispatch = useDispatch()
  let currentStatus;
  if (item.status === "pending") {
    currentStatus = "running"
  }
  else if (item.status === "running") {
    currentStatus = "done"
  }
  else {
    currentStatus = "archive"
  }
  return (
    <div className={`${item.status === "done" ? "bg-primary rounded-md p-5 text-white" : "bg-secondary/10 rounded-md p-5"}`}>
      <h1
        className={`text-lg font-semibold mb-3  ${task.priority === 'high' ? 'text-red-500' : ''
          } ${task.priority === 'medium' ? 'text-yellow-500' : ''} ${task.priority === 'low' ? 'text-green-500' : ''
          } ${item.status === 'done' ? 'text-white' : ''}  `}
      >
        {item?.title}
      </h1>
      <p className="mb-3">{item?.description}</p>
      <p className="text-sm">Assigned to - {item?.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.date}</p>
        <div className="flex gap-3">
          <button onClick={() => dispatch(removeTask(item.id))} title="Delete">

            {/* <button onClick={() => dispatch(removeTask(task.id))} title="Delete"> */}
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            onClick={() => dispatch(updateStatus({ id: item.id, status: currentStatus }))}
            title="In progress"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};


//   return (
//     <div className="bg-secondary/10 rounded-md p-5">
//       <h1
//         className={`text-lg font-semibold mb-3  ${task.priority === 'high' ? 'text-red-500' : ''
//           } ${task.priority === 'medium' ? 'text-yellow-500' : ''} ${task.priority === 'low' ? 'text-green-500' : ''
//           }`}
//       >
//         {task?.title}
//       </h1>
//       <p className="mb-3">{task?.description}</p>
//       <p className="text-sm">Assigned to - {task?.assignedTo}</p>
//       <div className="flex justify-between mt-3">
//         <p>{task?.date}</p>
//         <div className="flex gap-3">
//           <button title="Delete">
//             {/* <button onClick={() => dispatch(removeTask(task.id))} title="Delete"> */}
//             <TrashIcon className="h-5 w-5 text-red-500" />
//           </button>
//           <button

//             title="In progress"
//           >
//             <ArrowRightIcon className="h-5 w-5 text-primary" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

export default TaskCard;

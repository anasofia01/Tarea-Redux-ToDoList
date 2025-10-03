import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import TaskItem from '../taskItem/taskItem';
import type { Task } from '../../redux/slices/toDoSlice';
import './taskList.css';

const TaskList = () => {
	const tasks = useSelector((state: RootState) => state.toDo.tasks);

	return (
		<div className='task-list'>
			<h2 className='task-list-title'>My Tasks</h2>
			{tasks.length === 0 ? (
				<p className='empty-message'>✨ No tasks yet. Add your first one!</p>
			) : (
				<div className='task-list-items'>
					{tasks.map((task: Task) => (
						<TaskItem key={task.id} task={task} />
					))}
				</div>
			)}
		</div>
	);
};

export default TaskList;

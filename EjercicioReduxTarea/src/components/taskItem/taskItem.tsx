import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../../redux/slices/toDoSlice';
import type { Task } from '../../redux/slices/toDoSlice';
import './taskItem.css';

type Props = {
	task: Task;
};

const TaskItem = ({ task }: Props) => {
	const [isEditing, setIsEditing] = useState(false);
	const [title, setTitle] = useState(task.title);
	const [description, setDescription] = useState(task.description || '');
	const dispatch = useDispatch();

	const handleSave = () => {
		if (!title.trim()) return;
		dispatch(updateTask({ id: task.id, title, description }));
		setIsEditing(false);
	};

	return (
		<div className='task-item'>
			{isEditing ? (
				<div className='task-editing'>
					<input
						className='task-input'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder='Task title'
					/>
					<textarea
						className='task-textarea'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						placeholder='Task description'
					/>
					<div className='task-actions'>
						<button className='btn save' onClick={handleSave}>
							Save
						</button>
						<button className='btn cancel' onClick={() => setIsEditing(false)}>
							Cancel
						</button>
					</div>
				</div>
			) : (
				<div className='task-content'>
					<h3 className='task-title'>{task.title}</h3>
					{task.description && <p className='task-desc'>{task.description}</p>}
					<div className='task-actions'>
						<button className='btn edit' onClick={() => setIsEditing(true)}>
							Edit
						</button>
						<button className='btn delete' onClick={() => dispatch(deleteTask(task.id))}>
							Delete
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default TaskItem;

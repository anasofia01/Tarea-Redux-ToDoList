import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveTasks } from '../../redux/slices/toDoSlice';
import './taskForm.css';

const TaskForm = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!title.trim()) return;

		dispatch(saveTasks({ id: Date.now(), title, description }));
		setTitle('');
		setDescription('');
	};

	return (
		<form className='task-form' onSubmit={handleSubmit}>
			<input
				className='task-input'
				type='text'
				placeholder='Task title'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<textarea
				className='task-textarea'
				placeholder='Task description'
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button className='add-btn' type='submit'>
				Add Task
			</button>
		</form>
	);
};

export default TaskForm;

import TaskForm from '../components/taskForm/taskForm';
import TaskList from '../components/taskList/taskList';
import './toDoPage.css';

const TodoPage = () => {
	return (
		<div className='todo-page'>
			<h1 className='todo-title'>My Todo List</h1>
			<TaskForm />
			<TaskList />
		</div>
	);
};

export default TodoPage;

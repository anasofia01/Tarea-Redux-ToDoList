import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type Task = {
	id: number;
	title: string;
	description: string;
};

type InitialState = {
	tasks: Task[];
};

const initialState: InitialState = {
	tasks: [],
};

export const toDoSlice = createSlice({
	name: 'toDo',
	initialState,
	reducers: {
		saveTasks: (state, action: PayloadAction<Task>) => {
			state.tasks = [...state.tasks, action.payload];
		},

		updateTask: (state, action: PayloadAction<Task>) => {
			state.tasks = state.tasks.map((t) => (t.id === action.payload.id ? action.payload : t));
		},
		deleteTask: (state, action: PayloadAction<number>) => {
			state.tasks = state.tasks.filter((t) => t.id !== action.payload);
		},
	},
});

export const { saveTasks, updateTask, deleteTask } = toDoSlice.actions;
export default toDoSlice.reducer;

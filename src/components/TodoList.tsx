import React from 'react';
import { Todo } from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
	todos: Todo[];
	onToggle: (id: string) => void;
	onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
	return (
		<ul style={{ listStyleType: 'none', padding: 0 }}>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					todo={todo}
					onToggle={onToggle}
					onDelete={onDelete}
				/>
			))}
		</ul>
	);
};

export default TodoList;
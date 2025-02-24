import React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
	todo: Todo;
	onToggle: (id: string) => void;
	onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
	return (
		<li style={{
			display: 'flex',
			alignItems: 'center',
			padding: '8px',
			borderBottom: '1px solid #eee',
		}}>
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={() => onToggle(todo.id)}
				style={{ marginRight: '8px' }}
			/>
			<span style={{
				textDecoration: todo.completed ? 'line-through' : 'none',
				flexGrow: 1,
			}}>
				{todo.text}
			</span>
			<button onClick={() => onDelete(todo.id)}>Удалить</button>
		</li>
	);
};

export default TodoItem;
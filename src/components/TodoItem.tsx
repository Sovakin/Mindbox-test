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
			padding: '12px',
			background: '#2d3748',
			borderRadius: '6px',
			marginBottom: '8px',
			transition: 'all 0.2s ease',
			boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
			color: '#e5e7eb',
			animation: 'slideUp 0.5s ease-out',
		}}>
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={() => onToggle(todo.id)}
				style={{
					marginRight: '12px',
					width: '20px',
					height: '20px',
					accentColor: '#0070f3',
				}}
			/>
			<span style={{
				flexGrow: 1,
				textDecoration: todo.completed ? 'line-through' : 'none',
				color: todo.completed ? '#a0aec0' : '#e5e7eb',
				fontSize: '1.1rem',
				transition: 'color 0.2s ease',
			}}>
        {todo.text}
      </span>
			<button
				onClick={() => onDelete(todo.id)}
				style={{
					backgroundColor: '#e53e3e',
					padding: '6px 12px',
					marginLeft: '10px',
					animation: 'fadeIn 0.5s ease-out',
				}}
			>
				Удалить
			</button>
		</li>
	);
};

export default TodoItem;
import React, { useState } from 'react';

interface TodoInputProps {
	onAddTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
	const [text, setText] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (text.trim()) {
			onAddTodo(text);
			setText('');
		}
	};

	return (
		<form onSubmit={handleSubmit} style={{ marginBottom: '25px' }}>
			<div style={{
				position: 'relative',
				display: 'flex',
				alignItems: 'center',
			}}>
				<input
					type="text"
					placeholder="Добавить новую задачу..."
					value={text}
					onChange={(e) => setText(e.target.value)}
					style={{
						width: '100%',
						padding: '12px 16px',
						border: '2px solid #2d3748',
						borderRadius: '6px',
						fontSize: '1rem',
						background: '#2d3748',
						color: '#e5e7eb',
						transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
						animation: 'fadeIn 0.5s ease-out',
					}}
					onFocus={(e) => {
						const target = e.target as HTMLInputElement;
						target.style.borderColor = '#0070f3';
						target.style.boxShadow = '0 0 0 2px rgba(0, 112, 243, 0.2)';
					}}
					onBlur={(e) => {
						const target = e.target as HTMLInputElement;
						target.style.borderColor = '#2d3748';
						target.style.boxShadow = 'none';
					}}
				/>
				<button
					type="submit"
					style={{
						position: 'absolute',
						right: '8px',
						padding: '6px 12px',
						backgroundColor: text.trim() ? '#0070f3' : '#4a5568',
						color: 'white',
						animation: 'fadeIn 0.5s ease-out',
					}}
				>
					Добавить
				</button>
			</div>
		</form>
	);
};

export default TodoInput;
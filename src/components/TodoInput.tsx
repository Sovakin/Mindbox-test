import React, { useState } from 'react';

interface TodoInputProps {
	onAddTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
	const [text, setText] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (text.trim() !== '') {
			onAddTodo(text);
			setText('');
		}
	};

	return (
		<form onSubmit={handleSubmit} style={{ display: 'flex', marginBottom: '10px' }}>
			<input
				type="text"
				placeholder="Что нужно сделать?"
				value={text}
				onChange={e => setText(e.target.value)}
				style={{
					flexGrow: 1,
					padding: '8px',
					border: '1px solid #ccc',
					borderRadius: '4px',
					marginRight: '5px',
				}}
			/>
			<button type="submit">Добавить</button>
		</form>
	);
};

export default TodoInput;
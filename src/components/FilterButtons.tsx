import React from 'react';
import { FilterType } from '../types';

interface FilterButtonsProps {
	filter: FilterType;
	onFilterChange: (filter: FilterType) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ filter, onFilterChange }) => {
	const buttonStyle = (isActive: boolean) => ({
		padding: '8px 16px',
		marginRight: '8px',
		backgroundColor: isActive ? '#0070f3' : '#4a5568',
		color: isActive ? 'white' : '#a0aec0',
		borderRadius: '6px',
		transition: 'all 0.3s ease',
		animation: 'fadeIn 0.5s ease-out',
	});

	return (
		<div style={{ marginBottom: '20px' }}>
			<button
				style={buttonStyle(filter === 'all')}
				onClick={() => onFilterChange('all')}
			>
				Все
			</button>
			<button
				style={buttonStyle(filter === 'active')}
				onClick={() => onFilterChange('active')}
			>
				Активные
			</button>
			<button
				style={buttonStyle(filter === 'completed')}
				onClick={() => onFilterChange('completed')}
			>
				Завершенные
			</button>
		</div>
	);
};

export default FilterButtons;
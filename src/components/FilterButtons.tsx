import React from 'react';
import { FilterType } from '../types';

interface FilterButtonsProps {
	filter: FilterType;
	onFilterChange: (filter: FilterType) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ filter, onFilterChange }) => {
	return (
		<div style={{ marginBottom: '10px' }}>
			<button
				onClick={() => onFilterChange('all')}
				disabled={filter === 'all'}
				style={{ marginRight: '5px' }}
			>
				Все
			</button>
			<button
				onClick={() => onFilterChange('active')}
				disabled={filter === 'active'}
				style={{ marginRight: '5px' }}
			>
				Активные
			</button>
			<button
				onClick={() => onFilterChange('completed')}
				disabled={filter === 'completed'}
				style={{ marginRight: '5px' }}
			>
				Завершенные
			</button>
		</div>
	);
};

export default FilterButtons;
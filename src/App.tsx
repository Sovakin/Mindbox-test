import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import FilterButtons from './components/FilterButtons';
import { Todo, FilterType } from './types';
import './App.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState<FilterType>('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = () => {
    switch (filter) {
      case 'active': return todos.filter(todo => !todo.completed);
      case 'completed': return todos.filter(todo => todo.completed);
      default: return todos;
    }
  };

  const incompleteTodosCount = todos.filter(todo => !todo.completed).length;

  return (
      <div className="App">
        <h1>Мои задачи</h1>
        <TodoInput onAddTodo={addTodo} />
        <FilterButtons filter={filter} onFilterChange={setFilter} />
        <TodoList
            todos={filteredTodos()}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
        />
        {todos.length > 0 && (
            <div className="footer">
              <span>Осталось задач: {incompleteTodosCount}</span>
              <button onClick={clearCompleted}>
                Очистить завершенные
              </button>
            </div>
        )}
      </div>
  );
}

export default App;
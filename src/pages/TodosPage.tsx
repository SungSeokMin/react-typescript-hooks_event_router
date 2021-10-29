import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ITodo } from '../types/types';
import TodoItem from '../components/TodoItem';

const TodosPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();

    return () => {
      fetchTodos();
    };
  }, [todos]);

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        'https://jsonplaceholder.typicode.com/todos?_limit=10'
      );
      setTodos(response.data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div>
      <TodoItem todos={todos} />
    </div>
  );
};

export default TodosPage;

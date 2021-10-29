import React from 'react';
import { ITodo } from '../types/types';

interface TodoItemProps {
  todos: ITodo[];
}

const TodoItem = ({ todos }: TodoItemProps) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input type="checkbox" checked={todo.completed} readOnly />
          {todo.id}, {todo.title}
        </div>
      ))}
    </div>
  );
};

export default TodoItem;

// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

test('renders TodoList component', () => {
  render(<TodoList />);
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Add a new todo/i)).toBeInTheDocument();
});

test('allows users to add a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/Add a new todo/i);
  const button = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);

  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('allows users to toggle a todo item', () => {
  render(<TodoList />);
  const todo = screen.getByText(/Learn React/i);
  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: line-through');
});

test('allows users to delete a todo item', () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText(/Delete/i)[0];
  fireEvent.click(deleteButton);
  expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
});

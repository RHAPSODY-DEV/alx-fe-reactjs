import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  test('renders the initial todo items', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo List')).toBeInTheDocument();
  });

  test('can add a new todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText(/add a new todo/i), {
      target: { value: 'Write tests' },
    });
    fireEvent.click(screen.getByText(/add todo/i));
    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  test('can toggle a todo as completed', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  test('can delete a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Build a Todo List');
    fireEvent.click(screen.getByText(/delete/i, { selector: 'button' }));
    expect(todoItem).not.toBeInTheDocument();
  });
});

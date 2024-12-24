import React from 'react';
import { TodoProvider } from '../src/TodoContext';
import HomeScreen from '../src/HomeScreen';

export default function Page() {
  return (
    <TodoProvider>
      <HomeScreen />
    </TodoProvider>
  );
}

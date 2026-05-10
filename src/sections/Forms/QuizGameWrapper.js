'use client';

import { Provider } from 'react-redux';
import { store } from '../../../store'; // Adjust path
import QuizGame from './QuizGame';

export default function QuizGameWrapper() {
  return (
    <Provider store={store}>
      <QuizGame />
    </Provider>
  );
}
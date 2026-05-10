'use client';

import { Provider } from 'react-redux';
import { store } from '../../../store';
import QuizGame from '../../../sections/Forms/QuizGame';

export default function QuizGamePage() {
  return (
    <Provider store={store}>
      <QuizGame />
    </Provider>
  );
}
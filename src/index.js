import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppbarProvider } from './app-context/appbar-context';
import { QuizProvider } from './app-context/quiz-context';
import './global.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppbarProvider>
      <QuizProvider>
        <App />
      </QuizProvider>
    </AppbarProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

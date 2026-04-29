import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.scss'
import App from './app/App';

const root = document.querySelector('#root');

if (!root) {
  throw new Error("Cannot find '#root' element")
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

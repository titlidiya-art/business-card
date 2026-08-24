import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const rootEl = document.getElementById('root');

if (rootEl) {
  try {
    createRoot(rootEl).render(<App />);
  } catch (error) {
    rootEl.innerHTML = `
      <div style="min-height:100vh;padding:2rem;background:#12161c;color:#e8eef5;font-family:monospace">
        <h1 style="font-size:1.4rem;margin:0 0 1rem">Ошибка загрузки визитки</h1>
        <p>Запустите проект через <code>start.bat</code> или <code>npm start</code>.</p>
        <pre style="opacity:.7;margin-top:1rem;white-space:pre-wrap">${String(error)}</pre>
      </div>
    `;
  }
}

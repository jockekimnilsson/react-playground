import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import CounterApp from './Counter.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <CounterApp />
  </React.StrictMode>
)
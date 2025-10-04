import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/ThemeContext/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
<ThemeProvider>
  <App />
</ThemeProvider>
)

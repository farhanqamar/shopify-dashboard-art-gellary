import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './Art-Gallery/src-miguel/App.jsx';
import AdminApp from './src-dashboard/AdminApp.tsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/*' element={<App/>}/>
          <Route path='/admin/*' element={<AdminApp />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

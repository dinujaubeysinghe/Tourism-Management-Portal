import { Routes, Route, Navigate } from 'react-router-dom';
import DefaultLayout from './layouts/AuthorizedUserLaysout.jsx';
import GuestLayout from './layouts/GuestUserLayout.jsx';
import HomePage from './pages/default/HomePage.jsx';

function App() {
  return (
    <Routes>
      {/* Protected routes */}
      <Route element={<DefaultLayout />}>
        
      </Route>

      {/* Guest-only routes */}
      <Route element={<GuestLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App

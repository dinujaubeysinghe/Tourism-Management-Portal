import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/AuthorizedUserLaysout.jsx';
import GuestLayout from './layouts/GuestUserLayout.jsx';
import HomePage from './pages/default/HomePage.jsx';
import AboutPage from './pages/default/AboutPage.jsx';
import ContactPage from './pages/default/ContactPage.jsx';

function App() {
  return (
    <Routes>
       {/* Guest only routes */}
      <Route element={<GuestLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/excursions" element={<div>Excursions Page</div>} />
        <Route path="/voiceover" element={<div>Activities Page</div>} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      {/*Protected Layout*/}
      <Route element={<DefaultLayout />}>
        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="/users" element={<div>Users Page</div>} />
      </Route>
    </Routes>
  )
}

export default App

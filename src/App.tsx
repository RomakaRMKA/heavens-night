import { Route, Routes } from 'react-router-dom'
import Home from './Home.tsx'
import ContactPage from './pages/ContactPage.tsx'
import GalleryPage from './pages/GalleryPage.tsx'
import HomePage from './pages/HomePage.tsx'
import MenuPage from './pages/MenuPage.tsx'
import ServicesPage from './pages/ServicesPage.tsx'
import StaffPage from './pages/StaffPage.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<HomePage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="staff" element={<StaffPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App

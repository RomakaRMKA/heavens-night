import { Route, Routes } from 'react-router-dom'
import Home from './Home.tsx'
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
      </Route>
    </Routes>
  )
}

export default App

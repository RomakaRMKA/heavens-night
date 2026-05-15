import { NavLink, Outlet, useLocation } from 'react-router-dom'
import heavensnightLogo from './assets/heavensnight_logo.png'
import './Home.css'

const navigationItems = [
  { key: 'home', label: 'Home', to: '/' },
  { key: 'menu', label: 'Menu', to: '/menu' },
  { key: 'services', label: 'Services', to: '/services' },
  { key: 'staff', label: 'Staff', to: '/staff' }
]

function App() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className={`page-shell ${isHomePage ? 'is-home' : 'is-inner'}`}>
      <section id="page-top" className="page-header">
        <div className="logo">
          <img src={heavensnightLogo} />
        </div>
        <nav aria-label="Primary" className="linear-nav">
          <ul>
            {navigationItems.map((item) => (
              <li key={item.key}>
                <NavLink
                  className={({ isActive }) => (isActive ? 'is-active' : '')}
                  to={item.to}
                  end={item.key === 'home'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="location-note">
          <h4>Moogle (Chaos), Shirogane Ward 27, Plot 41</h4>
        </div>
      </section>

      <main className="page-content" aria-live="polite">
        <Outlet />
      </main>
    </div>
  )
}

export default App

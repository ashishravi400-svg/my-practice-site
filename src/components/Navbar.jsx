import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/workouts', label: 'Workouts' },
  { path: '/diet', label: 'Diet' },
  { path: '/exercises', label: 'Exercises' },
  { path: '/tracker', label: 'Tracker' },
  { path: '/results', label: 'Results' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <nav style={{
      background: '#0a0a0a',
      padding: '15px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: '37px',
      zIndex: 1000,
      boxShadow: '0 2px 20px rgba(0,0,0,0.5)'
    }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h2 style={{ color: '#f5a623', margin: 0, fontSize: '22px', letterSpacing: '1px' }}>💪 FitIndian</h2>
      </Link>

      <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap' }}>
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              color: location.pathname === item.path ? '#f5a623' : '#ccc',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: location.pathname === item.path ? 'bold' : '500',
              borderBottom: location.pathname === item.path ? '2px solid #f5a623' : '2px solid transparent',
              paddingBottom: '3px',
              transition: 'all 0.3s'
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
import { useState } from 'react'
import './styles/App.css'
import Dashboard from './pages/Dashboard'
import Forecast from './pages/Forecast'
import SurfSpots from './pages/SurfSpots'

type Page = 'dashboard' | 'forecast' | 'surfspots'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard')

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />
      case 'forecast':
        return <Forecast />
      case 'surfspots':
        return <SurfSpots />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="app">
      <nav className="navbar">
        <h1>Tide-X Surf Bali</h1>
        <ul>
          <li>
            <button 
              onClick={() => setCurrentPage('dashboard')}
              className={currentPage === 'dashboard' ? 'active' : ''}
            >
              Dashboard
            </button>
          </li>
          <li>
            <button 
              onClick={() => setCurrentPage('forecast')}
              className={currentPage === 'forecast' ? 'active' : ''}
            >
              Forecast
            </button>
          </li>
          <li>
            <button 
              onClick={() => setCurrentPage('surfspots')}
              className={currentPage === 'surfspots' ? 'active' : ''}
            >
              Surf Spots
            </button>
          </li>
        </ul>
      </nav>
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  )
}

export default App

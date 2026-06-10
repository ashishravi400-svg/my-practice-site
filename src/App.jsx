import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Ticker from './components/Ticker'
import Home from './pages/Home/Home'
import Workouts from './pages/Workouts/Workouts'
import Diet from './pages/Diet/Diet'
import Exercises from './pages/Exercises/Exercises'
import Tracker from './pages/Tracker/Tracker'
import Results from './pages/Results/Results'

export default function App() {
  return (
    <div>
      <Ticker />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  )
}
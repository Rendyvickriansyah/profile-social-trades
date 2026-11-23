import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import SignalPage from './pages/SignalPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signal" element={<SignalPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  )
}

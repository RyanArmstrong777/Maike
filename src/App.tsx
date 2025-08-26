import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Navbar from './components/navbar/Navbar'
import './App.css'
import './components/navbar/Navbar.css'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Navbar from './components/navbar/Navbar'
import './App.css'
import './components/navbar/Navbar.css'
import Pricing from './pages/pricing/Pricing'
import Login from './pages/auth/login/Login'
import Register from './pages/auth/register/Register'
import Onboarding from './pages/onboarding/Onboarding'
import Sidebar from './components/sidebar/Sidebar'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div style={{display: "flex", flexDirection: "row", maxHeight: "calc(100vh - (var(--spacing-sm) * 4) - 2rem)"}}>
                <Sidebar />
                <div className="app-body">
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/onboarding" element={<Onboarding />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

import './Login.css'
import '../../../components/inputs/TextInput.css'
import { useState } from 'react';
import { Eye } from 'lucide-react';
import '../../../components/inputs/buttons/InputOption.css'

function Login() {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="header-container">
            <div className="centered" style={{textAlign: "center", flexDirection: "row"}}>
                <h2 style={{fontWeight: "bold"}}>Log in |<span style={{fontWeight: "normal", color: "var(--text-light)"}}> start making!</span></h2>
            </div>
            <div className="inputs-container">
                <input type="text" className="text-input" placeholder='Email' />
                <div style={{position: "relative"}}>
                    <input type={showPassword ? "text" : "password"} className="text-input" placeholder='Password' />
                    <button className="input-option centered" onClick={() => setShowPassword(prev => !prev)}>
                        <Eye className="icon" style={{width: "1.45rem"}} />
                    </button>
                </div>
                <a href="/register" id="forgot-password" style={{width: "100%"}}>
                    <h6 className="navbar-text">Forgot password?</h6>
                </a>
                <div className="seperator centered">
                    <h5 style={{backgroundColor: "var(--background)", zIndex: "2", padding: "var(--spacing-sm)", color: "var(--border)"}}>or</h5>
                </div>
                <button className="text-input centered">
                    <i className="fa-brands fa-google" style={{fontSize: "var(--fontsize-sm)"}}></i>
                    <h5>Log in with Google</h5>
                </button>
                <button className="text-input centered">
                    <i className="fa-brands fa-apple" style={{fontSize: "var(--fontsize-md)"}}></i>
                    <h5>Log in with Apple</h5>
                </button>
                <div className="seperator centered">
                    <h5 style={{backgroundColor: "var(--background)", zIndex: "2", padding: "var(--spacing-sm)", color: "var(--text)"}}>Don't have an account?</h5>
                </div>
                <a className="text-input centered" href="/register" style={{backgroundColor: "var(--text)"}}>
                    <h5 style={{color: "var(--background)"}}>Sign up</h5>
                </a>
            </div>
        </div>
    );
}

export default Login;
import './Register.css'
import '../../../components/inputs/TextInput.css'
import { useState } from 'react';
import { Eye } from 'lucide-react';
import '../../../components/inputs/buttons/InputOption.css'

function Register() {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="header-container">
            <div className="centered" style={{textAlign: "center", flexDirection: "row"}}>
                <h2 style={{fontWeight: "bold"}}>Register |<span style={{fontWeight: "normal", color: "var(--text-light)"}}> Join the fun!</span></h2>
            </div>
            <div className="inputs-container">
                <input type="text" className="text-input" placeholder='Full name*' required />
                <input type="text" className="text-input" placeholder='Email*' />
                <div style={{position: "relative"}}>
                    <input type={showPassword ? "text" : "password"} className="text-input" placeholder='Password*' />
                    <button className="input-option centered" onClick={() => setShowPassword(prev => !prev)}>
                        <Eye className="icon" style={{width: "1.45rem"}} />
                    </button>
                </div>
                <input type={showPassword ? "text" : "password"} className="text-input" placeholder='Confirm password*' />
                <div className="seperator centered">
                    <h5 style={{backgroundColor: "var(--background)", zIndex: "2", padding: "var(--spacing-sm)", color: "var(--border)"}}>or</h5>
                </div>
                <button className="text-input centered">
                    <i className="fa-brands fa-google" style={{fontSize: "var(--fontsize-sm)"}}></i>
                    <h5>Sign up with Google</h5>
                </button>
                <button className="text-input centered">
                    <i className="fa-brands fa-apple" style={{fontSize: "var(--fontsize-md)"}}></i>
                    <h5>Sign up with Apple</h5>
                </button>
                <div className="seperator centered">
                    <h5 style={{backgroundColor: "var(--background)", zIndex: "2", padding: "var(--spacing-sm)", color: "var(--text)"}}>Already have an account?</h5>
                </div>
                <a className="text-input centered" href="/login" style={{backgroundColor: "var(--text)"}}>
                    <h5 style={{color: "var(--background)"}}>Log in</h5>
                </a>
            </div>
        </div>
    );
}

export default Register;
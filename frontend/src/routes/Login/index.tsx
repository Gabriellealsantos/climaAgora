import { useState } from 'react';
import './styles.css';

export default function Login() {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="login-wrapper">
            <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container">
                <div className={`form-container ${isSignUp ? 'sign-up-container' : 'sign-in-container'}`}>
                    <form action="#">
                        <h1>{isSignUp ? 'Create Account' : 'Sign in'}</h1>
                        <span>{isSignUp ? 'use seu e-mail para cadastro' : ''}</span>
                        {isSignUp && <input type="text" placeholder="Nome" />}
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        {!isSignUp && <a href="#">Esqueceu sua senha?</a>}
                        <button>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Bem vindo de volta!</h1>
                            <p>Para se manter conectado conosco, faça login com suas informações pessoais</p>
                            <button className="ghost" onClick={toggleForm}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Olá amigo(a)!</h1>
                            <p>Insira seus dados pessoais e comece sua jornada conosco</p>
                            <button className="ghost" onClick={toggleForm}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

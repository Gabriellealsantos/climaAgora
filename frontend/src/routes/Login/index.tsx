/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as authService from '../../services/auth-service';
import * as forms from '../../utils/forms';
import FormInput from '../../components/FormInput';
import { ContextToken } from '../../utils/context-token';
import './styles.css';

export default function Login() {
    const [isSignUp, setIsSignUp] = useState(false);

    const { setContextTokenPayload } = useContext(ContextToken);

    const navigate = useNavigate();

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    const [submitResponseFail, setSubmitResponseFail] = useState(false);

    const [formData, setFormData] = useState<any>({
        username: {
            value: "",
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Email",
            validation: function (value: string) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
            },
            message: "Favor informar um email válido",
        },
        password: {
            value: "",
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Senha",
        }
    })

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setSubmitResponseFail(false);

        const formDataValidated = forms.dirtyAndValidateAll(formData);

        if (forms.hasAnyInvalid(formDataValidated)) {
            setFormData(formDataValidated);
            return;
        }


        authService.loginRequest(forms.toValues(formData))
            .then(response => {
                authService.saveAccessToken(response.data.access_token);
                setContextTokenPayload(authService.getAccessTokenPayload());
                navigate("/cart");
            })
            .catch(() => {
                setSubmitResponseFail(true);
            })
    }


    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value));
    }

    function handleTurnDirty(name: string) {
        setFormData(forms.dirtyAndValidate(formData, name));
    }

    return (
        <div className="login-wrapper">
            <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container">
                <div className={`form-container ${isSignUp ? 'sign-up-container' : 'sign-in-container'}`}>
                    <h5 className='voltar-styles'><Link to='/home'>Voltar</Link></h5>
                    <form action="#" onSubmit={handleSubmit}>
                        <h1>{isSignUp ? 'Create Account' : 'Sign in'}</h1>
                        <span>{isSignUp ? 'use seu e-mail para cadastro' : ''}</span>
                        
                        {isSignUp &&
                            <input type="text" placeholder="Nome"
                            />}

                        <FormInput
                            {...formData.username}
                            className="dsc-form-control"
                            onTrunDirty={handleTurnDirty}
                            onChange={handleInputChange}
                        />

                        <div className="dsc-form-error">{formData.username.message} </div>

                        <FormInput
                            {...formData.password}
                            className="dsc-form-control"
                            onTrunDirty={handleTurnDirty}
                            onChange={handleInputChange}
                        />

                        {
                            submitResponseFail &&
                            <div className="dsc-form-global-error">
                                Usuário ou senha inválidos
                            </div>
                        }

                        <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
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

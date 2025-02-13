/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/auth-service';
import * as forms from '../../utils/forms';
import FormInput from '../../components/FormInput';
import { ContextToken } from '../../utils/context-token';
import './styles.css';

export default function Login() {
    const [isSignUp, setIsSignUp] = useState(false);
    const { setContextTokenPayload } = useContext(ContextToken);
    const navigate = useNavigate();

    // Estados separados para cada formulário
    const [loginFormData, setLoginFormData] = useState<any>({
        username: {
            value: "",
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Email",
            validation: (value: string) =>
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase()),
            message: "Favor informar um email válido",
        },
        loginPassword: {
            value: "",
            id: "loginPassword",
            name: "loginPassword",
            type: "password",
            placeholder: "Senha",
        },
    });

    const initialSignUpFormData = {
        firstName: {
            value: "",
            id: "firstName",
            name: "firstName",
            type: "text",
            placeholder: "Nome",
        },
        lastName: {
            value: "",
            id: "lastName",
            name: "lastName",
            type: "text",
            placeholder: "Sobrenome",
        },
        email: {
            value: "",
            id: "email",
            name: "email",
            type: "text",
            placeholder: "Email",
            validation: (value: string) =>
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value),
            message: "Favor informar um email válido",
        },
        signUpPassword: {
            value: "",
            id: "signUpPassword",
            name: "signUpPassword",
            type: "password",
            placeholder: "Senha",
            validation: (value: string) =>
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/.test(value),
            message:
                "A senha deve ter pelo menos 8 caracteres, 1 letra maiúscula, 1 número e 1 símbolo",
        },
    };

    const [signUpFormData, setSignUpFormData] = useState<any>(initialSignUpFormData);
    const [submitResponseFailLogin, setSubmitResponseFailLogin] = useState(false);
    const [submitResponseFailSignUp, setSubmitResponseFailSignUp] = useState(false);

    // Handlers para o formulário de Login
    function handleLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSubmitResponseFailLogin(false);

        const validated = forms.dirtyAndValidateAll(loginFormData);
        if (forms.hasAnyInvalid(validated)) {
            setLoginFormData(validated);
            return;
        }

        const loginData = {
            username: loginFormData.username.value,
            password: loginFormData.loginPassword.value,
        };

        authService.loginRequest(loginData)
            .then(response => {
                authService.saveAccessToken(response.data.access_token);
                setContextTokenPayload(authService.getAccessTokenPayload());
                navigate("/");
            })
            .catch(error => {
                console.error("Erro no login:", error);
                setSubmitResponseFailLogin(true);
            });
    }

    // Handlers para o formulário de Sign Up
    function handleSignUp(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSubmitResponseFailSignUp(false);

        const validated = forms.dirtyAndValidateAll(signUpFormData);
        if (forms.hasAnyInvalid(validated)) {
            setSignUpFormData(validated);
            return;
        }

        const signUpData = {
            firstName: signUpFormData.firstName.value.trim(),
            lastName: signUpFormData.lastName.value.trim(),
            email: signUpFormData.email.value.trim(),
            password: signUpFormData.signUpPassword.value,
        };

        authService.signUpRequest(signUpData)
            .then(() => {
                setSignUpFormData(initialSignUpFormData);
                setIsSignUp(false);
            })
            .catch(() => {
                setSubmitResponseFailSignUp(true);
            });
    }

    // Handlers de input para login e sign up separadamente
    function handleLoginInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setLoginFormData(forms.updateAndValidate(loginFormData, event.target.name, event.target.value));
    }

    function handleSignUpInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSignUpFormData(forms.updateAndValidate(signUpFormData, event.target.name, event.target.value));
    }

    function handleTurnDirtyLogin(name: string) {
        setLoginFormData(forms.dirtyAndValidate(loginFormData, name));
    }

    function handleTurnDirtySignUp(name: string) {
        setSignUpFormData(forms.dirtyAndValidate(signUpFormData, name));
    }

    function toggleForm() {
        setIsSignUp(prev => !prev);
    }

    return (
        <div className="login-wrapper">
            <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container">
                {/* Formulário de Cadastro */}
                <div className="form-container sign-up-container">
                    {isSignUp && (
                        <form onSubmit={handleSignUp}>
                            <h1>Create Account</h1>
                            <FormInput
                                {...signUpFormData.firstName}
                                className="dsc-form-control"
                                onTrunDirty={handleTurnDirtySignUp}
                                onChange={handleSignUpInputChange}
                            />
                            <FormInput
                                {...signUpFormData.lastName}
                                className="dsc-form-control"
                                onTrunDirty={handleTurnDirtySignUp}
                                onChange={handleSignUpInputChange}
                            />
                            <FormInput
                                {...signUpFormData.email}
                                className="dsc-form-control"
                                onTrunDirty={handleTurnDirtySignUp}
                                onChange={handleSignUpInputChange}
                            />
                            <FormInput
                                {...signUpFormData.signUpPassword}
                                className="dsc-form-control"
                                onTrunDirty={handleTurnDirtySignUp}
                                onChange={handleSignUpInputChange}
                            />
                            {signUpFormData.signUpPassword.invalid === "true" && (
                                <div className="dsc-form-error mb20">
                                    {signUpFormData.signUpPassword.message}
                                </div>
                            )}
                            {submitResponseFailSignUp && (
                                <div className="dsc-form-global-error-email mb20">
                                    Usuário já cadastrado com esse email
                                </div>
                            )}
                            <button type="submit">Sign Up</button>
                        </form>
                    )}
                </div>

                {/* Formulário de Login */}
                <div className="form-container sign-in-container">
                    {!isSignUp && (
                        <form onSubmit={handleLogin}>
                            <h1>Sign In</h1>
                            <FormInput
                                {...loginFormData.username}
                                className="dsc-form-control"
                                onTrunDirty={handleTurnDirtyLogin}
                                onChange={handleLoginInputChange}
                            />
                            <FormInput
                                {...loginFormData.loginPassword}
                                className="dsc-form-control"
                                onTrunDirty={handleTurnDirtyLogin}
                                onChange={handleLoginInputChange}
                            />
                            {submitResponseFailLogin && (
                                <div className="dsc-form-global-error mb20">
                                    Usuário ou senha inválidos
                                </div>
                            )}
                            <button type="submit">Sign In</button>
                        </form>
                    )}
                </div>

                {/* Overlay para alternar os formulários */}
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

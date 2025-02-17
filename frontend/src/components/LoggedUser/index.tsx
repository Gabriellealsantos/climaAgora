import { Link } from 'react-router-dom';
import * as authService from '../../services/auth-service';
import { useContext } from 'react';
import { ContextToken } from '../../utils/context-token';
import loginImg from '../../assets/entrar.png';

export default function LoggedUser() {
    const { contextTokenPayload, setContextTokenPayload } = useContext(ContextToken);

    function handleLogoutClick() {
        authService.logout();
        setContextTokenPayload(undefined);
    }
    
    return (
        contextTokenPayload && authService.isAuthenticated()
            ? (
                <div className="dsc-user-container">

                    <div className="dsc-favorites">
                        <Link to={"/favorite"}><h5>Favoritas</h5></Link>
                        
                    </div>

                    <div className="dsc-logged-user">
                        <h5>{contextTokenPayload.username}</h5>
                        <span onClick={handleLogoutClick}>Sair</span>
                    </div>


                </div>
            )
            : (
                <Link to='/login'><img src={loginImg} alt="Login" /></Link>
            )
    );
}

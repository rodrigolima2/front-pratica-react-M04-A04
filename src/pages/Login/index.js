import { Link } from 'react-router-dom';

import './styles.css';

function Login() {
    return (
        <div className="Login">
            <Link to="/cadastro">Cadastro</Link>
        </div>
    );
}

export default Login;
import { Link } from 'react-router-dom';

import './styles.css';

function Cadastro() {
    return (
        <div className="Cadastro">
            <div className="Cadastro__form">

            </div>
            <Link to="/Login">Login</Link>
        </div>
    );
}

export default Cadastro;
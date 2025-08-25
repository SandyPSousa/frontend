import React, { useState } from 'react';
import axios from 'axios';

function Login({ onLoginSuccess }) {
    const [formData, setFormData] = useState({ email: '', senha: '' });
    const [mensagem, setMensagem] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMensagem('Autenticando...');
        try {
            const response = await axios.post('http://localhost:8080/api/usuarios/login', formData);
            setMensagem('Login bem-sucedido!');
            onLoginSuccess(response.data); 
        } catch (error) {
            setMensagem('Erro: Email ou senha inválidos.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Senha:</label>
                    <input type="password" name="senha" value={formData.senha} onChange={handleChange} required />
                </div>
                <button type="submit">Entrar</button>
            </form>
            {mensagem && <p>{mensagem}</p>}
        </div>
    );
}

export default Login;
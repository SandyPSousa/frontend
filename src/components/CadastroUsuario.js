import React, { useState } from 'react';
import axios from 'axios';

function CadastroUsuario() {

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: ''
    });
    const [mensagem, setMensagem] = useState(''); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMensagem('Enviando...');

        try {
            const response = await axios.post('http://localhost:8080/api/usuarios', formData);

            setMensagem(`Usuário '${response.data.nome}' cadastrado com sucesso!`);

            setFormData({ nome: '', email: '', senha: '' });

        } catch (error) {
            if (error.response && error.response.data) {
                setMensagem(`Erro: ${error.response.data.message || 'Não foi possível cadastrar.'}`);
            } else {
                setMensagem('Erro de conexão com o servidor. Verifique se o backend está rodando.');
            }
        }
    };

    return (
        <div>
            <h2>Cadastro de Novo Usuário</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        name="senha"
                        value={formData.senha}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
            {mensagem && <p>{mensagem}</p>}
        </div>
    );
}

export default CadastroUsuario;
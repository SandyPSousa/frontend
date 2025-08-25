import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RegistroAtividade({ usuario, onAtividadeRegistrada }) {
    const [atividades, setAtividades] = useState([]);
    const [formData, setFormData] = useState({
        atividadeFisicaId: '',
        data: new Date().toISOString().split('T')[0],
        duracaoMinutos: '',
        distanciaKm: ''
    });
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        const fetchAtividades = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/atividades');
                setAtividades(response.data);
                if (response.data.length > 0) {
                    setFormData(prev => ({ ...prev, atividadeFisicaId: response.data[0].id }));
                }
            } catch (error) {
                console.error("Erro ao buscar atividades:", error);
                setMensagem("Erro ao carregar tipos de atividade.");
            }
        };
        fetchAtividades();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const valor = name === 'duracaoMinutos' || name === 'distanciaKm' || name === 'atividadeFisicaId'
            ? Number(value)
            : value;
        setFormData({ ...formData, [name]: valor });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMensagem('Registrando...');

        const payload = {
            usuario: { id: usuario.id },
            atividadeFisica: { id: formData.atividadeFisicaId },
            data: formData.data,
            duracaoMinutos: formData.duracaoMinutos,
            distanciaKm: formData.distanciaKm
        };

        try {
            await axios.post('http://localhost:8080/api/registros-atividade', payload);
            setMensagem('Atividade registrada com sucesso!');
            setFormData(prev => ({ ...prev, duracaoMinutos: '', distanciaKm: '' }));
            if (onAtividadeRegistrada) {
                onAtividadeRegistrada();
        }
     } catch (error) {
            console.error("Erro ao registrar atividade:", error);
            setMensagem('Erro ao registrar atividade. Verifique os dados.');
        }
    };

    return (
        <div style={{ marginTop: '40px' }}>
            <h2>Registrar Nova Atividade</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Tipo de Atividade:</label>
                    <select name="atividadeFisicaId" value={formData.atividadeFisicaId} onChange={handleChange} required style={{width: '100%', padding: '12px', border: '1px solid #dcdcdc', borderRadius: '8px'}}>
                        {atividades.map(atividade => (
                            <option key={atividade.id} value={atividade.id}>
                                {atividade.nome}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Duração (minutos):</label>
                    <input type="number" name="duracaoMinutos" value={formData.duracaoMinutos} onChange={handleChange} required />
                </div>
                <div>
                    <label>Distância (km):</label>
                    <input type="number" step="0.1" name="distanciaKm" value={formData.distanciaKm} onChange={handleChange} required />
                </div>
                <button type="submit">Registrar Atividade</button>
            </form>
            {mensagem && <p>{mensagem}</p>}
        </div>
    );
}

export default RegistroAtividade;
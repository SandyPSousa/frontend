import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HistoricoAtividades({ usuario, refreshKey }) {
    const [historico, setHistorico] = useState([]);
    const [mensagem, setMensagem] = useState('Carregando histórico...');

    useEffect(() => {
        if (usuario && usuario.id) {
            const fetchHistorico = async () => {
                try {
                    const response = await axios.get(`http://localhost:8080/api/registros-atividade/usuario/${usuario.id}`);
                    setHistorico(response.data);
                    if (response.data.length === 0) {
                        setMensagem('Nenhuma atividade registrada ainda.');
                    }
                } catch (error) {
                    console.error("Erro ao buscar histórico:", error);
                    setMensagem('Não foi possível carregar o histórico.');
                }
            };
            fetchHistorico();
        }
    }, [usuario, refreshKey]); 
    if (historico.length === 0) {
        return <div><h3>Histórico de Atividades</h3><p>{mensagem}</p></div>;
    }

    return (
        <div style={{ marginTop: '30px', textAlign: 'left' }}>
            <h3>Histórico de Atividades</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f0f4f8' }}>
                        <th style={{ padding: '8px', border: '1px solid #ddd' }}>Data</th>
                        <th style={{ padding: '8px', border: '1px solid #ddd' }}>Atividade</th>
                        <th style={{ padding: '8px', border: '1px solid #ddd' }}>Duração (min)</th>
                        <th style={{ padding: '8px', border: '1px solid #ddd' }}>Distância (km)</th>
                    </tr>
                </thead>
                <tbody>
                    {historico.map(reg => (
                        <tr key={reg.id}>
                            <td style={{ padding: '8px', border: '1px solid #ddd' }}>{new Date(reg.data).toLocaleDateString()}</td>
                            <td style={{ padding: '8px', border: '1px solid #ddd' }}>{reg.atividadeFisica.nome}</td>
                            <td style={{ padding: '8px', border: '1px solid #ddd' }}>{reg.duracaoMinutos}</td>
                            <td style={{ padding: '8px', border: '1px solid #ddd' }}>{reg.distanciaKm}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default HistoricoAtividades;
import React, { useState } from 'react';
import './App.css';
import CadastroUsuario from './components/CadastroUsuario';
import Login from './components/Login';
import RegistroAtividade from './components/RegistroAtividade';
import HistoricoAtividades from './components/HistoricoAtividades';

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  const [refreshHistoricoKey, setRefreshHistoricoKey] = useState(0);

  const handleLoginSuccess = (usuario) => {
    setUsuarioLogado(usuario);
  };

  const handleLogout = () => {
    setUsuarioLogado(null);
  };

  const handleAtividadeRegistrada = () => {
    setRefreshHistoricoKey(prevKey => prevKey + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Motion Log</h1>
        
        {!usuarioLogado ? (
          <div>
            <Login onLoginSuccess={handleLoginSuccess} />
            <hr style={{width: '100%', margin: '40px 0', border: '1px solid #e6e9f0'}} />
            <CadastroUsuario />
          </div>
        ) : (
          <div>
            <h2>Bem-vindo(a), {usuarioLogado.nome}!</h2>

            <RegistroAtividade 
                usuario={usuarioLogado} 
                onAtividadeRegistrada={handleAtividadeRegistrada} 
            />
            
            <HistoricoAtividades 
                usuario={usuarioLogado} 
                refreshKey={refreshHistoricoKey} 
            />

            <button onClick={handleLogout} style={{marginTop: '30px', backgroundColor: '#d9534f'}}>
              Sair (Logout)
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
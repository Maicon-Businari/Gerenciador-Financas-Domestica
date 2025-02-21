import { BrowserRouter as Router, Routes as Switch, Route, Link } from 'react-router-dom';


import './App.css';

import Layout from './components/layout/Layout';
import PaginaPrincipal from './components/paginaPrincipal/PaginaPrincipal';

// Componentes de Pessoas
import CadastrarPessoa from './components/paginasPessoa/CadastrarPessoa';
import BuscarPessoa from './components/paginasPessoa/BuscarPessoa';
import ListarPessoa from './components/paginasPessoa/ListarPessoa';
import ExcluirPessoa from './components/paginasPessoa/ExcluirPessoa';

// Componentes de Transações
import CadastrarTransacoes from './components/PaginaTransacoes/CadastrarTransacoes';
import AprensetarTransacoes from './components/PaginaTransacoes/AprensetarTransacoes';

// Componentes de Consulta
import RealizarConsulta from './components/paginaConsulta/RealizarConsulta';

//Configurando todas as rotas para que possa realizar a chamada de seus respectivos compenentes
function App() {
  return (
    <Router>
      <Switch>
        <Route element={<Layout />}>
          <Route path="/" element={<PaginaPrincipal />} />

          {/* Rotas de Pessoas */}
          <Route path="/pessoas/cadastrar" element={<CadastrarPessoa />} />
          <Route path="/pessoas/buscar" element={<BuscarPessoa />} />
          <Route path="/pessoas/listar" element={<ListarPessoa />} />
          <Route path="/pessoas/excluir" element={<ExcluirPessoa />} />

          {/* Rotas de Trasações */}
          <Route path="/transacoes/cadastrar" element={<CadastrarTransacoes />} />
          <Route path="/transacoes/apresentar" element={<AprensetarTransacoes />} />

          {/* Rotas de Consultas */}
          <Route path="/consulta/consultar" element={<RealizarConsulta />} />


        </Route>
      </Switch>
    </Router>


  );
}

export default App;

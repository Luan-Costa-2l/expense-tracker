import './App.styles.scss';
import { TableArea } from './components/TableArea';


const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Sistema Financeiro</h1>
      </header>
      <main className="body">

        {/* <InfoArea /> */}

        {/* área de inserção */}

        <TableArea />
      </main>
    </div>
  )
}

export default App;
import { useState } from 'react';
import './App.styles.scss';
import { TableArea } from './components/TableArea';
import { item } from './data/items';


const App = () => {
  const [list, setList] = useState(item);

  return (
    <div className="container">
      <header className="header">
        <h1>Sistema Financeiro</h1>
      </header>
      <main className="body">

        {/* <InfoArea /> */}

        {/* área de inserção */}

        <TableArea list={list} />
      </main>
    </div>
  )
}

export default App;
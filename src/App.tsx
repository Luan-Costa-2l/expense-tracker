import { useState, useEffect } from 'react';
import './App.styles.scss';
import { TableArea } from './components/TableArea';
import { item } from './data/items';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { Item } from './types/Item';
import { InfoArea } from './components/InfoArea';


const App = () => {
  const [list, setList] = useState(item);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList( filterListByMonth(item, currentMonth) );
  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Sistema Financeiro</h1>
      </header>
      <main className="body">

        <InfoArea currentMonth={currentMonth} onMonthChange={handleMonthChange} />

        {/* área de inserção */}

        <TableArea list={filteredList} />
      </main>
    </div>
  )
}

export default App;
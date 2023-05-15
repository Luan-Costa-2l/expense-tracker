import { useState, useEffect } from 'react';
import './App.styles.scss';
import { TableArea } from './components/TableArea';
import { item } from './data/items';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { Item } from './types/Item';
import { InfoArea } from './components/InfoArea';
import { categories } from './data/categories';
import { InputArea } from './components/InputArea';


const App = () => {
  const [list, setList] = useState(item);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeValue = 0;
    let expenseValue = 0;
    for (let item of filteredList) {
      if (categories[item.category].expense) {
        expenseValue += item.value;
      } else {
        incomeValue += item.value;
      }
    }
    setIncome(incomeValue);
    setExpense(expenseValue);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Sistema Financeiro</h1>
      </header>
      <main className="body">

        <InfoArea currentMonth={currentMonth} onMonthChange={handleMonthChange} income={income} expense={expense} />

        <InputArea />

        <TableArea list={filteredList} />
      </main>
    </div>
  )
}

export default App;
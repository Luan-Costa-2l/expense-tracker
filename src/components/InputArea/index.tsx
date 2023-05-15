import { useState } from 'react';
import './styles.scss';
import { Item } from '../../types/Item';
import { categories } from '../../data/categories';

type Props = {
    addItem: (item: Item) => void;
}

export const InputArea = ({ addItem }: Props) => {
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);

    const categoriesKeys = Object.keys(categories);


    const clearFields = () => {
        setDate('');
        setCategory('');
        setTitle('');
        setValue(0);
    }

    const handleItemData = () => {
        let warming: string[] = [];
        if(isNaN(new Date(date).getTime())) {
            warming.push('Data inválida.');
        }
        if (!category) {
            warming.push('Adicione uma categoria.');
        }
        if (!title) {
            warming.push('Adicione um título.');
        }
        if (!value) {
            warming.push('Adicione um valor.');
        }
        if (warming.length > 0) {
            alert(warming.join('\n'));
            return;
        }

        let newItem: Item = {
            date: new Date(date),
            category,
            title,
            value
        }
        addItem(newItem);
        clearFields();
    }

    return (
        <div className="inputArea">
            <div className="inputItem">
                <div className="inputTitle">Data</div>
                <input type="date" value={date} onChange={e => setDate(e.target.value)} />
            </div>
            <div className="inputItem">
                <div className="inputTitle">Categoria</div>
                <select value={category} onChange={e => setCategory(e.target.value)}>
                    <option value=""></option>
                    {categoriesKeys.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </select>
            </div>
            <div className="inputItem">
                <div className="inputTitle">Título</div>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="inputItem">
                <div className="inputTitle">Valor</div>
                <input type="number" value={value} onChange={e => setValue(parseFloat(e.target.value))} placeholder='0' />
            </div>
            <button className='inputButton' onClick={handleItemData}>Adicionar</button>
        </div>
    )
}
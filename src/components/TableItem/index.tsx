import './styles.scss';
import { formatDate } from '../../helpers/dateFilter';
import { Item } from '../../types/Item';
import { categories } from '../../data/categories';

type Props = {
    item: Item;
}

export const TableItem = ({ item }: Props) => {
    return (
        <tr className='tableItem__body'>
            <td>{formatDate(item.date)}</td>
            <td>
                <div className={`category ${categories[item.category].color}`}>
                    {categories[item.category].title}
                </div>
            </td>
            <td>{item.title}</td>
            <td>R${item.value}</td>
        </tr>
    )
}
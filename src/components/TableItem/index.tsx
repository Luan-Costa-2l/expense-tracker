import './styles.scss';
import { formatDate } from '../../helpers/dateFilter';
import { Item } from '../../types/Item';

type Props = {
    item: Item;
}

export const TableItem = ({ item }: Props) => {
    return (
        <tr className='tableItem__body'>
            <td>{formatDate(item.date)}</td>
            <td>{item.category}</td>
            <td>{item.title}</td>
            <td>R${item.value}</td>
        </tr>
    )
}
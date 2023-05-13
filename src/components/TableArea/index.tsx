import './styles.scss';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';

type Props = {
    list: Item[];
}

export const TableArea = ({ list }: Props) => {
    return (
        <table className='tableContainer'>
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Categoria</th>
                    <th>Título</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <TableItem key={index} item={item} />
                ))}
            </tbody>
        </table>
    );
}
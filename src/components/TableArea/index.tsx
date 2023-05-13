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
                <tr>
                    <td>12/11/23</td>
                    <td>Alimentação</td>
                    <td>Pizza</td>
                    <td>R$50</td>
                </tr>
            </tbody>
        </table>
    );
}
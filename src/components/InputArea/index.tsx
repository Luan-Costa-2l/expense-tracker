import './styles.scss';

export const InputArea = () => {
    return (
        <div className="inputArea">
            <div className="inputItem">
                <div className="inputTitle">Data</div>
                <input type="date" placeholder='dd/mm/yyyy' />
            </div>
            <div className="inputItem">
                <div className="inputTitle">Categoria</div>
                <select>
                    <option value=""></option>
                    <option value="">exemple</option>
                </select>
            </div>
            <div className="inputItem">
                <div className="inputTitle">Título</div>
                <input type="text" />
            </div>
            <div className="inputItem">
                <div className="inputTitle">Valor</div>
                <input type="number" />
            </div>
            <button className='inputButton'>Adicionar</button>
        </div>
    )
}
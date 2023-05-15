import { formatCurrentMonth } from '../../helpers/dateFilter';
import './styles.scss';

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
}

export const InfoArea = ({ currentMonth, onMonthChange }: Props) => {

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        const currentDate = new Date(parseInt(year), parseInt(month), 1);
        currentDate.setMonth( currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()}`);
    }

    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        const currentDate = new Date(parseInt(year), parseInt(month), 1);
        currentDate.setMonth( currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()}`);
    }

    return (
        <div className="infoBody">
            <div className="monthArea">
                <div className="monthArrow" onClick={handlePrevMonth}>⬅️</div>
                <div className="monthItem">{formatCurrentMonth(currentMonth)}</div>
                <div className="monthArrow" onClick={handleNextMonth}>➡️</div>
            </div>
            <div className="resumeArea">
                <div className="resumeItem">
                    <div className="resumeTitle">Receita</div>
                    <div className="resumeValue">R$0.00</div>
                </div>
                <div className="resumeItem">
                    <div className="resumeTitle">Despesa</div>
                    <div className="resumeValue">R$700.00</div>
                </div>
                <div className="resumeItem">
                    <div className="resumeTitle">Balanço</div>
                    <div className="resumeValue">R$900.00</div>
                </div>
            </div>
        </div>
    )
}
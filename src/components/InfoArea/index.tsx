import { formatCurrentMonth, formatPrice } from '../../helpers/dateFilter';
import './styles.scss';

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {

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

    const expenseBalance = () => {
        if (income == expense) {
            return '#000';
        } else if (income < expense) {
            return '#F00';
        }
        return '#0F0';
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
                    <div className="resumeValue">{formatPrice(income)}</div>
                </div>
                <div className="resumeItem">
                    <div className="resumeTitle">Despesa</div>
                    <div className="resumeValue">{formatPrice(expense)}</div>
                </div>
                <div className="resumeItem">
                    <div className="resumeTitle">Balanço</div>
                    <div className="resumeValue" style={{color: expenseBalance()}}>{formatPrice(income - expense)}</div>
                </div>
            </div>
        </div>
    )
}
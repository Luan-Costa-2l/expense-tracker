import { formatCurrentMonth, formatPrice } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';
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
                <ResumeItem title='Receita' value={income} />
                <ResumeItem title='Despesa' value={expense} />
                <ResumeItem title='Balanço' value={income - expense} color={expenseBalance()} />
            </div>
        </div>
    )
}
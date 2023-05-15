import { formatPrice } from '../../helpers/dateFilter';
import './styles.scss';

type Props = {
    title: string;
    value: number;
    color?: string;
}

export const ResumeItem = ({ title, value, color }: Props) => {
    return (
        <div className="resumeItem">
            <div className="resumeTitle">{title}</div>
            <div className="resumeValue" style={{color: color}}>{formatPrice(value)}</div>
        </div>
    )
}
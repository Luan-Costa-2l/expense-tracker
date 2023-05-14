import './styles.scss';

export const InfoArea = () => {
    return (
        <div className="infoBody">
            <div className="monthArea">
                <div className="monthArrow">⬅️</div>
                <div className="monthItem">Março</div>
                <div className="monthArrow">➡️</div>
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
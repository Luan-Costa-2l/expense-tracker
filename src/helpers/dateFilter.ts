import { Item } from "../types/Item";

export const getCurrentMonth = () => {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth()}`;
}

export const formatCurrentMonth = (currentMonth: string) => {
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const date = currentMonth.split('-');
    return `${months[parseInt(date[1])]} de ${date[0]}`;
}

export const filterListByMonth = (list: Item[], date: string) => {
    let newList: Item[] = [];
    const [year, month] = date.split('-');
    for (let item of list) {
        const iYear = item.date.getFullYear();
        const iMonth = item.date.getMonth();
        if (+year === iYear && +month === iMonth) {
            newList.push(item);
        }
    }
    return newList;
}

const fixZero = (number: number) => {
    return number < 10 ? '0'+number : number;
}

export const formatDate = (date: Date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${fixZero(day)}/${fixZero(month)}/${fixZero(year)}`;
}

export const formatPrice = (number: number) => {
    return number.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
}
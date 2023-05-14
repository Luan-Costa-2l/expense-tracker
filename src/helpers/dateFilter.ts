export const getCurrentMonth = () => {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth()}`;
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
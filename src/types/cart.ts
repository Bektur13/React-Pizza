export interface PizzaItem {
    id: string, 
    name: string, 
    price: number,
    imageUrl?: string,
    type?: string,
    size?: number
}

export interface CartItem {
    items: PizzaItem[],
    totalPrice: number,
}

export interface CartState {
    items: Record<string, CartItem>,
    totalPrice: number,
    totalCount: number
}

const getTotalPrice = (arr: PizzaItem[]): number => {
    return arr.reduce((sum, obj) => obj.price + sum, 0);
}

const getTotalSum = <T extends Record<string, any>>(obj: T, path: string): number => {
    const _get = (obj: any, path: string) => {
        const [firstKey, ...keys] = path.split('.');
        return keys.reduce((val, key) => val[key], obj[firstKey]);
    }

    return Object.values(obj).reduce((sum, val) => {
        const value = _get(val, path);
        return sum + value;
    }, 0);
}


    
export interface Pizza {
    id: number,
    name: string, 
    imageUrl: string,
    price: any,
    sizes: number[],
    types: number[],
    category?: number,
    rating?: number,
}

export interface SortOption {
    type: string,
    order: 'asc' | 'desc';
}

export interface PizzaState {
    items: Pizza[],
    pizzaItems: object
}

export interface PizzaBlockProps {
    pizza: Pizza,
    countPizza: number,
}
export interface Pizza {
    id: string,
    name: string, 
    imageUrl: string,
    price: number,
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
    selectedSize: number | null,
    selectedType: number | null,
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null
}
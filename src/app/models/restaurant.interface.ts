export interface Restaurant {
    id: string,
    name: string,
    location: string,
    category: string[],
    price: string,
    rate: number,
    image?: string
}
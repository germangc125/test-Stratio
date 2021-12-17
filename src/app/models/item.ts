export interface Item{
    Id: number;
    Name: string;
    Children: Item[];
    Level: number;
}
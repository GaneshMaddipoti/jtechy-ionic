import { Field } from './field';

export class Course {
    id: number;
    name: string; 
    description: string;
    category: string;
    rank: number;
    fields: Field[];
}
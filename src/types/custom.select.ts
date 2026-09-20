export interface IOption {
    value: string;
    label: string;
}

export interface ICustomSelectProps {
    name: string;
    id?: string;
    options: IOption[];
    required?: boolean;
    placeholder?: string;
}
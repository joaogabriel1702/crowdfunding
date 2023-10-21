declare interface IAction {
    img?: string;
    title?: string;
    author?: string;
    description?: string;
    address?: AddresType;
    amountCollected?: number;
    totalGoal?: number;
    finalDate?: string;
}

declare interface AddresType {
    uf?: string;
    city?: string;
    neighborhood?: string;
}
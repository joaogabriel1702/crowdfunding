declare interface IProblem {
    title?: string,
    description: string,
    address: AddressType,
    imageURL?: string,
    pix: string,
    deadline: string | Date,
    author: string,
}
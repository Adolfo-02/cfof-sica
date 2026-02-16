// Re-exportar todos os models
export class User {
    id: string;
    name: string;
    email: string;

    constructor(id: string, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

export class Product {
    id: string;
    name: string;
    price: number;

    constructor(id: string, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

export class Order {
    id: string;
    userId: string;
    productIds: string[];
    totalAmount: number;

    constructor(id: string, userId: string, productIds: string[], totalAmount: number) {
        this.id = id;
        this.userId = userId;
        this.productIds = productIds;
        this.totalAmount = totalAmount;
    }
}
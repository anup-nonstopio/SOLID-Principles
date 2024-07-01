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
    products: Product[] = [];

    addProduct(product: Product) {
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    removeProduct(productId: string) {
        this.products = this.products.filter((product) => product.id !== productId);
    }

    calculatePricing() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }

    generateInvoice() {
        console.log("Invoice:");
        console.log("--------------------------------------------------");
        console.log("| Product ID | Product Name | Price             |");
        console.log("--------------------------------------------------");
        this.products.forEach((product) => {
            console.log(`| ${product.id} | ${product.name} | $${product.price.toFixed(2)} |`);
        });
        console.log("--------------------------------------------------");
        console.log(`Total: $${this.calculatePricing().toFixed(2)}`);
    }

    processPayment() {
        console.log("Payment processed successfully!");
    }
}
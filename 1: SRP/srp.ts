// Single responsibility principle
import { Product, Order } from './Order';

const product1 = new Product('1', 'Laptop', 500);
const product2 = new Product('2', 'Iphone', 1000);

const order = new Order();
order.addProduct(product1);
order.addProduct(product2);

order.generateInvoice();
order.processPayment();
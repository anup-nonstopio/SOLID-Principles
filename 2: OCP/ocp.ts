// Open-close principle
class PaymentProcessor {
    processPayment(amount: number, paymentType: string) {
        if(paymentType === 'creditcard') {
            console.log(`Processing credit card payment of $${amount}`);
        }
        else if(paymentType === 'paypal') {
            console.log(`Processing PayPal payment of $${amount}`);
        }
        else if(paymentType === 'googlepay') {
            console.log(`Processing Google Pay payment of $${amount}`);
        }
        else {
            console.log(`Unknown payment type: ${paymentType}`);
        }
    }
}
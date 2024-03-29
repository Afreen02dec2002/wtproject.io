function updateAction() {
    var paymentMethod = document.querySelector('input[name="payment_method"]:checked').value;
    var paymentPage;
    switch (paymentMethod) {
        case 'credit_card':
            paymentPage = 'credit.html';
            break;
        case 'Debit_card':
            paymentPage ='debit.html';
            break;
        case 'cash':
            paymentPage = 'cashpg.html';
            break;
        case 'link':
            paymentPage = 'upi.html';
            break;
        default:
            return false;
    }
    window.open(paymentPage, '_blank');
    return false; // Prevent form submission
}
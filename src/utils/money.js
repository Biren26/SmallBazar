export function formatMoney(amountCents){
    // Prices are stored as integer cents to avoid rounding errors during calculations.
    return `$${(amountCents / 100).toFixed(2)}` ;
}
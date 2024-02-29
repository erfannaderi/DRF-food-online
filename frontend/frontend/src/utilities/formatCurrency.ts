// Define options for USD currency format
const usdCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

// Define options for Iranian Rial (IRR) currency format
const iranianRialCurrencyFormat = new Intl.NumberFormat('fa-IR', {
    style: 'currency',
    currency: 'IRR'
});

// Example values
const priceUSD = 10;
const priceIRR = 5000000;

// Format values using different currency formats
const formattedPriceUSD = usdCurrencyFormat.format(priceUSD);
const formattedPriceIRR = iranianRialCurrencyFormat.format(priceIRR);

// // Output the formatted values
// console.log("Formatted Price in USD:", formattedPriceUSD); // Output: $1,000.00
// console.log("Formatted Price in Iranian Rial:", formattedPriceIRR); // Output: ‎ریال ۵,۰۰۰,۰۰۰
export function formatCurrencyIR(number: number) {
    return(
        iranianRialCurrencyFormat.format(number)
    )
}
export function formatCurrencyUSD(number: number) {
    return(
        usdCurrencyFormat.format(number)
    )
}
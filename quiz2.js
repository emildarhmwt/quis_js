let products = [
    {id: 1, name: 'Product A', price: 1000, points: 10},
    {id: 2, name: 'Product B', price: 2000, points: 25},
    {id: 3, name: 'Product C', price: 5000, points: 50},
    {id: 4, name: 'Product D', price: 8000, points: 100},
];
let availablePoints = 150;

let purchasedProducts = [];
let totalSpent = 0;

// Fungsi untuk mendapatkan produk dengan poin tertinggi
function getMaxPointsProduct(products) {
    return products.reduce((maxProduct, product) => 
        product.points > maxProduct.points ? product : maxProduct, products[0]
    );
}

// Fungsi untuk menghitung sisa poin setelah membeli produk dengan poin tertinggi
function calculateRemainingPoints(products, availablePoints) {
    let maxProduct = getMaxPointsProduct(products);
    return availablePoints - maxProduct.points;
}

// Fungsi untuk menukarkan produk berdasarkan poin tertinggi hingga poin habis atau tidak cukup
function redeemProducts(products, availablePoints) {
    // Urutkan produk berdasarkan poin tertinggi
    let sortedProducts = products.sort((a, b) => b.points - a.points);

    let purchasedProducts = [];
    let totalSpent = 0;

    for (let product of sortedProducts) {
        if (availablePoints >= product.points) {
            purchasedProducts.push(product);
            totalSpent += product.price;
            availablePoints -= product.points;
        }
    }

    return { purchasedProducts, totalSpent };
}

// Contoh penggunaan
let maxProduct = getMaxPointsProduct(products);
console.log("Product with max points:", maxProduct);

let remainingPoints = calculateRemainingPoints(products, availablePoints);
console.log("Remaining points after purchasing max points product:", remainingPoints);

let result = redeemProducts(products, availablePoints);
console.log("Purchased Products:", result.purchasedProducts);
console.log("Total Spent:", result.totalSpent);

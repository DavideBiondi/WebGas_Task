console.log('view_item.js LOADED');
(function () {
// This was a lethal error
// const productEl = document.querySelector('product.info');
const productEl = document.querySelector('.product-info');

if (!productEl) {
    return;
}

const item = {
    item_id: productEl.dataset.productId,
    item_name: productEl.dataset.productTitle,
    price: Number(productEl.dataset.productPrice),
    currency: productEl.dataset.productCurrency,
};

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    event: 'view_item',
    ecommerce: {
        items: [item]
    }
});

console.log('view_item fired', item);

})();
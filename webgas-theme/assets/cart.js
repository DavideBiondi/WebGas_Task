console.log('cart.js LOADED');

function getCart() {
  return fetch('/cart.js', {
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(res => res.json());
}

getCart()
  .then(cart => {
    console.log('cart state', cart);
    console.log('items count', cart.item_count);
  })
  .catch(err => {
    console.error('cart.js error', err);
  });

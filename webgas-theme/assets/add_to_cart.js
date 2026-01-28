console.log("add_to_cart.js LOADED");

(function () {
  const form = document.querySelector('.product-form form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const variantId = formData.get('id');

    console.log('add_to_cart attempt, variantId:', variantId);

    fetch('/cart/add.js', {
      method: 'POST',
      body: formData,
      credentials: 'same-origin'
    })
    .then(res => {
      console.log('response status:', res.status);
      return res.text();   // <-- NON json
    })
    .then(text => {
      console.log('raw response:', text);
    })
    .catch(err => {
      console.error('add_to_cart error', err);
    });
  });
})();







/* console.log("add_to_cart.js LOADED");

(function () {
    // Errore perché Shopify non mette automaticamente la classe sul <form>, ma sul wrapper
    // const form = document.querySelector('.product-form');
    const form = document.querySelector('.product-form form');

    if (!form) {
        return;
    }

    window.dataLayer = window.dataLayer || [];

    form.addEventListener('submit', function(e){
        e.preventDefault();

        const formData= new FormData(form);
        const variantId= formData.get('id');
        const quantity= Number(formData.get('quantity')) || 1;

        console.log('variantId:', variantId, 'quantity:', quantity);

        fetch('/cart/add.js', {
            method: 'POST',
            headers: {
                'Accept':'application/json'
            },
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            const item = {
                item_id: data.product_id,
                item_name: data.product_title,
                item_variant: data.variant_title,
                price: data.price / 100,
                quantity: quantity
            };

            window.dataLayer.push({
                event: 'add_to_cart',
                ecommerce: {
                    items: [item]
                }
            });

            console.log('add_to_cart fired', item);

        })
        .catch(err => {
            console.error('add_to_cart error', err)
        });

    });

})(); */


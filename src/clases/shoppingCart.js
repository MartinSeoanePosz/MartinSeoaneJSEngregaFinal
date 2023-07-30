class ShoppingCart {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];  }

  addProduct(productId, products) {
    const product = products.find(product => product.id === productId);
    this.cart.push(product);
    this.saveCart();
    this.renderCart();
  }

  removeProduct(index) {
    this.cart.splice(index, 1);
    this.saveCart();
    this.renderCart();
  }
// carrito guardado en local storage
  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
// funcion items para comprar
  renderProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    for (let product of products) {
      const productElem = document.createElement('div');
      productElem.className = 'product';
      productElem.innerHTML = `
        <img src="./img/${product.img}" alt="" width="80" height="80" >
        <h2>${product.name}</h2>
        <p>$${product.price}</p>
        <button class="btn btn-outline-primary" onclick="shoppingCart.addProduct(${product.id}, products)">Add to Cart</button>
      `;

      productContainer.appendChild(productElem);
    }
    this.renderCart();

  }
// funcion items en el carrito
  renderCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';

    for (let i = 0; i < this.cart.length; i++) {
      let item = this.cart[i];
      const cartItemElem = document.createElement('div');
      cartItemElem.className = 'cart-item';
      cartItemElem.innerHTML = `
      <img src="./img/${item.img}" alt="" width="100" height="100" >
        <h2>${item.name}</h2>
        <p>$${item.price}</p>
        <button class="btn btn-outline-danger" onclick="shoppingCart.removeProduct(${i})">Remove</button>
      `;

      cartContainer.appendChild(cartItemElem);
    }
  }
}

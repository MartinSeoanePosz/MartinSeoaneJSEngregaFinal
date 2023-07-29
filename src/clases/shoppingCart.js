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

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  renderProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    for (let product of products) {
      const productElem = document.createElement('div');
      productElem.className = 'product';
      productElem.innerHTML = `
        <h2>${product.name}</h2>
        <p>$${product.price}</p>
        <button class="btn btn-outline-primary" onclick="shoppingCart.addProduct(${product.id}, products)">Add to Cart</button>
      `;
    //   const productElem = document.createElement('div');
    //   productElem.className = 'product';
    //   productElem.innerHTML = `
    //   <div class="card" style="width: 18rem;">
    //   <img src="..." class="card-img-top" alt="...">
    //   <div class="card-body">
    //     <h5 class="${product.name}">Card title</h5>
    //     <p class="card-text">$${product.price}</p>
    //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //     <a href="#" class="btn btn-info" onclick="shoppingCart.addProduct(${product.id}, products)"> Add to Cart</a>
    //   </div>
    // </div>
    //   `;

      productContainer.appendChild(productElem);
    }
    this.renderCart();

  }

  renderCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';

    for (let i = 0; i < this.cart.length; i++) {
      let item = this.cart[i];
      const cartItemElem = document.createElement('div');
      cartItemElem.className = 'cart-item';
      cartItemElem.innerHTML = `
        <h2>${item.name}</h2>
        <p>$${item.price}</p>
        <button class="btn btn-outline-danger" onclick="shoppingCart.removeProduct(${i})">Remove</button>
      `;

      cartContainer.appendChild(cartItemElem);
    }
  }
}

class ShoppingCart {
  constructor() { this.cart = JSON.parse(localStorage.getItem('cart')) || []; }

    addProduct(productId, products) {
    const product = products.find(product => product.id === productId);
    this.cart.push(product);
    this.saveCart();
    this.renderCart();
    Swal.mixin({
      toast: true,
      position: 'bottom-right',
      iconColor: 'green',
      customClass: {
        popup: 'colored-toast'
      },
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true
    }).fire({ icon: 'success', title: 'Added to cart' });
    
  } 

  removeProduct(index) {

    Swal.fire({
      title: 'Are you sure?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Removed!',
          'Your item has been removed.',
          'success',
          this.cart.splice(index, 1),
          this.saveCart(),
          this.renderCart(),
        )
      }
    })
    
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
        <div>
        <img src="./img/${product.img}"class="rounded mx-auto d-block" alt="" width="80" height="80" >
        <h2 class="text-center">${product.name}</h2>
        <p class="text-center">$${product.price}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-center"><button class="btn btn-outline-primary me-md-2" onclick="shoppingCart.addProduct(${product.id}, products)">Add to Cart</button></div>
        </div>
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

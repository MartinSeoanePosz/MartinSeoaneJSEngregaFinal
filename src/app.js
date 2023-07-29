const products = [
  new Product(1, 'Monitor', 100),
  new Product(2, 'Teclado', 200),
  new Product(3, 'Monitor', 100),
  new Product(4, 'Teclado', 200),
  new Product(5, 'Monitor', 100),
  new Product(6, 'Teclado', 200),
  new Product(7, 'Monitor', 100),
  new Product(8, 'Teclado', 200),
  new Product(9, 'Monitor', 100),
  new Product(10, 'Teclado', 200),
  new Product(11, 'Monitor', 100),
  new Product(12, 'Teclado', 200),
  new Product(13, 'Mouse', 300)
];

const shoppingCart = new ShoppingCart();
shoppingCart.renderProducts(products);

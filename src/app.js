const products = [
  new Product(1, 'Monitor S Q65', 150000, "monitor.png"),
  new Product(2, 'Teclado Razer', 20000, "teclado.png"),
  new Product(3, 'Headset NogaNet', 15000, "headset.png"),
  new Product(4, 'Mouse RedDragon', 12000, "mouse.jpg"),
  new Product(5, 'Placa de Video NVIDIA', 450000, "NVIDIA.png"),

];

const shoppingCart = new ShoppingCart();
shoppingCart.renderProducts(products);

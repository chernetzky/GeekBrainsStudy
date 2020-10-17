class ProductList {
    #goods;
  
    constructor(container = '.products') {
      this.container = container;
      this.#goods = [];
      this._allProducts = [];
  
      this._fetchGoods();
      this.#render();
    }
  
    _fetchGoods() {
      this.#goods = [
        {id: 1, title: 'Notebook', price: 20000},
        {id: 2, title: 'Mouse', price: 1500},
        {id: 3, title: 'Keyboard', price: 5000},
        {id: 4, title: 'Gamepad', price: 4500},
      ];
    }
  
    #render() {
      const block = document.querySelector(this.container);
  
      for (let product of this.#goods) {
        const productObject = new ProductItem(product);
  
        this._allProducts.push(productObject);
  
        block.insertAdjacentHTML('beforeend', productObject.getGoodHTML());
      }
    }

    calculatePrice() {
      let totalPrice = 0;
      this.#goods.forEach(good => {
        totalPrice = totalPrice + good.price;
      });
      return totalPrice;     
    }
}

  
  class ProductItem {
    constructor(product, img='https://placehold.it/170x220') {
      this.title = product.title;
      this.price = product.price;
      this.id = product.id;
      this.img = img;
    }
  
    getGoodHTML() {
      return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
              </div>`;
    }
  }
  
  const list = new ProductList();
  console.log(list.calculatePrice());
    
    

class CartOfProducts {
    getProducts() {}// показать список товаров в корзине
    calculatePrice() {}// рассчитать цену
    addProduct() {}// выбрать товар
    removeProduct() {}// удалить товар
    startPurchase() {}// оформить покупку
    applyCoupon() {}// применить купон
}

class CartOfProductsItem {
setQuantity() {}// выбрать количество
makeDiscount() {}// применить скидку
}
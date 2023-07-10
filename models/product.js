const Cart = require('./cart');

const db = require('../util/database');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute('INSERT INTO sys.products (title , price , imageUrl , description) VALUEs (?,?,?,?)',
    [this.title,this.price,this.imageUrl,this.description]
    
    );
  }

  static deleteById(id) {
    getProductsFromFile(products => {
      const product = products.find(prod => prod.id === id);
      const updatedProducts = products.filter(prod => prod.id !== id);
      fs.writeFile(p, JSON.stringify(updatedProducts), err => {
        if (!err) {
          Cart.deleteProduct(id, product.price);
        }
      });
    });
  }

  static fetchAll() {
     return db.execute('SELECT * FROM sys.products');
  }

  static findById(id) {
    return db.execute('SELECT * FROM sys.products WHERE products.id = ?',[id])
  }
};

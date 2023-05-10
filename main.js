class productManager {
    constructor(){
        thais.products = [];
    }
static id = 0
addProduct (title, description, price, image, stock, code){
    productManager.id++
    this.products.push({title, description, price, image,stock,code, id:productManager.id});
}
getProduct(){
    return this.products;
}
Existente (id) {
    return this.products.find((producto) => producto.id === id)
}
getProductById(id){
    !this.Existente(id) , console.log("Not Found") : console.log(this.Existente(id));
}
}

const productos = new productManager

productos.addProduct('titulo1', 'description: Cocacola', 400 , "image1", 5 , 123)
productos.addProduct('titulo2', 'description: Fernet', 2000 , "image2", 5, 124)
productos.addProduct('titulo3', 'description: Papas fritas', 700 , "image3", 4, 125)

console.log(productos.getProduct())


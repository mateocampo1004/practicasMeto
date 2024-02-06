'use strict'

class Product{

    constructor(description,price,stock){
        this.description = description;
        this.price = price;
        this.stock = stock;

    }

    showInfo(){
     
        alert("Descripcion: "+this.description);
        alert("Precio: "+this.price);
        alert("Stock: "+this.stock);
    }

    minusStock(venta){
        this.stock = this.stock-venta;        
    }

    incrementStock(incre){
     
        this.stock = this.stock+incre;
    }

    updatePrice(price){
         this.price= price;  
    }

}

let cereal = new Product("Hojuelas de maiz", 10, 20);

cereal.showInfo();
cereal.minusStock(10);
cereal.incrementStock(5);
cereal.updatePrice(12.5);
cereal.showInfo();

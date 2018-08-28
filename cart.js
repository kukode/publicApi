const fs = require('fs')

class Cart{
    constructor(){
        this.item = []
        this.price = []
        this.qty = []
    }
    add(items,prices,qtys){
        this.item.push(items)
        this.price.push(prices)
        this.qty.push(qtys)
        console.log(this.item)
        console.log(this.price)
        console.log(this.qty)
        return this
        
    }
    remove(items,prices,qtys){
        console.log(items.map(x => this.item.splice(x,1)))
        prices.map(x => this.price.splice(x,1))
        qtys.map(x => this.qty.splice(x,1))

        console.log(this.item)
        console.log(this.price)
        console.log(this.qty)
        return this
    }
    total(){
        console.log(this.item.length)
        
    }
    output(){
        fs.writeFile('log.txt',JSON.stringify(cart),function(err){
            if(err) throw err
        })

    }
}

const cart = new Cart()

cart.add('sabun',1000,2)
    .add('mie',10000,2)
    .add('gula',2000,1)
    .add('kopi',2000,4)
    .remove([1],[1],[1])
    .remove([1],[1],[1])
    
cart.total()
cart.output()